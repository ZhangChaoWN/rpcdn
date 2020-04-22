var jquery_url = "https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js";

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: jquery_url};
    },
    {
        urls: [
            "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
