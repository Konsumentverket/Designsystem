"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    width: "28px",
    height: "32px",
    viewBox: "0 0 28 32"
  }, otherAttr), (0, _core.jsx)("title", null, title), (0, _core.jsx)("g", {
    stroke: "none",
    strokeWidth: "1"
  }, (0, _core.jsx)("g", {
    transform: "translate(-1008.000000, -2009.000000)"
  }, (0, _core.jsx)("path", {
    d: "M1027.96312,2029 L1022,2034.96187 L1016.03688,2029 C1011.56875,2029.19375 1008,2032.85 1008,2037.36188 C1008,2039.37112 1009.62881,2041 1011.63812,2041 L1032.36188,2041 C1034.37112,2041 1036,2039.37112 1036,2037.36188 C1036,2032.85 1032.43125,2029.19375 1027.96312,2029 L1027.96312,2029 Z M1017,2019 L1027,2019 L1027,2021 C1027,2023.76144 1024.76138,2026 1022,2026 C1019.23856,2026 1017,2023.76144 1017,2021 L1017,2019 Z M1019.5,2013.47937 C1019.5,2013.30681 1019.63994,2013.16687 1019.8125,2013.16687 L1021.16688,2013.16687 L1021.16688,2011.8125 C1021.16688,2011.63994 1021.30681,2011.5 1021.47938,2011.5 L1022.52062,2011.5 C1022.69325,2011.5 1022.83312,2011.63994 1022.83312,2011.8125 L1022.83312,2013.16687 L1024.1875,2013.16687 C1024.36012,2013.16687 1024.5,2013.30681 1024.5,2013.47937 L1024.5,2014.52063 C1024.5,2014.69319 1024.36012,2014.83313 1024.1875,2014.83313 L1022.83312,2014.83313 L1022.83312,2016.1875 C1022.83312,2016.36006 1022.69325,2016.5 1022.52062,2016.5 L1021.47938,2016.5 C1021.30681,2016.5 1021.16688,2016.36006 1021.16688,2016.1875 L1021.16688,2014.83313 L1019.8125,2014.83313 C1019.63994,2014.83313 1019.5,2014.69319 1019.5,2014.52063 L1019.5,2013.47937 Z M1011.61125,2027 L1016.75875,2027 C1018.16562,2028.23 1019.985,2029 1022,2029 C1024.015,2029 1025.83431,2028.23 1027.24125,2027 L1032.38875,2027 C1032.941,2026.99938 1033.38825,2026.55112 1033.38756,2025.99881 C1033.38756,2025.84337 1033.351,2025.69019 1033.28125,2025.55125 C1032.32931,2023.68563 1031.32625,2021.66188 1030.64681,2019.58 C1030.17375,2018.13063 1030,2016.59938 1030,2015.075 L1030,2012 L1022,2009 L1014,2012 L1014,2015.075 C1014,2016.59938 1013.82812,2018.13063 1013.35438,2019.58 C1012.67375,2021.66188 1011.67062,2023.6875 1010.71875,2025.55125 C1010.47094,2026.04481 1010.67012,2026.64581 1011.16363,2026.89369 C1011.30256,2026.96338 1011.45581,2026.99981 1011.61125,2027 L1011.61125,2027 Z",
    id: title != null ? "beautyEng-".concat(title) : null
  }))));
};

exports["default"] = _default;

//# sourceMappingURL=BeautyEngagement.js.map