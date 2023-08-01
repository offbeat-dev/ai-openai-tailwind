export const pageComponents = [
  {
    tagName: "header",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: [
          "container",
          "mx-auto",
          "flex",
          "flex-wrap",
          "p-5",
          "flex-col",
          "md:flex-row",
          "items-center",
        ],
        components: [
          {
            tagName: "nav",
            classes: [
              "flex",
              "lg:w-2/5",
              "flex-wrap",
              "items-center",
              "text-base",
              "md:ml-auto",
            ],
            components: [
              {
                type: "link",
                classes: ["mr-5", "hover:text-gray-900"],
                components: [
                  {
                    id: "short-text-1",
                    type: "textnode",
                    content: "First Link",
                  },
                ],
              },
              {
                type: "link",
                classes: ["mr-5", "hover:text-gray-900"],
                components: [
                  {
                    id: "short-text-2",
                    type: "textnode",
                    content: "Second Link",
                  },
                ],
              },
              {
                type: "link",
                classes: ["mr-5", "hover:text-gray-900"],
                components: [
                  {
                    id: "short-text-3",
                    type: "textnode",
                    content: "Third Link",
                  },
                ],
              },
              {
                type: "link",
                classes: ["hover:text-gray-900"],
                components: [
                  {
                    id: "short-text-4",
                    type: "textnode",
                    content: "Fourth Link",
                  },
                ],
              },
            ],
          },
          {
            type: "link",
            editable: false,
            classes: [
              "flex",
              "order-first",
              "lg:order-none",
              "lg:w-1/5",
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
                type: "svg",
                resizable: { ratioDefault: true },
                classes: [
                  "w-10",
                  "h-10",
                  "text-white",
                  "p-2",
                  "bg-indigo-500",
                  "rounded-full",
                ],
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
                    tagName: "path",
                    type: "svg-in",
                    resizable: { ratioDefault: true },
                    attributes: {
                      d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                    },
                  },
                ],
              },
              {
                tagName: "span",
                type: "text",
                classes: ["ml-3", "text-xl"],
                components: [
                  {
                    id: "logo-5",
                    type: "textnode",
                    content: "Tailblocks",
                  },
                ],
              },
            ],
          },
          {
            classes: [
              "lg:w-2/5",
              "inline-flex",
              "lg:justify-end",
              "ml-5",
              "lg:ml-0",
            ],
            components: [
              {
                tagName: "button",
                classes: [
                  "inline-flex",
                  "items-center",
                  "bg-gray-100",
                  "border-0",
                  "py-1",
                  "px-3",
                  "focus:outline-none",
                  "hover:bg-gray-200",
                  "rounded",
                  "text-base",
                  "mt-4",
                  "md:mt-0",
                ],
                components: [
                  { id: "short-text-6", type: "textnode", content: "Button" },
                  {
                    type: "svg",
                    resizable: { ratioDefault: true },
                    classes: ["w-4", "h-4", "ml-1"],
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
                        tagName: "path",
                        type: "svg-in",
                        resizable: { ratioDefault: true },
                        attributes: { d: "M5 12h14M12 5l7 7-7 7" },
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
    tagName: "section",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: [
          "container",
          "mx-auto",
          "flex",
          "px-5",
          "py-24",
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
                id: "image-1",
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
                    id: "short-text-1",
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
                    id: "paragraph-text-2",
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
                      "bg-indigo-500",
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
                        id: "short-text-3",
                        type: "textnode",
                        content: "Button",
                      },
                    ],
                  },
                  {
                    tagName: "button",
                    type: "text",
                    classes: [
                      "ml-4",
                      "inline-flex",
                      "text-gray-700",
                      "bg-gray-100",
                      "border-0",
                      "py-2",
                      "px-6",
                      "focus:outline-none",
                      "hover:bg-gray-200",
                      "rounded",
                      "text-lg",
                    ],
                    components: [
                      {
                        id: "short-text-4",
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
];
