var engage = undefined;
// Create and inject the <script> tag into the HTML
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = "https://d1mj578wat5n4o.cloudfront.net/sitecore-engage-v.1.3.0.min.js";
var x = document.querySelector("script");
x.parentNode.insertBefore(s, x);
// Initialize the Engage SDK
s.addEventListener("load", async () => {
  var settings = {
    clientKey: "sndbxus02zibums5gh269q8dqjk4hv6s",
    targetURL: "https://api-engage-us.sitecorecloud.io",
    pointOfSale: "vodkabyte",
    cookieDomain: ".vodkabyte.azurewebsites.net",
    cookieExpiryDays: 365,
    forceServerCookieMode: false,
    includeUTMParameters: true,
    webPersonalization: true,
  };
  engage = await window.Engage.init(settings);
  // Send a VIEW event
  // VIEW event object
  var event = {
    channel: "WEB",
    language: "EN",
    currency: "USD",
  };

  engage.pageView(event);
  const handleClick = async () => {
    const eventData = {
      channel: "WEB",
      currency: "USD",
      pointOfSale: "vodkabyte",
      language: "EN",
      page: "Page Title goes here",
    };
    const extensionData = {
      CTAText: "CTAClickedText",
    };
    await engage.event("vodkabyte:CLICKED_HERO_CTA", eventData, extensionData);
  };
  document.getElementById("heroCTA").addEventListener("click", handleClick);
});
