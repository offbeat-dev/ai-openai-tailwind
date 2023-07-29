"use client";

import React, { useEffect, useCallback } from "react";
import "grapesjs/dist/css/grapes.min.css";
import PromptForm from "./components/PromptForm";
import parse from "html-react-parser";

export default function IndexPage() {
  const [prompt, setPrompt] = React.useState<string>("");
  const [completion, setCompletion] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (completion) {
      setIsLoading(false);
    }
  }, [completion]);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    if (formData.has("prompt")) {
      setPrompt(formData.get("prompt") as string);
    }
    if (formData.has("pdfFile")) {
      //send form to CMS API
      console.log(formData.get("pdfFile"));
    }
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: prompt }),
    });
    const data = await response.json();
    setIsLoading(false);
    setPrompt("");
    setCompletion(data.result);
  };

  // const [htmlString, setHtmlString] = React.useState(null);
  // const [cssString, setCssString] = React.useState("");
  // const [pluginLoaded, setPluginLoaded] = React.useState(false);
  // const [editor, setEditor] = React.useState<Editor | null>(null);
  // useEffect(() => {
  //   const escapeName = (name: string) =>
  //     `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");
  //   if (!pluginLoaded) {
  //     setPluginLoaded(true);
  //   } else if (!editor) {
  //     const e = GrapesJS.init({
  //       autorender: false,
  //       container: `#example-editor`,
  //       fromElement: true,
  //       selectorManager: { escapeName },
  //       plugins: [
  //         "grapesjs-ga",
  //         "grapesjs-component-twitch",
  //         "grapesjs-plugin-forms",
  //         "grapesjs-tailwind",
  //         gjsPresetWebpage,
  //       ],
  //       pluginsOpts: {
  //         "grapesjs-ga": {},
  //         "grapesjs-component-twitch": {},
  //       },
  //       storageManager: false,
  //     });
  //     e.Panels.addButton("options", {
  //       id: "update-theme",
  //       className: "fa fa-adjust",
  //       command: "open-update-theme",
  //       attributes: {
  //         title: "Update Theme",
  //         "data-tooltip-pos": "bottom",
  //       },
  //     });
  //     e.Panels.addButton("options", {
  //       id: "show-json",
  //       className: "fa fa-file-code-o",
  //       context: "show-json",
  //       command(editor: Editor) {
  //         editor.Modal.setTitle("Components JSON")
  //           .setContent(
  //             `<textarea style="width:100%; height: 250px;" class="text-black">
  //           ${JSON.stringify(editor.getComponents())}
  //         </textarea>`
  //           )
  //           .open();
  //       },
  //     });
  //     e.setComponents([
  //       {
  //         id: "hero-section",
  //       },
  //       {
  //         tagName: "section",
  //         classes: ["text-gray-600", "body-font"],
  //         components: [
  //           {
  //             classes: [
  //               "container",
  //               "mx-auto",
  //               "flex",
  //               "px-5",
  //               "py-24",
  //               "md:flex-row",
  //               "flex-col",
  //               "items-center",
  //             ],
  //             components: [
  //               {
  //                 classes: [
  //                   "lg:max-w-lg",
  //                   "lg:w-full",
  //                   "md:w-1/2",
  //                   "w-5/6",
  //                   "mb-10",
  //                   "md:mb-0",
  //                 ],
  //                 components: [
  //                   {
  //                     type: "image",
  //                     resizable: {
  //                       ratioDefault: 1,
  //                     },
  //                     classes: ["object-cover", "object-center", "rounded"],
  //                     attributes: {
  //                       alt: "hero",
  //                       src: "https://dummyimage.com/720x600",
  //                     },
  //                   },
  //                 ],
  //               },
  //               {
  //                 classes: [
  //                   "lg:flex-grow",
  //                   "md:w-1/2",
  //                   "lg:pl-24",
  //                   "md:pl-16",
  //                   "flex",
  //                   "flex-col",
  //                   "md:items-start",
  //                   "md:text-left",
  //                   "items-center",
  //                   "text-center",
  //                 ],
  //                 components: [
  //                   {
  //                     tagName: "h1",
  //                     type: "text",
  //                     classes: [
  //                       "title-font",
  //                       "sm:text-4xl",
  //                       "text-3xl",
  //                       "mb-4",
  //                       "font-medium",
  //                       "text-gray-900",
  //                     ],
  //                     components: [
  //                       {
  //                         type: "textnode",
  //                         content: "Quality Medical Care",
  //                       },
  //                     ],
  //                   },
  //                   {
  //                     tagName: "p",
  //                     type: "text",
  //                     classes: ["mb-8", "leading-relaxed"],
  //                     components: [
  //                       {
  //                         type: "textnode",
  //                         content:
  //                           "We provide compassionate and professional medical care to ensure your well-being. Our team of dedicated doctors and healthcare professionals are here to support you on your journey to better health.",
  //                       },
  //                     ],
  //                   },
  //                   {
  //                     classes: ["flex", "justify-center"],
  //                     components: [
  //                       {
  //                         tagName: "button",
  //                         type: "text",
  //                         classes: [
  //                           "inline-flex",
  //                           "text-white",
  //                           "bg-indigo-500",
  //                           "border-0",
  //                           "py-2",
  //                           "px-6",
  //                           "focus:outline-none",
  //                           "hover:bg-indigo-600",
  //                           "rounded",
  //                           "text-lg",
  //                         ],
  //                         components: [
  //                           {
  //                             type: "textnode",
  //                             content: "Book an Appointment",
  //                           },
  //                         ],
  //                       },
  //                       {
  //                         tagName: "button",
  //                         type: "text",
  //                         classes: [
  //                           "ml-4",
  //                           "inline-flex",
  //                           "text-gray-700",
  //                           "bg-gray-100",
  //                           "border-0",
  //                           "py-2",
  //                           "px-6",
  //                           "focus:outline-none",
  //                           "hover:bg-gray-200",
  //                           "rounded",
  //                           "text-lg",
  //                         ],
  //                         components: [
  //                           {
  //                             type: "textnode",
  //                             content: "Learn More",
  //                           },
  //                         ],
  //                       },
  //                     ],
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         tagName: "section",
  //         classes: ["text-gray-600", "body-font"],
  //         components: [
  //           {
  //             tagName: "section",
  //             classes: ["text-gray-600", "body-font"],
  //           },
  //           {
  //             tagName: "section",
  //             classes: ["text-gray-600", "body-font"],
  //           },
  //           {
  //             tagName: "section",
  //             classes: ["text-gray-600", "body-font"],
  //             components: [
  //               {
  //                 tagName: "section",
  //                 classes: ["text-gray-600", "body-font"],
  //               },
  //               {
  //                 tagName: "section",
  //                 classes: ["text-gray-600", "body-font"],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ]);
  //     e.on("load", () => {
  //       const div = document.createElement("div");
  //       div.classList.add("gjs-logo-cont");
  //       div.innerHTML =
  //         '<a href="https://verndale.com"><img class="gjs-logo" src="verndale.svg"></a>';
  //       document.querySelector(".gjs-pn-commands")?.append(div);
  //     });
  //     e.render();
  //     setEditor(e);
  //   }
  // }, [editor, pluginLoaded]);
  // return (
  //   <>
  //     <link
  //       href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  //       rel="stylesheet"
  //     />
  //     <script src="https://unpkg.com/grapesjs" async></script>
  //     <script src="https://unpkg.com/grapesjs-tailwind" async></script>
  //     <script src="https://cdn.tailwindcss.com" async></script>
  //     <style>{`.gjs-four-color{color:#ffb800;} .gjs-one-bg{background-color:#1c1c1c;} .gjs-logo{height:25px;} .gjs-logo-cont{display:inline-block;position-relative; top:3px;} .gjs-pn-commands .gjs-pn-buttons{display:none;}`}</style>
  //     <div id="example-editor"></div>
  //   </>
  //   // <div>
  //   //
  //   //   <div>Please type your prompt</div>
  //   //   <input
  //   //     className="text-black"
  //   //     value={value}
  //   //     onChange={handleInput}
  //   //     onKeyDown={handleKeyDown}
  //   //   />
  //   //   <div>Prompt: {prompt}</div>
  //   //   <div>
  //   //     Completion: <>{parse(completion)}</>
  //   //   </div>
  //   // </div>
  // );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  } else if (!isLoading && completion !== "") {
    return (
      <>
        <p>{parse(completion)}</p>
      </>
    );
  }

  return (
    <>
      <PromptForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
