/* eslint-disable @next/next/no-sync-scripts */
"use client";

import React, { useEffect, useState } from "react";
import { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import GrapesJS from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import { myPlugin } from "../myPlugin";
import { getSitecoreCDPString } from "../helpers";

const GrapesJSEditor = ({
  components,
  personalizationPrompt,
}: {
  components: [];
  personalizationPrompt: string;
}) => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [toolbarAdded, setToolbarAdded] = useState<any>(false);

  const handleFormSubmit = async (_pageName: string) => {
    const htmlArray = editor?.getHtml().split("</footer>");
    const jsonData = JSON.parse(JSON.stringify(editor?.getComponents()));
    htmlArray?.splice(
      1,
      0,
      "</footer>" + getSitecoreCDPString(_pageName, personalizationPrompt)
    );
    const finalHTML =
      '<!DOCTYPE html><html lang="en"><head><link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet"><title>' +
      _pageName +
      "</title></head>" +
      htmlArray?.join("") +
      "</html>".trim().replace('"', "'");
    console.log(JSON.stringify(jsonData));
    console.log(finalHTML);

    try {
      const response = await fetch(
        "https://vodkabyte.azurewebsites.net/SaveHtml",
        {
          method: "POST",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify({
            htmlContent: finalHTML,
            jsonContent: JSON.stringify(jsonData),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    editor?.Modal.close();
  };

  useEffect(() => {
    const escapeName = (name: string) =>
      `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
    if (!pluginLoaded) {
      setPluginLoaded(true);
    } else if (!editor) {
      const e = GrapesJS.init({
        autorender: false,
        container: `#example-editor`,
        fromElement: true,
        selectorManager: { escapeName },
        plugins: ["grapesjs-tailwind", gjsPresetWebpage, myPlugin],
        storageManager: false,
      });
      e.Panels.addButton("options", {
        id: "send-to-contentful",
        className: "fa fa-cloud-upload",
        context: "send-to-contentful",
        title: "Save to Contentful",
        command(editor: Editor) {
          editor.Modal.setTitle("Send page to Contentful")
            .setContent(
              `<form class="p-12 gap-2">
              <div class="ml-auto mr-0">
                <label class="pb-4 font-semibold" for="spaceId">Page Name:</label><br>
                <div class="flex justify-start gap-2">
                <input class="text-black px-4" type="text" id="pageName" name="pageName" value="" required>
                <button class="btn btn-primary bg-yellow p-2 text-black font-sans font-semibold" type="submit">Send to Contentful</button>
                </div>
              </div>
              </form>`
            )
            .open({
              attributes: {
                id: "send-to-contentful",
              },
            });
        },
        attributes: {
          title: "Save to Contentful",
          "data-tooltip-pos": "bottom",
        },
      });
      e.Panels.addButton("options", {
        id: "show-json",
        className: "fa fa-file-code-o",
        context: "show-json",
        title: "Show JSON",
        command(editor: Editor) {
          editor.Modal.setTitle("Components JSON")
            .setContent(
              `<textarea style="width:100%; height: 250px;" class="text-black">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
            )
            .open();
        },
      });
      e.setComponents(components);
      e.on("load", () => {
        const div = document.createElement("div");
        div.classList.add("gjs-logo-cont");
        div.innerHTML =
          '<a href="https://verndale.com"><img class="gjs-logo" src="verndale.svg"></a>';
        document.querySelector(".gjs-pn-commands")?.append(div);
      });
      e.on("component:add", (c) => {
        // console.log(JSON.parse(JSON.stringify(e.getComponents())));
      });

      e.render();
      setEditor(e);
    } else if (editor) {
      editor.setComponents(components);
      editor.on("modal", (props) => {
        const modalEl = document.getElementById("send-to-contentful");
        if (modalEl) {
          const form = modalEl.querySelector("form");
          if (form) {
            form.addEventListener("submit", (e: any) => {
              e.preventDefault();
              handleFormSubmit(e.currentTarget.pageName.value);
            });
          }
        }
      });
      editor.on("component:selected", (component) => {
        const prevAttributes = {} as any;
        if (
          component.get("type") === "text" &&
          component.components().length === 1
        ) {
          component
            .components()
            .forEach(
              (c: { attributes: { field: any; type: any; content: any } }) => {
                prevAttributes["field"] = c.attributes.field;
                prevAttributes["type"] = c.attributes.type;
                prevAttributes["content"] = c.attributes.content;
              }
            );
        }

        if (
          component.attributes.type === "image" ||
          component.attributes.type === "text"
        ) {
          const aiTool = {
            id: crypto.randomUUID(),
            title: "AI Tool",
            icon: "fa fa-rocket",
            command: async () => {
              if (component.attributes.type === "image") {
                const response = await fetch("/api/image", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    prompt,
                  }),
                });
                const imageResponse = await response.json();
                component.setAttributes({
                  src: imageResponse.url,
                });
              } else if (component.attributes.type === "text") {
                const response = await fetch("/api/text", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    system:
                      "You will be provided with a string of text, your task is to iterate and generate a new string of text keeping the context and a max lenght of" +
                      `${
                        component.attributes.tagName.includes("h")
                          ? " fifty "
                          : " two hundred "
                      }` +
                      "characters",
                    user: prevAttributes.content,
                  }),
                });
                const textResponse = await response.json();
                component.components({
                  ...prevAttributes,
                  content: textResponse.result,
                });
              }
            },
          };
          const defaultToolbar = component.get("toolbar");
          const newToolbar = [
            {
              label:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21v-7h16v7H4Zm5-8q-2.075 0-3.538-1.463T4 8q0-2.075 1.463-3.538T9 3h6q2.075 0 3.538 1.463T20 8q0 2.075-1.463 3.538T15 13H9Zm-3 6h12v-3H6v3Zm3-8h6q1.25 0 2.125-.875T18 8q0-1.25-.875-2.125T15 5H9q-1.25 0-2.125.875T6 8q0 1.25.875 2.125T9 11Zm0-2q.425 0 .713-.288T10 8q0-.425-.288-.713T9 7q-.425 0-.713.288T8 8q0 .425.288.713T9 9Zm6 0q.425 0 .713-.288T16 8q0-.425-.288-.713T15 7q-.425 0-.713.288T14 8q0 .425.288.713T15 9Zm-3 10Zm0-11Z"></path></svg>',
              attributes: {
                id: aiTool.id,
                title: aiTool.title,
              },
              command: aiTool.command,
            },
            ...defaultToolbar,
          ];
          if (defaultToolbar.length === 5) return;
          component.set("toolbar", newToolbar);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, pluginLoaded, components]);

  return (
    <>
      {" "}
      <link
        href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/grapesjs"></script>
      <script src="https://unpkg.com/grapesjs-tailwind"></script>
      <style>{`.gjs-four-color{color:#ffb800;} .gjs-one-bg{background-color:#1c1c1c;} .gjs-logo{height:25px;} .gjs-logo-cont{display:inline-block;position-relative; top:3px;} .gjs-pn-commands .gjs-pn-buttons{display:none;} .object-cover:{filter:none !important;}
      `}</style>
      <div id="example-editor"></div>
    </>
  );
};

export default GrapesJSEditor;
