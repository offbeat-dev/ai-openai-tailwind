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
    companyUrl: string;
    companyLogo: {
      file: {
        url: string;
      };
      title: string;
    };
    shortCompanyName: string;
    copyright: string;
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
  const [data, setData] = React.useState<pdfDataTypes | null>(response as any);
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
  };

  useEffect(() => {
    if (!data) return;
    if (data) {
      setIsLoading(false);
    }
    const hero = data.landingPage.hero;
    const companyInfo = data.companyInfo;
    const newHeader = {
      components: [
        // {
        //   field: "companyLink",
        //   type: "link",
        //   content: companyInfo.companyUrl,
        // },
        {
          field: "companyLogo",
          type: "image",
          attributes: {
            src: `https:${companyInfo.companyLogo.file.url}`,
            alt: companyInfo.companyLogo.title,
          },
        },
        ,
      ],
    };
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
    const newFooter = {
      components: [
        {
          field: "shortCompanyName",
          type: "textnode",
          content: companyInfo.shortCompanyName,
        },
        {
          field: "copyright",
          type: "textnode",
          content: companyInfo.copyright,
        },
      ],
    };

    const newHeaderComponents = pageComponents[0].components.map(
      (component: any) => {
        return replaceContent(component, newHeader.components);
      }
    );
    const newHeroComponents = pageComponents[1].components.map(
      (component: any) => {
        return replaceContent(component, newHero.components);
      }
    );

    const newFooterComponents = pageComponents[2].components.map(
      (component: any) => {
        return replaceContent(component, newFooter.components);
      }
    );

    pageComponents[0].components = newHeaderComponents;
    pageComponents[1].components = newHeroComponents;
    pageComponents[2].components = newFooterComponents;

    setGrapesJSComponents(pageComponents);
  }, [data]);

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
