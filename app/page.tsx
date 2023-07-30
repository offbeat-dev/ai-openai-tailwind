"use client";

import React, { useEffect, useCallback } from "react";
import "grapesjs/dist/css/grapes.min.css";

import GrapesJSEditor from "./components/GrapesJSEditor";
import { pageComponents } from "./components/pageComponents";

export default function IndexPage() {
  const [prompt, setPrompt] = React.useState<string>("");
  const [completion, setCompletion] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [grapesJSComponents, setGrapesJSComponents] = React.useState<any>([]);
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

  //recursively look into pageComponents.hero.components object and replace the content node with its correspoinding node in obj.components
  useEffect(() => {
    const obj = {
      components: [
        {
          tagName: "h1",
          components: [
            {
              id: "gjs-text-1",
              type: "textnode",
              content: "Pet Store - We Take Care of Your Pets",
            },
          ],
        },
        {
          tagName: "p",
          components: [
            {
              id: "gjs-text-3",
              type: "textnode",
              content:
                "Welcome to our pet store where we prioritize the well-being of your beloved pets.",
            },
          ],
        },
        {
          tagName: "button",
          components: [
            {
              id: "gjs-text-4",
              type: "textnode",
              content: "Shop Now",
            },
          ],
        },
        {
          tagName: "button",
          components: [
            {
              id: "gjs-text-5",
              type: "textnode",
              content: "Learn More",
            },
          ],
        },
        {
          id: "gjs-img-1",
          type: "image",
          attributes: {
            alt: "Pet Store - We Take Care of Your Pets",
            src: "https://source.unsplash.com/random/700x700/?pet-store",
          },
        },
      ],
    };
    const replaceContent = (obj: any, components: any) => {
      if (obj.type === "textnode") {
        components.find((c1: any) => {
          if (c1.components) {
            const result = c1.components.find((c2: any) => c2.id === obj.id);
            if (result) {
              obj.content = result.content;
              return result;
            }
          }
        });
      } else if (obj.type === "image") {
        components.find((c1: any) => {
          console.log("c1", c1);
          if (c1.id === obj.id) {
            obj.attributes.src = c1.attributes.src;
          }
        });
      } else {
        if (obj.components) {
          obj.components = obj.components.map((c: any) => {
            return replaceContent(c, components);
          });
        }
      }
      // }
      return obj;
    };

    const newComponents = pageComponents.hero.components.map(
      (component: any) => {
        return replaceContent(component, obj.components);
      }
    );

    setGrapesJSComponents(newComponents);

    console.log(newComponents);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  } else {
    return (
      <>
        {/* {!isLoading && completion === "" && (
          <PromptForm handleFormSubmit={handleFormSubmit} />
        )} */}

        <GrapesJSEditor components={grapesJSComponents} />
      </>
    );
  }
}
