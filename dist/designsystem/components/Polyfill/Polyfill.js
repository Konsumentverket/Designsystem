"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polyfill = void 0;

var Polyfill = function Polyfill(nounce) {
  return "\n        var pf = [];\n        if(!Object.assign)pf.push(\"Object.assign\");\n        if(!window.Promise)pf.push(\"Promise\");\n        if(!window.fetch)pf.push(\"fetch\");\n        if(!window.IntersectionObserver)pf.push(\"IntersectionObserver\");\n        if(!window.IntersectionObserverEntry)pf.push(\"IntersectionObserverEntry\");\n        if(!window.URL || typeof window.URL !== \"function\")pf.push(\"URL\");\n        if(!Array.prototype.find)pf.push(\"Array.prototype.find\");\n        if(!Array.prototype.includes)pf.push(\"Array.prototype.includes\");\n        if(!Array.prototype.findIndex)pf.push(\"Array.prototype.findIndex\")\n        if(!Array.prototype.entries)pf.push(\"Array.prototype.entries\")\n        if(!window.HTMLPictureElement)pf.push(\"HTMLPictureElement\")\n        if(!String.prototype.endsWith)pf.push(\"String.prototype.endsWith\");\n        if(!String.prototype.startsWith)pf.push(\"String.prototype.startsWith\");\n        if(!Object.values)pf.push(\"Object.values\");\n        if(!Object.entries)pf.push(\"Object.entries\");\n        if(!Element.prototype.matches)pf.push(\"Element.prototype.matches\")\n        if(!Element.prototype.remove)pf.push(\"Element.prototype.remove\")\n        if(pf.length > 0) {\n            console.log(\"polyfill(s) found\",pf)\n            var js = document.createElement('script');\n            js.src = \"https://polyfill.io/v3/polyfill.min.js?features=\"+pf.join(\",\");\n            js.nounce = \"".concat(nounce, "\";\n            document.head.appendChild(js);\n        }\n    ");
};

exports.Polyfill = Polyfill;

//# sourceMappingURL=Polyfill.js.map