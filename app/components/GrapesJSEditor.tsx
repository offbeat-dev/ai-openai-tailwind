/* eslint-disable @next/next/no-sync-scripts */
"use client";

import React, { useEffect, useState } from "react";
import { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import GrapesJS from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";

const GrapesJSEditor = ({ components }: { components: [] }) => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const escapeName = (name: string) =>
      `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
    if (!pluginLoaded) {
      setPluginLoaded(true);
    } else if (!editor) {
      console.log("loading editor");
      const e = GrapesJS.init({
        autorender: false,
        container: `#example-editor`,
        fromElement: true,
        selectorManager: { escapeName },
        plugins: ["grapesjs-tailwind", gjsPresetWebpage],
        storageManager: false,
      });
      e.Panels.addButton("options", {
        id: "update-theme",
        className: "fa fa-adjust",
        command: "open-update-theme",
        attributes: {
          title: "Update Theme",
          "data-tooltip-pos": "bottom",
        },
      });
      e.Panels.addButton("options", {
        id: "show-json",
        className: "fa fa-file-code-o",
        context: "show-json",
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
        console.log(JSON.parse(JSON.stringify(e.getComponents())));
      });
      e.render();
      setEditor(e);
    } else if (editor) {
      editor.setComponents(components);
    }
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
      <style>{`.gjs-four-color{color:#ffb800;} .gjs-one-bg{background-color:#1c1c1c;} .gjs-logo{height:25px;} .gjs-logo-cont{display:inline-block;position-relative; top:3px;} .gjs-pn-commands .gjs-pn-buttons{display:none;}
      `}</style>
      <div id="example-editor"></div>
    </>
  );
};

export default GrapesJSEditor;
