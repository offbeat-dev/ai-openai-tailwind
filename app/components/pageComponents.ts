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
                    field: "buttonUrl",
                    type: "link",
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
                    attributes: {
                      href: "https://google.com",
                      target: "_blank",
                      id: "heroCTA",
                    },
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
    tagName: "section",
    classes: ["text-gray-600", "body-font"],
    components: [
      {
        classes: ["container", "px-5", "py-24", "mx-auto"],
        components: [
          {
            classes: ["text-center", "mb-20"],
            components: [
              {
                tagName: "h1",
                type: "text",
                classes: [
                  "sm:text-3xl",
                  "text-2xl",
                  "font-medium",
                  "title-font",
                  "text-gray-900",
                  "mb-4",
                ],
                components: [
                  {
                    field: "featuresTitle",
                    type: "textnode",
                    content: "Raw Denim Heirloom Man Braid",
                  },
                ],
              },
              {
                classes: ["flex", "mt-6", "justify-center"],
                components: [
                  {
                    classes: [
                      "w-16",
                      "h-1",
                      "rounded-full",
                      "bg-indigo-500",
                      "inline-flex",
                    ],
                  },
                ],
              },
            ],
          },
          {
            classes: [
              "flex",
              "flex-wrap",
              "sm:-m-4",
              "-mx-4",
              "-mb-10",
              "-mt-4",
              "md:space-y-0",
              "space-y-6",
            ],
            components: [
              {
                classes: [
                  "p-4",
                  "md:w-1/3",
                  "flex",
                  "flex-col",
                  "text-center",
                  "items-center",
                ],
                components: [
                  {
                    classes: [
                      "w-20",
                      "h-20",
                      "inline-flex",
                      "items-center",
                      "justify-center",
                      "rounded-full",
                      "text-indigo-500",
                      "mb-5",
                      "flex-shrink-0",
                    ],
                    components: [
                      {
                        field: "featuresImage1",
                        type: "image",
                        classes: [
                          "w-20",
                          "h-20",
                          "rounded-full",
                          "object-cover",
                        ],
                        attributes: {
                          src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
                        },
                      },
                    ],
                  },
                  {
                    classes: ["flex-grow"],
                    components: [
                      {
                        tagName: "h2",
                        type: "text",
                        classes: [
                          "text-gray-900",
                          "text-lg",
                          "title-font",
                          "font-medium",
                          "mb-3",
                        ],
                        components: [
                          {
                            field: "featuresTitle1",
                            type: "textnode",
                            content: "Shooting Stars",
                          },
                        ],
                      },
                      {
                        tagName: "p",
                        type: "text",
                        classes: ["leading-relaxed", "text-base"],
                        components: [
                          {
                            field: "featuresDescription1",
                            type: "textnode",
                            content:
                              "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                          },
                        ],
                      },
                      {
                        type: "link",
                        field: "featuresLinkUrl1",
                        classes: [
                          "mt-3",
                          "text-indigo-500",
                          "inline-flex",
                          "items-center",
                        ],
                        attributes: {
                          href: "https://google.com",
                          target: "_blank",
                        },
                        components: [
                          {
                            field: "featuresLinkText1",
                            type: "textnode",
                            content: "Learn More",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                classes: [
                  "p-4",
                  "md:w-1/3",
                  "flex",
                  "flex-col",
                  "text-center",
                  "items-center",
                ],
                components: [
                  {
                    classes: [
                      "w-20",
                      "h-20",
                      "inline-flex",
                      "items-center",
                      "justify-center",
                      "rounded-full",
                      "text-indigo-500",
                      "mb-5",
                      "flex-shrink-0",
                    ],
                    components: [
                      {
                        field: "featuresImage2",
                        type: "image",
                        resizable: { ratioDefault: 1 },
                        classes: [
                          "w-20",
                          "h-20",
                          "rounded-full",
                          "object-cover",
                        ],
                        attributes: {
                          src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
                        },
                      },
                    ],
                  },
                  {
                    classes: ["flex-grow"],
                    components: [
                      {
                        tagName: "h2",
                        type: "text",
                        classes: [
                          "text-gray-900",
                          "text-lg",
                          "title-font",
                          "font-medium",
                          "mb-3",
                        ],
                        components: [
                          {
                            field: "featuresTitle2",
                            type: "textnode",
                            content: "Shooting Stars",
                          },
                        ],
                      },
                      {
                        tagName: "p",
                        type: "text",
                        classes: ["leading-relaxed", "text-base"],
                        components: [
                          {
                            field: "featuresDescription2",
                            type: "textnode",
                            content:
                              "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                          },
                        ],
                      },
                      {
                        type: "link",
                        field: "featuresLinkUrl1",
                        classes: [
                          "mt-3",
                          "text-indigo-500",
                          "inline-flex",
                          "items-center",
                        ],
                        attributes: {
                          href: "https://google.com",
                          target: "_blank",
                        },
                        components: [
                          {
                            field: "featuresLinkText2",
                            type: "textnode",
                            content: "Learn More",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                classes: [
                  "p-4",
                  "md:w-1/3",
                  "flex",
                  "flex-col",
                  "text-center",
                  "items-center",
                ],
                components: [
                  {
                    classes: [
                      "w-20",
                      "h-20",
                      "inline-flex",
                      "items-center",
                      "justify-center",
                      "rounded-full",
                      "text-indigo-500",
                      "mb-5",
                      "flex-shrink-0",
                    ],
                    components: [
                      {
                        field: "featuresImage3",
                        type: "image",
                        resizable: { ratioDefault: 1 },
                        classes: [
                          "w-20",
                          "h-20",
                          "rounded-full",
                          "object-cover",
                        ],
                        attributes: {
                          src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
                        },
                      },
                    ],
                  },
                  {
                    classes: ["flex-grow"],
                    components: [
                      {
                        tagName: "h2",
                        type: "text",
                        classes: [
                          "text-gray-900",
                          "text-lg",
                          "title-font",
                          "font-medium",
                          "mb-3",
                        ],
                        components: [
                          {
                            field: "featuresTitle3",
                            type: "textnode",
                            content: "Shooting Stars",
                          },
                        ],
                      },
                      {
                        tagName: "p",
                        type: "text",
                        classes: ["leading-relaxed", "text-base"],
                        components: [
                          {
                            field: "featuresDescription3",
                            type: "textnode",
                            content:
                              "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
                          },
                        ],
                      },
                      {
                        type: "link",
                        field: "featuresLinkUrl1",
                        classes: [
                          "mt-3",
                          "text-indigo-500",
                          "inline-flex",
                          "items-center",
                        ],
                        attributes: {
                          href: "https://google.com",
                          target: "_blank",
                        },
                        components: [
                          {
                            field: "featuresLinkText3",
                            type: "textnode",
                            content: "Learn More",
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

// [
//   {
//     tagName: "section",
//     classes: ["text-gray-600", "body-font"],
//     components: [
//       {
//         classes: ["container", "px-5", "py-24", "mx-auto"],
//         components: [
//           {
//             classes: ["text-center", "mb-20"],
//             components: [
//               {
//                 tagName: "h1",
//                 type: "text",
//                 classes: [
//                   "sm:text-3xl",
//                   "text-2xl",
//                   "font-medium",
//                   "title-font",
//                   "text-gray-900",
//                   "mb-4",
//                 ],
//                 components: [
//                   {
//                     type: "textnode",
//                     content: "Raw Denim Heirloom Man Braid",
//                   },
//                 ],
//               },
//               {
//                 classes: ["flex", "mt-6", "justify-center"],
//                 components: [
//                   {
//                     classes: [
//                       "w-16",
//                       "h-1",
//                       "rounded-full",
//                       "bg-indigo-500",
//                       "inline-flex",
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             classes: [
//               "flex",
//               "flex-wrap",
//               "sm:-m-4",
//               "-mx-4",
//               "-mb-10",
//               "-mt-4",
//               "md:space-y-0",
//               "space-y-6",
//             ],
//             components: [
//               {
//                 classes: [
//                   "p-4",
//                   "md:w-1/3",
//                   "flex",
//                   "flex-col",
//                   "text-center",
//                   "items-center",
//                 ],
//                 components: [
//                   {
//                     classes: [
//                       "w-20",
//                       "h-20",
//                       "inline-flex",
//                       "items-center",
//                       "justify-center",
//                       "rounded-full",
// //                       "text-indigo-500",
//                       "mb-5",
//                       "flex-shrink-0",
//                     ],
//                     components: [
//                       {
//                         type: "image",
//                         resizable: { ratioDefault: 1 },
//                         classes: ["w-10", "object-center"],
//                         attributes: {
//                           src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
//                         },
//                         field: "companyLogo",
//                       },
//                     ],
//                   },
//                   {
//                     classes: ["flex-grow"],
//                     components: [
//                       {
//                         tagName: "h2",
//                         type: "text",
//                         classes: [
//                           "text-gray-900",
//                           "text-lg",
//                           "title-font",
//                           "font-medium",
//                           "mb-3",
//                         ],
//                         components: [
//                           {
//                             type: "textnode",
//                             content: "Shooting Stars",
//                           },
//                         ],
//                       },
//                       {
//                         tagName: "p",
//                         type: "text",
//                         classes: ["leading-relaxed", "text-base"],
//                         components: [
//                           {
//                             type: "textnode",
//                             content:
//                               "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//                           },
//                         ],
//                       },
//                       {
//                         type: "link",
//                         classes: [
//                           "mt-3",
//                           "text-indigo-500",
//                           "inline-flex",
//                           "items-center",
//                         ],
//                         components: [
//                           {
//                             type: "textnode",
//                             content: "Learn More",
//                           },
//                           {
//                             type: "svg",
//                             resizable: { ratioDefault: true },
//                             classes: ["w-4", "h-4", "ml-2"],
//                             attributes: {
//                               fill: "none",
//                               stroke: "currentColor",
//                               "stroke-linecap": "round",
//                               "stroke-linejoin": "round",
//                               "stroke-width": "2",
//                               viewBox: "0 0 24 24",
//                             },
//                             components: [
//                               {
//                                 tagName: "path",
//                                 type: "svg-in",
//                                 resizable: { ratioDefault: true },
//                                 attributes: {
//                                   d: "M5 12h14M12 5l7 7-7 7",
//                                 },
//                               },
//                             ],
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//               {
//                 classes: [
//                   "p-4",
//                   "md:w-1/3",
//                   "flex",
//                   "flex-col",
//                   "text-center",
//                   "items-center",
//                 ],
//                 components: [
//                   {
//                     classes: [
//                       "w-20",
//                       "h-20",
//                       "inline-flex",
//                       "items-center",
//                       "justify-center",
//                       "rounded-full",
//                       "bg-indigo-100",
//                       "text-indigo-500",
//                       "mb-5",
//                       "flex-shrink-0",
//                     ],
//                     components: [
//                       {
//                         type: "image",
//                         resizable: { ratioDefault: 1 },
//                         classes: ["w-10", "object-center"],
//                         attributes: {
//                           src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
//                         },
//                         field: "companyLogo",
//                       },
//                     ],
//                   },
//                   {
//                     classes: ["flex-grow"],
//                     components: [
//                       {
//                         tagName: "h2",
//                         type: "text",
//                         classes: [
//                           "text-gray-900",
//                           "text-lg",
//                           "title-font",
//                           "font-medium",
//                           "mb-3",
//                         ],
//                         components: [
//                           {
//                             type: "textnode",
//                             content: "The Catalyzer",
//                           },
//                         ],
//                       },
//                       {
//                         tagName: "p",
//                         type: "text",
//                         classes: ["leading-relaxed", "text-base"],
//                         components: [
//                           {
//                             type: "textnode",
//                             content:
//                               "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//                           },
//                         ],
//                       },
//                       {
//                         type: "link",
//                         classes: [
//                           "mt-3",
//                           "text-indigo-500",
//                           "inline-flex",
//                           "items-center",
//                         ],
//                         components: [
//                           {
//                             type: "textnode",
//                             content: "Learn More",
//                           },
//                           {
//                             type: "svg",
//                             resizable: { ratioDefault: true },
//                             classes: ["w-4", "h-4", "ml-2"],
//                             attributes: {
//                               fill: "none",
//                               stroke: "currentColor",
//                               "stroke-linecap": "round",
//                               "stroke-linejoin": "round",
//                               "stroke-width": "2",
//                               viewBox: "0 0 24 24",
//                             },
//                             components: [
//                               {
//                                 tagName: "path",
//                                 type: "svg-in",
//                                 resizable: { ratioDefault: true },
//                                 attributes: {
//                                   d: "M5 12h14M12 5l7 7-7 7",
//                                 },
//                               },
//                             ],
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//               {
//                 classes: [
//                   "p-4",
//                   "md:w-1/3",
//                   "flex",
//                   "flex-col",
//                   "text-center",
//                   "items-center",
//                 ],
//                 components: [
//                   {
//                     classes: [
//                       "w-20",
//                       "h-20",
//                       "inline-flex",
//                       "items-center",
//                       "justify-center",
//                       "rounded-full",
//                       "bg-indigo-100",
//                       "text-indigo-500",
//                       "mb-5",
//                       "flex-shrink-0",
//                     ],
//                     components: [
//                       {
//                         type: "image",
//                         resizable: { ratioDefault: 1 },
//                         classes: ["w-10", "object-center"],
//                         attributes: {
//                           src: "https://images.ctfassets.net/da02ousowwa0/LLNbscdDrdqUQX277UF5p/3282752c81bc15111cdd50a1c0e6bdc4/ToyotaLogoRedVer.svg",
//                         },
//                         field: "companyLogo",
//                       },
//                     ],
//                   },
//                   {
//                     classes: ["flex-grow"],
//                     components: [
//                       {
//                         tagName: "h2",
//                         type: "text",
//                         classes: [
//                           "text-gray-900",
//                           "text-lg",
//                           "title-font",
//                           "font-medium",
//                           "mb-3",
//                         ],
//                         components: [{ type: "textnode", content: "Neptune" }],
//                       },
//                       {
//                         tagName: "p",
//                         type: "text",
//                         classes: ["leading-relaxed", "text-base"],
//                         components: [
//                           {
//                             type: "textnode",
//                             content:
//                               "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//                           },
//                         ],
//                       },
//                       {
//                         type: "link",
//                         classes: [
//                           "mt-3",
//                           "text-indigo-500",
//                           "inline-flex",
//                           "items-center",
//                         ],
//                         components: [
//                           {
//                             type: "textnode",
//                             content: "Learn More",
//                           },
//                           {
//                             type: "svg",
//                             resizable: { ratioDefault: true },
//                             classes: ["w-4", "h-4", "ml-2"],
//                             attributes: {
//                               fill: "none",
//                               stroke: "currentColor",
//                               "stroke-linecap": "round",
//                               "stroke-linejoin": "round",
//                               "stroke-width": "2",
//                               viewBox: "0 0 24 24",
//                             },
//                             components: [
//                               {
//                                 tagName: "path",
//                                 type: "svg-in",
//                                 resizable: { ratioDefault: true },
//                                 attributes: {
//                                   d: "M5 12h14M12 5l7 7-7 7",
//                                 },
//                               },
//                             ],
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
//     ],
//   },
// ];
