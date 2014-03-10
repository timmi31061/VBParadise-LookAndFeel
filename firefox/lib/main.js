// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
pageMod.PageMod({
  include: "*.vb-paradise.de",
  contentScriptFile: self.data.url("contentScript.js")
});
