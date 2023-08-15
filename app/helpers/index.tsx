const replaceContent = (obj: any, components: any) => {
  if (obj.type === "textnode") {
    const result = components.find((c1: any) => c1.field === obj.field);
    if (result) {
      obj.content = result.content;
    }
  } else if (obj.type === "image") {
    const result = components.find((c1: any) => c1.field === obj.field);

    if (result) {
      obj.attributes.src = result.attributes.src;
      obj.attributes.alt = result.attributes.alt;
    }
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

const getSitecoreCDPString = () => {
  const s =
    "<script>\n" +
    "var engage = undefined;\n" +
    "// Create and inject the <script> tag into the HTML\n" +
    'var s = document.createElement("script");\n' +
    's.type = "text/javascript";\n' +
    "s.async = true;\n" +
    's.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.3.0.min.js";\n' +
    'var x = document.querySelector("script");\n' +
    "x.parentNode.insertBefore(s, x);\n" +
    "// Initialize the Engage SDK\n" +
    's.addEventListener("load", async () => {\n' +
    "    var settings = {\n" +
    '        clientKey: "sndbxus02zibums5gh269q8dqjk4hv6s",\n' +
    '        targetURL: "https://api-engage-us.sitecorecloud.io",\n' +
    '        pointOfSale: "vodkabyte",\n' +
    '        cookieDomain: ".vodkabyte.azurewebsites.net",\n' +
    "        cookieExpiryDays: 365,\n" +
    "        forceServerCookieMode: false,\n" +
    "        includeUTMParameters: true,\n" +
    "        webPersonalization:true\n" +
    "    };\n" +
    "    engage = await window.Engage.init(settings);\n" +
    "    // Send a VIEW event\n" +
    "   // VIEW event object\n" +
    "    var event = {\n" +
    '    channel: "WEB",\n' +
    '    language: "EN",\n' +
    '    currency: "USD"\n' +
    "     };\n" +
    "     \n" +
    "  engage.pageView(event);\n" +
    "  const handleClick = async () => {\n" +
    "    const eventData = {\n" +
    '      channel: "WEB",\n' +
    '      currency: "USD",\n' +
    '      pointOfSale: "vodkabyte",\n' +
    '      language: "EN",\n' +
    '      page: "Page Title goes here",\n' +
    "    };\n" +
    "    const extensionData = {\n" +
    '      CTAText: "CTAClickedText"\n' +
    "    };\n" +
    '    await engage.event("vodkabyte:CLICKED_HERO_CTA", eventData, extensionData);\n' +
    "  }\n" +
    '  document.getElementById("heroCTA").addEventListener("click", handleClick);\n' +
    "});\n" +
    "</script>";

  return s;
};

export { replaceContent, getSitecoreCDPString };
