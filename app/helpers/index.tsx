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
  } else if (obj.type === "link") {
    const result = components.find((c1: any) => c1.field === obj.field);

    if (result) {
      obj.attributes.href = result.attributes.href;
      console.log(obj);
    }
  }
  if (obj.components) {
    obj.components = obj.components.map((c: any) => {
      return replaceContent(c, components);
    });
  }

  // }
  return obj;
};

const getSitecoreCDPString = (
  _pageName: string,
  _personalizationPrompt: string
) => {
  const s = `<script>
  let engage = undefined;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.3.0.min.js";
  let xa = document.querySelector("script");
  xa.parentNode.insertBefore(s, xa);
  s.addEventListener("load", async () => {
    let settings = {
      clientKey: "sndbxus02zibums5gh269q8dqjk4hv6s",
      targetURL: "https://api-engage-us.sitecorecloud.io",
      pointOfSale: "vodkabyte",
      cookieDomain: ".vodkabyte.azurewebsites.net",
      cookieExpiryDays: 365,
      forceServerCookieMode: false,
      includeUTMParameters: true,
      webPersonalization:true
    };
    engage = await window.Engage.init(settings);
    let event = {
      channel: "WEB",
      language: "EN",
      currency: "USD"
    };
    engage.pageView(event);
    const eventData = {
      channel: "WEB",
      currency: "USD",
      pointOfSale: "vodkabyte",
      language: "EN",
      page: "${_pageName}"
   };
    const extensionData = {
      CTAText: document.getElementById("heroCTA")?.innerText,
      PersonalizationPrompt: "${_personalizationPrompt}"
    };
    await engage.event("vodkabyte:CLICKED_HERO_CTA", eventData, extensionData);
    const handleClick = async () => {
      const eventData = { channel: "WEB", currency: "USD", pointOfSale: "vodkabyte", language: "EN", page: "${_pageName}"}; 
      const extensionData = {
        CTAText: document.getElementById("heroCTA")?.innerText,
        PersonalizationPrompt: "${_personalizationPrompt}"
      };
      await engage.event("vodkabyte:CLICKED_HERO_CTA", eventData, extensionData);
    }
    document.getElementById("heroCTA").addEventListener("click", handleClick);});
</script>`;
  return s;
};

export { replaceContent, getSitecoreCDPString };
