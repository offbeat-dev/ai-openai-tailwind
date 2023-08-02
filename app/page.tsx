"use client";

import React, { useEffect, useCallback, use } from "react";
import "grapesjs/dist/css/grapes.min.css";
import GrapesJSEditor from "./components/GrapesJSEditor";
import { pageComponents } from "./components/pageComponents";
import PromptForm from "./components/PromptForm";
import { response } from "./components/testResponse";
import { replaceContent } from "./helpers";

type pdfDataTypes = {
  companyInfo: {
    companyLogo: {
      url: string;
    };
  };
  landingPage: {
    hero: {
      title: string;
      shortDescription: string;
      imageUrl: string;
      imageAltText: string;
      buttonText: string;
      buttonUrl: string;
    };
  };
};

export default function IndexPage() {
  const [data, setData] = React.useState<pdfDataTypes | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [grapesJSComponents, setGrapesJSComponents] = React.useState<any>([]);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://vodkabyte.azurewebsites.net/ParsePdf",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            ContentType: "multipart/form-data",
            AcceptEncoding: "gzip, deflate, br",
            Connection: "keep-alive",
          },
          body: formData,
        }
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // setCompletion(data.result);

    // setCompletion(response.landingPage.hero);
  };

  useEffect(() => {
    if (!data) return;
    if (data) {
      setIsLoading(false);
    }
    const hero = data.landingPage.hero;
    const newHero = {
      components: [
        { field: "title", content: hero.title, type: "textnode" },
        {
          field: "shortDescription",
          content: hero.shortDescription,
          type: "textnode",
        },
        {
          field: "image",
          attributes: { alt: hero.imageAltText, src: hero.imageUrl },
          type: "image",
        },
        { field: "buttonText", content: hero.buttonText, type: "textnode" },
        {
          field: "buttonUrl",
          attributes: { href: hero.buttonUrl },
          type: "link",
        },
      ],
    };

    const newComponents = pageComponents[0].components.map((component: any) => {
      return replaceContent(component, newHero.components);
    });

    setGrapesJSComponents(newComponents);
  }, [data]);

  // return (
  //   <>
  //     <div>
  //       <div>Please type your prompt</div>
  //       <input
  //         className="text-black"
  //         value={value}
  //         onChange={handleInput}
  //         onKeyDown={handleKeyDown}
  //       />
  //       <div>Prompt: {prompt}</div>
  //     </div>
  //   </>
  // );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  } else {
    return (
      <>
        {!isLoading && !data && (
          <PromptForm handleFormSubmit={handleFormSubmit} />
        )}

        <GrapesJSEditor components={grapesJSComponents} />
      </>
    );
  }
}
