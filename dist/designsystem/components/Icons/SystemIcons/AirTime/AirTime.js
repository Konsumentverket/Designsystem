"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["className", "style", "title"]);

  return (0, _core.jsx)("svg", _extends({
    className: className,
    css: style,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("path", {
    d: "M17.3875,0 L6.3625,0 C5.05820313,0 4,1.0078125 4,2.25 L4,21.75 C4,22.9921875 5.05820313,24 6.3625,24 L17.3875,24 C18.6917969,24 19.75,22.9921875 19.75,21.75 L19.75,2.25 C19.75,1.0078125 18.6917969,0 17.3875,0 Z M11.5,22.5454545 C10.6703125,22.5454545 10,21.8954545 10,21.0909091 C10,20.2863636 10.6703125,19.6363636 11.5,19.6363636 C12.3296875,19.6363636 13,20.2863636 13,21.0909091 C13,21.8954545 12.3296875,22.5454545 11.5,22.5454545 Z M17.5,17.6363636 C17.5,17.9363636 17.2287946,18.1818182 16.8973214,18.1818182 L6.85267857,18.1818182 C6.52120536,18.1818182 6.25,17.9363636 6.25,17.6363636 L6.25,3.45454545 C6.25,3.15454545 6.52120536,2.90909091 6.85267857,2.90909091 L16.8973214,2.90909091 C17.2287946,2.90909091 17.5,3.15454545 17.5,3.45454545 L17.5,17.6363636 Z"
  }), (0, _core.jsx)("path", {
    d: "M15.0332031,9.22460938 C16.2050781,9.01367188 17,8.59960938 17,8.125 L17,7.29101562 C16.3066406,7.78125 15.1152344,8.04492188 13.8613281,8.10742188 C14.4375,8.38671875 14.8613281,8.76171875 15.0332031,9.22460938 L15.0332031,9.22460938 Z M10.75,8.125 C8.6796875,8.125 7,8.82421875 7,9.6875 C7,10.5507812 8.6796875,11.25 10.75,11.25 C12.8203125,11.25 14.5,10.5507812 14.5,9.6875 C14.5,8.82421875 12.8203125,8.125 10.75,8.125 L10.75,8.125 Z M15.125,11.0820312 C16.2441406,10.8652344 17,10.4628906 17,10 L17,9.16601562 C16.546875,9.48632812 15.8808594,9.70507812 15.125,9.83984375 L15.125,11.0820312 Z M7,10.8671875 L7,11.875 C7,12.5644531 8.6796875,13.125 10.75,13.125 C12.8203125,13.125 14.5,12.5644531 14.5,11.875 L14.5,10.8671875 C13.6933594,11.53125 12.2167969,11.875 10.75,11.875 C9.28320312,11.875 7.80664062,11.53125 7,10.8671875 L7,10.8671875 Z M13.25,7.5 C15.3203125,7.5 17,6.93945312 17,6.25 C17,5.56054688 15.3203125,5 13.25,5 C11.1796875,5 9.5,5.56054688 9.5,6.25 C9.5,6.93945312 11.1796875,7.5 13.25,7.5 L13.25,7.5 Z M7,12.9160156 L7,13.75 C7,14.4394531 8.6796875,15 10.75,15 C12.8203125,15 14.5,14.4394531 14.5,13.75 L14.5,12.9160156 C13.6933594,13.484375 12.21875,13.75 10.75,13.75 C9.28125,13.75 7.80664062,13.484375 7,12.9160156 L7,12.9160156 Z"
  }));
};

exports["default"] = _default;

//# sourceMappingURL=AirTime.js.map