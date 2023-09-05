"use client";

import React, { useEffect, useCallback, use } from "react";
import "grapesjs/dist/css/grapes.min.css";
import GrapesJSEditor from "./components/GrapesJSEditor";
import { pageComponents } from "./components/pageComponents";
import PromptForm from "./components/PromptForm";
import { response } from "./components/testResponse";
import { replaceContent } from "./helpers";
import gsap from "gsap";

type pdfDataTypes = {
  extractedBrands: string[];
  companyInfo: {
    productOrService: string;
    companyUrl: string;
    companyLogo: {
      url: string;
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
    multiColumnCallout: {
      heading: string;
      callouts: {
        title: string;
        shortDescription: string;
        callToActionLink: string;
        callToActionText: string;
        iconUrl: string;
      }[];
    };
  };
  personalizationPrompt: string;
};

export default function IndexPage() {
  const [data, setData] = React.useState<pdfDataTypes | null>(response as any); //response as any
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [grapesJSComponents, setGrapesJSComponents] = React.useState<any>([]);
  const [personalizationPrompt, setPersonalizationPrompt] =
    React.useState<string>("");
  const [brand, setBrand] = React.useState<string>("");
  const [productOrService, setProductOrService] = React.useState<string>("");
  const textRef = React.useRef<HTMLDivElement>(null);

  const handleFormSubmit = async (
    formData: FormData,
    landingPageIntention: string,
    companyInfo: string
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://vodkabyte.azurewebsites.net/ParsePdf?landingPageIntention=${landingPageIntention}&companyInfo=${companyInfo}`,
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
    if (!isLoading) return;

    let blurbs = [
        "Building your dream landing page ...",
        "This will land soon ...",
        "Hang on, we are still building ...",
        "Almost there ...",
        "Did you brush your teeth this morning? ...",
        "Deploying to production this Friday? ...",
      ],
      tl = gsap.timeline({ repeat: -1 }),
      text = textRef.current as HTMLDivElement,
      delay = 4;

    blurbs.forEach((blurb, i) => {
      const pos = i * delay;
      tl.to(text, { opacity: 0, duration: 0.5 }, pos);
      tl.add(() => {
        text.innerText = blurb;
      }, pos + 0.5);
      tl.to(text, { opacity: 1, duration: 0.5 }, pos + 0.55);
    });
  }, [isLoading]);

  useEffect(() => {
    if (!data) return;
    if (data) {
      setIsLoading(false);
    }
    console.log(data);
    const personalizationPrompt = data.personalizationPrompt;
    const productOrService = data.companyInfo.productOrService;
    const hero = data.landingPage.hero;
    const featuredSection = data.landingPage.multiColumnCallout;
    const companyInfo = data.companyInfo;
    const newHeader = {
      components: [
        {
          field: "companyLink",
          type: "link",
          attributes: {
            href: companyInfo.companyUrl,
          },
        },
        {
          field: "companyLogo",
          type: "image",
          attributes: {
            src: `https:${companyInfo?.companyLogo?.url}`,
            alt: companyInfo?.companyLogo?.title,
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
        {
          field: "buttonText",
          content: hero.buttonText,
          type: "textnode",
        },
        {
          field: "buttonUrl",
          attributes: { href: `${hero.buttonUrl}` },
          type: "link",
        },
      ],
    };
    const newFeaturedSection = {
      components: [
        {
          field: "featuresTitle",
          type: "textnode",
          content: featuredSection.heading,
        },
      ],
    };

    featuredSection.callouts.forEach((callout: any, index: number) => {
      newFeaturedSection.components.push({
        field: `featuresImage${index + 1}`,
        type: "image",
        attributes: { src: `${callout.iconUrl}-variation` },
      } as any);
      newFeaturedSection.components.push({
        field: `featuresTitle${index + 1}`,
        type: "textnode",
        content: callout.title,
      });
      newFeaturedSection.components.push({
        field: `featuresLinkText${index + 1}`,
        type: "textnode",
        content: callout.callToActionText,
      });
      newFeaturedSection.components.push({
        field: `featuresDescription${index + 1}`,
        type: "textnode",
        content: callout.shortDescription,
      });
    });

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
    const newFeaturedSectionComponents = pageComponents[2].components.map(
      (component: any) => {
        return replaceContent(component, newFeaturedSection.components);
      }
    );
    const newHeroComponents = pageComponents[1].components.map(
      (component: any) => {
        return replaceContent(component, newHero.components);
      }
    );
    const newFooterComponents = pageComponents[3].components.map(
      (component: any) => {
        return replaceContent(component, newFooter.components);
      }
    );

    if (data.extractedBrands.length > 0) setBrand(data.extractedBrands[0]);
    setGrapesJSComponents(pageComponents);
    setPersonalizationPrompt(personalizationPrompt);
    setProductOrService(productOrService);
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-6">
        <div className="text-white text-2xl" ref={textRef}>
          Loading
        </div>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  } else {
    return (
      <>
        {!isLoading && !data && (
          <PromptForm handleFormSubmit={handleFormSubmit} />
        )}

        <GrapesJSEditor
          components={grapesJSComponents}
          personalizationPrompt={personalizationPrompt}
          productOrService={productOrService}
          brand={brand}
        />
      </>
    );
  }
}
