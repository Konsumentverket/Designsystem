"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(baseUrl, url) {
  var matchInternal = new RegExp("^(\/)|(" + baseUrl + ")", "i");

  if (typeof url == 'undefined' || url == "#") {
    return false;
  } else {
    return !matchInternal.test(url);
  }
};

exports["default"] = _default;

//# sourceMappingURL=isExternalUrl.js.map