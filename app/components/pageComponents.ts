//hero / short-text-1 / paragraph-text-2 / short-text-3 / short-text-4 / image-1
export const pageComponents = [
  {
    tagName: "header",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: ["container", "p-5", "flex", "justify-center", "mx-auto"],
        components: [
          {
            field: "companyLink",
            type: "link",
            editable: false,
            attributes: {
              href: "https://twitter.com/knyttneve",
              rel: "noopener noreferrer",
              target: "_blank",
            },
            classes: [
              "flex",
              "order-first",
              "lg:order-none",
              "lg:w-16",
              "title-font",
              "font-medium",
              "items-center",
              "text-gray-900",
              "lg:items-center",
              "lg:justify-center",
              "mb-4",
              "md:mb-0",
            ],
            components: [
              {
                field: "companyLogo",
                type: "image",
                resizable: { ratioDefault: 1 },
                classes: ["w-10", "object-center"],
                attributes: {
                  src: "https://source.unsplash.com/random/40%C3%940/?toyota-brand,logo",
                  alt: "blog",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    tagName: "section",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: [
          "container",
          "mx-auto",
          "flex",
          "px-5",
          "py-10",
          "md:flex-row",
          "flex-col",
          "items-center",
        ],
        components: [
          {
            classes: [
              "lg:max-w-lg",
              "lg:w-full",
              "md:w-1/2",
              "w-5/6",
              "mb-10",
              "md:mb-0",
            ],
            components: [
              {
                field: "image",
                type: "image",
                resizable: { ratioDefault: 1 },
                classes: ["object-center", "rounded"],
                attributes: {
                  alt: "hero",
                  src: "https://dummyimage.com/720x600",
                },
              },
            ],
          },
          {
            classes: [
              "lg:flex-grow",
              "md:w-1/2",
              "lg:pl-24",
              "md:pl-16",
              "flex",
              "flex-col",
              "md:items-start",
              "md:text-left",
              "items-center",
              "text-center",
            ],
            components: [
              {
                tagName: "h1",
                type: "text",
                classes: [
                  "title-font",
                  "sm:text-4xl",
                  "text-3xl",
                  "mb-4",
                  "font-medium",
                  "text-gray-900",
                ],
                components: [
                  {
                    field: "title",
                    type: "textnode",
                    content: "Before they sold out",
                  },
                ],
              },
              {
                tagName: "p",
                type: "text",
                classes: ["mb-8", "leading-relaxed"],
                components: [
                  {
                    field: "shortDescription",
                    type: "textnode",
                    content:
                      "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
                  },
                ],
              },
              {
                classes: ["flex", "justify-center"],
                components: [
                  {
                    tagName: "button",
                    type: "text",
                    classes: [
                      "inline-flex",
                      "text-white",
                      "bg-gray-500",
                      "border-0",
                      "py-2",
                      "px-6",
                      "focus:outline-none",
                      "hover:bg-indigo-600",
                      "rounded",
                      "text-lg",
                    ],
                    components: [
                      {
                        field: "buttonText",
                        type: "textnode",
                        content: "Button",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    tagName: "footer",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: [
          "container",
          "px-5",
          "py-8",
          "mx-auto",
          "flex",
          "items-center",
          "sm:flex-row",
          "flex-col",
        ],
        components: [
          {
            field: "companyLink",
            type: "link",
            editable: false,
            classes: [
              "flex",
              "title-font",
              "font-medium",
              "items-center",
              "md:justify-start",
              "justify-center",
              "text-gray-900",
            ],
            components: [
              {
                tagName: "span",
                type: "text",
                classes: ["ml-3", "text-xl"],
                components: [
                  {
                    field: "shortCompanyName",
                    type: "textnode",
                    content: "Tailblocks",
                  },
                ],
              },
            ],
          },
          {
            tagName: "p",
            type: "text",
            classes: [
              "text-sm",
              "text-gray-500",
              "sm:ml-4",
              "sm:pl-4",
              "sm:border-l-2",
              "sm:border-gray-200",
              "sm:py-2",
              "sm:mt-0",
              "mt-4",
            ],
            components: [
              {
                field: "copyright",
                type: "textnode",
                content: "© 2020 Tailblocks —",
              },
            ],
          },
          {
            tagName: "span",
            classes: [
              "inline-flex",
              "sm:ml-auto",
              "sm:mt-0",
              "mt-4",
              "justify-center",
              "sm:justify-start",
            ],
            components: [
              {
                type: "link",
                editable: false,
                classes: ["text-gray-500"],
                components: [
                  {
                    type: "svg",
                    resizable: { ratioDefault: true },
                    classes: ["w-5", "h-5"],
                    attributes: {
                      fill: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      viewBox: "0 0 24 24",
                    },
                    components: [
                      {
                        tagName: "path",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "link",
                editable: false,
                classes: ["ml-3", "text-gray-500"],
                components: [
                  {
                    type: "svg",
                    resizable: { ratioDefault: true },
                    classes: ["w-5", "h-5"],
                    attributes: {
                      fill: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      viewBox: "0 0 24 24",
                    },
                    components: [
                      {
                        tagName: "path",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "link",
                editable: false,
                classes: ["ml-3", "text-gray-500"],
                components: [
                  {
                    type: "svg",
                    resizable: { ratioDefault: true },
                    classes: ["w-5", "h-5"],
                    attributes: {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      viewBox: "0 0 24 24",
                    },
                    components: [
                      {
                        tagName: "rect",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          width: "20",
                          height: "20",
                          x: "2",
                          y: "2",
                          rx: "5",
                          ry: "5",
                        },
                      },
                      {
                        tagName: "path",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "link",
                editable: false,
                classes: ["ml-3", "text-gray-500"],
                components: [
                  {
                    type: "svg",
                    resizable: { ratioDefault: true },
                    classes: ["w-5", "h-5"],
                    attributes: {
                      fill: "currentColor",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "0",
                      viewBox: "0 0 24 24",
                    },
                    components: [
                      {
                        tagName: "path",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          stroke: "none",
                          d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                        },
                      },
                      {
                        tagName: "circle",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: {
                          cx: "4",
                          cy: "4",
                          r: "2",
                          stroke: "none",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
