'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var React = require('react');
var React__default = _interopDefault(React);
var dateFns = require('date-fns');
var sv = _interopDefault(require('date-fns/locale/sv'));
var css = _interopDefault(require('@emotion/css'));
var ReactDOM = _interopDefault(require('react-dom'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var spacing = {
  'xs': '.8rem',
  's': '1.6rem',
  'm': '2.4rem',
  'l': '3.2rem',
  'xl': '4.8rem',
  'xxl': '8.8rem'
};

var defaultTheme = {
  theme1: {
    "xDark": "#162259",
    "dark": "#00345c",
    "midDark": "#00518f",
    "mid": "#0061c2",
    "midLight": "#ddf1fd",
    "light": "#ebf6fd",
    "xLight": "#ebf6fd"
  },
  theme2: {
    "xDark": "#8C002D",
    "dark": "#8C002D",
    "midDark": "#A10042",
    "mid": "#B50156",
    "midLight": "#B50156",
    "light": "#F6E1EB",
    "xLight": "#F6E1EB"
  },
  theme3: {
    "xDark": "#161616",
    "dark": "#4D4D4D",
    "midDark": "#6B6B6B",
    "mid": "#6B6B6B",
    "midLight": "#D0D0D0",
    "light": "#E5E3E3",
    "xLight": "#F2F0F0"
  },
  states: {
    "visited": "#800080",
    "visitedInverted": "#FFC7C2",
    "focus": "#00944B"
  },
  common: {
    "white": "#ffffff",
    "black": "#000000",
    "warning": "#E7342B",
    "success": "#007A3E",
    "cyan": "#92DCFA"
  }
};
var eccTheme = {
  theme1: {
    "xDark": "#1C2742",
    "dark": "#314575",
    "midDark": "#314575",
    "mid": "#4663a9",
    "midLight": "#E4E8F2",
    "light": "#D7E6ED"
  },
  theme2: {
    "midLight": "#eaeae9",
    "light": "#e7f0f4"
  },
  theme3: {
    "xLight": "#F2F0F0",
    "light": "#D0D0D0",
    "mid": "#6B6B6B",
    "dark": "#4D4D4D",
    "xDark": "#161616"
  }
};
var colors = process.env.THEME === 'ecc' ? Object.assign({}, defaultTheme, eccTheme) : defaultTheme;

var checkPath = "M6.09703073,13.0077039 L0.262878687,7.22504644 C-0.0876262289,6.87763523 -0.0876262289,6.3143474 0.262878687,5.96690144 L1.53219243,4.70875643 C1.88269734,4.36131046 2.45103631,4.36131046 2.80154123,4.70875643 L6.73170513,8.60419634 L15.1496783,0.260558412 C15.5001832,-0.0868528038 16.0685222,-0.0868528038 16.4190271,0.260558412 L17.6883408,1.51870342 C18.0388457,1.86611463 18.0388457,2.42940246 17.6883408,2.77684843 L7.36637953,13.0077386 C7.01583955,13.3551498 6.44753564,13.3551498 6.09703073,13.0077039 L6.09703073,13.0077039 Z";

var filePdfPath = "M11.36875,16.00625 C11.05625,15.00625 11.0625,13.075 11.24375,13.075 C11.76875,13.075 11.71875,15.38125 11.36875,16.00625 Z M11.2625,18.95625 C10.78125,20.21875 10.18125,21.6625 9.4875,22.875 C10.63125,22.4375 11.925,21.8 13.41875,21.50625 C12.625,20.90625 11.8625,20.04375 11.2625,18.95625 Z M5.38125,26.75625 C5.38125,26.80625 6.20625,26.41875 7.5625,24.24375 C7.14375,24.6375 5.74375,25.775 5.38125,26.75625 Z M15.5,10 L24,10 L24,30.5 C24,31.33125 23.33125,32 22.5,32 L1.5,32 C0.66875,32 0,31.33125 0,30.5 L0,1.5 C0,0.66875 0.66875,0 1.5,0 L14,0 L14,8.5 C14,9.325 14.675,10 15.5,10 Z M15,20.7375 C13.75,19.975 12.91875,18.925 12.33125,17.375 C12.6125,16.21875 13.05625,14.4625 12.71875,13.3625 C12.425,11.525 10.06875,11.70625 9.73125,12.9375 C9.41875,14.08125 9.70625,15.69375 10.2375,17.75 C9.5125,19.475 8.44375,21.7875 7.6875,23.1125 C7.68125,23.1125 7.68125,23.11875 7.675,23.11875 C5.98125,23.9875 3.075,25.9 4.26875,27.36875 C4.61875,27.8 5.26875,27.99375 5.6125,27.99375 C6.73125,27.99375 7.84375,26.86875 9.43125,24.13125 C11.04375,23.6 12.8125,22.9375 14.36875,22.68125 C15.725,23.41875 17.3125,23.9 18.36875,23.9 C20.19375,23.9 20.31875,21.9 19.6,21.1875 C18.73125,20.3375 16.20625,20.58125 15,20.7375 L15,20.7375 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M18.93125,22.51875 C19.1875,22.35 18.775,21.775 16.25625,21.95625 C18.575,22.94375 18.93125,22.51875 18.93125,22.51875 Z";

var fileWordPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.56875,16 L19.0625,16 C19.54375,16 19.9,16.44375 19.79375,16.91875 L17.41875,27.41875 C17.34375,27.7625 17.0375,28 16.6875,28 L14.3125,28 C13.96875,28 13.66875,27.7625 13.5875,27.43125 C11.975,20.9625 12.2875,22.35625 11.9875,20.525 L11.95625,20.525 C11.8875,21.41875 11.80625,21.6125 10.35625,27.43125 C10.275,27.7625 9.975,28 9.63125,28 L7.3125,28 C6.9625,28 6.65625,27.75625 6.58125,27.4125 L4.21875,16.9125 C4.1125,16.44375 4.46875,16 4.95,16 L6.48125,16 C6.8375,16 7.15,16.25 7.21875,16.60625 C8.19375,21.48125 8.475,23.45 8.53125,24.24375 C8.63125,23.60625 8.9875,22.2 10.36875,16.575 C10.45,16.2375 10.75,16.00625 11.1,16.00625 L12.91875,16.00625 C13.26875,16.00625 13.56875,16.24375 13.65,16.58125 C15.15,22.85625 15.45,24.33125 15.5,24.66875 C15.4875,23.96875 15.3375,23.55625 16.85,16.59375 C16.9125,16.24375 17.21875,16 17.56875,16 L17.56875,16 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";

var filePowerpointPath = "M12.10625,16.95 C12.65625,16.95 13.075,17.11875 13.375,17.45625 C13.975,18.1375 13.9875,19.5 13.3625,20.2125 C13.05625,20.5625 12.61875,20.74375 12.04375,20.74375 L10.3625,20.74375 L10.3625,16.95 L12.10625,16.95 L12.10625,16.95 Z M23.5625,6.5625 L17.4375,0.4375 C17.15625,0.15625 16.775,0 16.375,0 L16,0 L16,8 L24,8 L24,7.61875 C24,7.225 23.84375,6.84375 23.5625,6.5625 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.3125,18.825 C17.3125,24.46875 11.7625,23.675 10.36875,23.675 L10.36875,27.25 C10.36875,27.6625 10.03125,28 9.61875,28 L7.69375,28 C7.28125,28 6.94375,27.6625 6.94375,27.25 L6.94375,14.7625 C6.94375,14.35 7.28125,14.0125 7.69375,14.0125 L12.75625,14.0125 C15.5375,14.0125 17.3125,16.0625 17.3125,18.825 Z";

var fileExcelPath = "M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 Z M17.75625,15.15625 L14,21 L17.75625,26.84375 C18.075,27.34375 17.71875,28 17.125,28 L14.94375,28 C14.66875,28 14.4125,27.85 14.28125,27.60625 C13.05625,25.34375 12,23.3125 12,23.3125 C11.6,24.2375 11.375,24.5625 9.7125,27.6125 C9.58125,27.85625 9.33125,28.00625 9.05625,28.00625 L6.875,28.00625 C6.28125,28.00625 5.925,27.35 6.24375,26.85 L10.0125,21.00625 L6.24375,15.1625 C5.91875,14.6625 6.28125,14.0062057 6.875,14.0062057 L9.05,14.0062057 C9.325,14.0062057 9.58125,14.15625 9.7125,14.4 C11.34375,17.45 10.9625,16.5 12,18.68125 C12,18.68125 12.38125,17.95 14.2875,14.4 C14.41875,14.15625 14.675,14.0062057 14.95,14.0062057 L17.125,14.0062057 C17.71875,14 18.075,14.65625 17.75625,15.15625 Z M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 Z";

var filePath = "M24,7.61875 L24,8 L16,8 L16,0 L16.38125,0 C16.78125,0 17.1625,0.15625 17.44375,0.4375 L23.5625,6.5625 C23.84375,6.84375 24,7.225 24,7.61875 L24,7.61875 Z M18,14.75 L18,15.25 C18,15.6625 17.6625,16 17.25,16 L6.75,16 C6.3375,16 6,15.6625 6,15.25 L6,14.75 C6,14.3375 6.3375,14 6.75,14 L17.25,14 C17.6625,14 18,14.3375 18,14.75 L18,14.75 Z M18,19.25 C18,19.6625 17.6625,20 17.25,20 L6.75,20 C6.3375,20 6,19.6625 6,19.25 L6,18.75 C6,18.3375 6.3375,18 6.75,18 L17.25,18 C17.6625,18 18,18.3375 18,18.75 L18,19.25 Z M18,23.25 C18,23.6625 17.6625,24 17.25,24 L6.75,24 C6.3375,24 6,23.6625 6,23.25 L6,22.75 C6,22.3375 6.3375,22 6.75,22 L17.25,22 C17.6625,22 18,22.3375 18,22.75 L18,23.25 Z M14,8.5 L14,0 L1.5,0 C0.66875,0 0,0.66875 0,1.5 L0,30.5 C0,31.33125 0.66875,32 1.5,32 L22.5,32 C23.33125,32 24,31.33125 24,30.5 L24,10 L15.5,10 C14.675,10 14,9.325 14,8.5 L14,8.5 Z";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n color:", " !important;\n   &:hover {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n   }\n   &:active {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n     color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color:", " !important;\n   &:hover {\n    background-color:", " !important;\n   }\n   &:active {\n    background-color:", " !important;\n    color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body, \n  button, div, span, applet,\n  object, iframe, h1, h2, h3, h4,h5, h6,\n  p, blockquote, pre,a,abbr, acronym,address,\n  big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,\n  small,strike,strong,sub,sup,tt,b,u,i,center,dl,\n  dt,dd,ol,ul,li,fieldset,form,label,legend,table,\n  caption,tbody,tfoot,thead,tr,th,td,article,aside,\n  canvas,details,embed,figure,figcaption,footer,\n  header,hgroup,menu,nav,output,ruby,section,summary,\n  time,mark,audio,video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    html{\n      font-size: ", ";\n      font-family: ", "; \n      line-height: 16px;\n      color: #4D4D4D;\n      overflow-x:hidden;   \n    }\n\n    body {\n\n      font-size: 1.6rem;\n      margin:0;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;   \n      -webkit-text-size-adjust: 100%; \n      -moz-text-size-adjust: 100%;\n      margin: 0;\n      \n      p {\n        padding-bottom: ", ";\n        font-size: 1.8rem;\n        line-height: 3.2rem;\n      }\n\n      ul {\n        list-style: bullet inside none;\n        padding-left: ", ";\n        li {\n          margin-bottom: ", ";\n        }\n        p {\n          display: inline;\n        }\n      }\n\n      h1, h2 {\n        margin-bottom: 1.6rem;\n      }\n      h3, h4, h5, h6 {\n        margin-bottom: .8rem;\n      }\n  a {\n    &.external {\n      svg.external {\n        margin-left: 3px;\n      }\n    }\n\n    &:not(.noStyle){\n        text-decoration:underline;\n        font-weight:700;\n        color:", ";\n        svg {\n          fill: ", ";\n        }\n\n        &[href$=\".pdf\"],\n        &[href$=\".doc\"],\n        &[href$=\".docx\"],\n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"],\n        &[href$=\".txt\"],\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"]{\n          margin-left: 3.2rem;\n          position: relative;\n          display: inline-flex;\n          align-items: center;\n          &:hover {\n            box-shadow: 0 0 0 2px ", ";\n          }\n          &:before{\n            content: '';\n            display:inline-block;\n            background-repeat: no-repeat;\n            background-size: 22px 30px;\n            background-position: 0px 0px;\n            width: 22px;\n            height: 30px;\n            position: absolute;\n            left: -3.2rem;\n            top: 50%;\n            transform: translateY(-50%);\n          }\n        }\n        \n        &[href$=\".pdf\"] { ", " }\n         \n        &[href$=\".ppt\"],\n        &[href$=\".pptx\"] { ", " }\n        \n        &[href$=\".doc\"],\n        &[href$=\".docx\"] { ", " }\n\n        &[href$=\".xlt\"],\n        &[href$=\".xltx\"] { ", " }\n\n        &[href$=\".txt\"] { ", " }\n\n        &:hover {\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .8rem;\n          background-color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n        &:visited{\n          color:", ";\n          svg {\n            fill: ", ";\n          }\n        }\n        \n        &:active{\n          box-shadow: 0 0 0 4px ", ";\n          border-radius: .8rem;\n          background-color:", ";\n          color:", ";\n          text-decoration:none;\n          svg {\n            fill: ", ";\n          }\n        }\n        \n      }\n      &.invertedStyle:not(.noStyle){\n        &:visited{\n          background-color:inherit;\n        }\n        &:hover {\n          background-color:#fff;\n          box-shadow: 0 0 0 4px #fff;\n        }\n        &:active {\n          box-shadow: 0 0 0 4px #fff;\n          background-color:#fff;\n      }\n    }\n  }\n\n      &:not(.tabnav){\n        *:focus {\n          outline: none;\n        }\n      }\n\n      &.tabnav {\n        *:focus {\n          outline: 4px solid ", ";\n        }\n      }\n\n    i {\n      font-style: italic;\n    }\n    strong {\n      font-weight: 700;\n    }\n    u {\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyles = function GlobalStyles(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? "62.5%" : _ref$fontSize,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" : _ref$fontFamily;
  React.useEffect(function () {
    document.addEventListener('keyup', function (e) {
      if (e.key === "Tab" && !document.body.classList.contains("tabnav")) {
        document.body.classList.add("tabnav");
      }
    });
    document.addEventListener('click', function (e) {
      // if detail is 0 it's most likely a keypress and not a mouse click
      if (e.detail !== 0 && document.body.classList.contains("tabnav")) {
        document.body.classList.remove("tabnav");
      }
    });
    return function () {};
  }, []);
  return React__default.createElement(core.Global, {
    styles: globalStyles(fontSize, fontFamily)
  });
};

var fileIcon = function fileIcon(fileSvgPath) {
  return "\n  &:before{\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 30' %3E%3Cpath fill='".concat(encodeURIComponent(colors.theme1.mid), "' d='").concat(fileSvgPath, "'/%3E%3C/svg%3E\");\n  }\n");
};

var globalStyles = function globalStyles() {
  var fontSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "62.5%";
  var fontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
  return core.css(_templateObject(), fontSize, fontFamily, spacing.s, spacing.xl, spacing.s, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, fileIcon(filePdfPath), fileIcon(filePowerpointPath), fileIcon(fileWordPath), fileIcon(fileExcelPath), fileIcon(filePath), colors.theme1.midLight, colors.theme1.midLight, colors.theme1.mid, colors.states.visited, colors.states.visited, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark, colors.states.focus);
};

var LinkColors = core.css(_templateObject2(), colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.states.visited);
var LinkColorsInverted = core.css(_templateObject3(), colors.theme1.mid, colors.theme1.xDark, colors.states.visited);
var LinkWrapperColorStyle = core.css(_templateObject4(), LinkColors);
var LinkWrapperInvertedColorStyle = core.css(_templateObject5(), LinkColorsInverted);
var ElementLinkColorStyle = core.css(_templateObject6(), LinkColors);
var ElementLinkInvertedColorStyle = core.css(_templateObject7(), LinkColorsInverted);
var VisuallyHidden = core.css(_templateObject8());

/** @jsx jsx */
//const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
//const dateFormat = "d MMMM yyyy";
//const timeFormat = "'kl.' HH:mm";

var Formats = {
  dateFormat: "d MMMM yyyy",
  timeFormat: "'kl.' HH:mm",
  dateAndTimeFormat: "d MMMM yyyy 'kl.' HH:mm",
  simpleDateAndTimeFormat: "yyyy MM dd HH:mm:ss"
};

var isDate = function isDate(date) {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};

var DateFormat = function DateFormat(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? null : _ref$date,
      _ref$dateFormat = _ref.dateFormat,
      dateFormat = _ref$dateFormat === void 0 ? null : _ref$dateFormat,
      _ref$showDate = _ref.showDate,
      showDate = _ref$showDate === void 0 ? false : _ref$showDate,
      _ref$showTime = _ref.showTime,
      showTime = _ref$showTime === void 0 ? false : _ref$showTime;

  if (isDate(date)) {
    var displayFormat;
    if (dateFormat) displayFormat = dateFormat;else displayFormat = showDate && showTime ? Formats.dateAndTimeFormat : showDate ? Formats.dateFormat : showTime ? Formats.timeFormat : Formats.simpleDateAndTimeFormat;
    return dateFns.format(dateFns.parseISO(date), displayFormat, {
      locale: sv
    });
  } else {
    console.log("parse date failed");
    return null;
  }
};

var arrowPath = 'M18.8200426,7.70004261 C18.4334198,7.31341975 17.8080945,7.31122597 17.4179582,7.70051231 L12.7020418,12.4061544 C12.3143148,12.7930366 11.6880945,12.7954407 11.2979582,12.4061544 L6.58204182,7.70051231 C6.19431483,7.31363005 5.56955624,7.31044376 5.17995739,7.70004261 L4.70004261,8.17995739 C4.31341975,8.56658025 4.3235178,9.2035178 4.70994663,9.58994663 L11.2900534,16.1700534 C11.6821461,16.5621461 12.3235178,16.5564822 12.7099466,16.1700534 L19.2900534,9.58994663 C19.6821461,9.19785393 19.6895562,8.56955624 19.2999574,8.17995739 L18.8200426,7.70004261 Z';

var warnPath = 'M6.78687222,5.24038333 L6.99292778,9.01816111 C7.00256667,9.19493889 7.14873333,9.33332778 7.32576111,9.33332778 L8.67426111,9.33332778 C8.85126111,9.33332778 8.99745556,9.19493889 9.00709444,9.01816111 L9.21315,5.24038333 C9.22356667,5.04943889 9.07153889,4.88888333 8.88031667,4.88888333 L7.11967778,4.88888333 C6.92845556,4.88888333 6.77645556,5.04943889 6.78687222,5.24038333 L6.78687222,5.24038333 Z M8.00001111,9.83332778 C7.29431667,9.83332778 6.72223333,10.4054111 6.72223333,11.1111056 C6.72223333,11.8168 7.29431667,12.3888833 8.00001111,12.3888833 C8.70570556,12.3888833 9.27778889,11.8168 9.27778889,11.1111056 C9.27778889,10.4054111 8.70570556,9.83332778 8.00001111,9.83332778 L8.00001111,9.83332778 Z M15.8199,12.2225778 C16.3326222,13.1113 15.6890667,14.2222167 14.6650111,14.2222167 L1.33484444,14.2222167 C0.308816667,14.2222167 -0.331794444,13.1096056 0.179927778,12.2225778 L6.84509444,0.666244444 C7.35806667,-0.222894444 8.64284444,-0.221283333 9.15492778,0.666244444 L15.8199,12.2225778 Z';

var iconDefinitions = {// Adapt,
  // Close,
  // Easytoread,
  // External,
  // Search,
  // Signlanguage,
  // Volume,
  // Otherlang,
  // Arrow,
  // Ecc,
  // Burger,
  // Exclamationmark,
  // Check,
  // Oval,
  // LinkArrow,
  // Filter,
  // List,
  // Picturelist,
  // Clear,
  // Camera,
  // Play,
  // FileExcel,
  // FilePdf,
  // FilePowerpoint,
  // FileWord,
  // File,
  // Warn
};

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["icon", "className", "style", "title"]);

  var Element = iconDefinitions[icon];

  if (Element === undefined) {
    console.log("Could not find icon in storybook tried to load: ".concat(icon));
    return null;
  }

  return core.jsx(Element, _extends({
    focusable: "false",
    title: title || icon || '',
    className: className,
    style: style,
    role: "img",
    "aria-label": title || icon || ''
  }, otherAttr));
};

var editorIconDefinitions = {// AppsAndGames,
  // Auction,
  // BeautyEngagement,
  // Bullhorn,
  // Leaf,
  // Hardhat,
  // BrokerServices,
  // Cars,
  // Clothes,
  // Complaint,
  // ComputerTvGameConsole,
  // ConcertAndEvent,
  // ConsumerRights,
  // ContractWorkHouses,
  // Craftsman,
  // DistanceContractLaw,
  // EducationAndCourses,
  // ElectricityHeatingContract,
  // FurnituresAndDecoration,
  // GymAndWorkoutService,
  // Hairdresser,
  // Insurance,
  // InternetFiberBroadband,
  // LoanSaveInvest,
  // LotteryAndGames,
  // MobilePhone,
  // MoveAndCleaningService,
  // NotDefinedPicture,
  // Pets,
  // PurchaseFromPrivate,
  // Receipt,
  // SalesLaw,
  // Telemarketing,
  // Travel,
  // WhiteGoods,
  // Withdrawal,
  // Pen,
  // Map,
  // ChatWithUs,
  // CallUs,
  // Mic
};

var EditorIcon = function EditorIcon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      otherAttr = _objectWithoutProperties(_ref, ["icon", "className", "style", "title"]);

  var Element = editorIconDefinitions[icon];

  if (Element === undefined) {
    console.log("Could not find icon in storybook tried to load: ".concat(icon));
    return null;
  }

  return core.jsx(Element, _extends({
    title: title,
    className: className,
    style: style,
    role: "img",
    "aria-label": title || icon || ""
  }, otherAttr));
};

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    a {\n      ", "\n    }  \n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n color:", " !important;\n   &:hover {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n   }\n   &:active {\n     background-color:#fff !important;\n     box-shadow: 0 0 0 4px #FFF !important;\n     color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  color:", " !important;\n   &:hover {\n    background-color:", " !important;\n   }\n   &:active {\n    background-color:", " !important;\n    color:", " !important;\n   }\n   &:visited{\n    color:", " !important;   \n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

var LinkColors$1 = core.css(_templateObject2$1(), colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.states.visited);
var LinkColorsInverted$1 = core.css(_templateObject3$1(), colors.theme1.mid, colors.theme1.xDark, colors.states.visited);
var LinkWrapperColorStyle$1 = core.css(_templateObject4$1(), LinkColors$1);
var LinkWrapperInvertedColorStyle$1 = core.css(_templateObject5$1(), LinkColorsInverted$1);
var ElementLinkColorStyle$1 = core.css(_templateObject6$1(), LinkColors$1);
var ElementLinkInvertedColorStyle$1 = core.css(_templateObject7$1(), LinkColorsInverted$1);
var VisuallyHidden$1 = core.css(_templateObject8$1());
var viewportSmall = 420;
var viewportMedium = 768;
var viewportLarge = 1120;

var mediaQueryMaxWidth = function mediaQueryMaxWidth(width) {
  return "@media (max-width: ".concat(width, "px)");
};

var mediaQueryMinWidth = function mediaQueryMinWidth(width) {
  return "@media (min-width: ".concat(width, "px)");
};

var small = mediaQueryMaxWidth(viewportSmall);
var medium = mediaQueryMinWidth(viewportMedium);
var large = mediaQueryMinWidth(viewportLarge);

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["\n      font-size:1.6rem;\n      line-height:2.4rem;\n"]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n      font-size:1.6rem;\n      line-height:2.4rem;\n      ", "{\n            font-size:1.8rem;      \n      }\n\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n      font-size:1.8rem;\n      line-height:3.2rem;\n      ", "{\n            font-size:2rem;      \n      }\n\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n\n      font-size:1.8rem;\n      line-height:3.2rem;\n      ", "{\n            font-size:2.4rem;\n            \n      }\n\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n\n      font-size:2.0rem;\n      line-height:3.2rem;\n\n\n      ", "{\n            font-size:2.8rem;\n            line-height:3.2rem;\n      }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n\n      font-size:2.4rem;\n      line-height:3.2rem;\n\n      ", "{\n            font-size:3.4rem;\n            line-height:4.8rem;\n      }\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n\n      font-size:2.8rem;\n      line-height:3.2rem;\n\n      ", "{\n            font-size:4.8rem;\n            line-height:5.6rem;\n      }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n      color: #161616;\n      font-weight:700;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var commonSubHeadingStyle = core.css(_templateObject$1());
var h1Style = core.css(_templateObject2$2(), medium);
var h2Style = core.css(_templateObject3$2(), medium);
var h3Style = core.css(_templateObject4$2(), medium);
var h4Style = core.css(_templateObject5$2(), medium);
var h5Style = core.css(_templateObject6$2(), medium);
var h6Style = core.css(_templateObject7$2(), medium);
var h7Style = core.css(_templateObject8$2());

var SubHeading = function SubHeading(_ref) {
  var children = _ref.children,
      text = _ref.text,
      style = _ref.style,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 2 : _ref$level,
      tag = _ref.tag,
      styleLevel = _ref.styleLevel,
      otherAttr = _objectWithoutProperties(_ref, ["children", "text", "style", "level", "tag", "styleLevel"]);

  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var stylings = [h1Style, h2Style, h3Style, h4Style, h5Style, h6Style, h7Style];
  var SelectedHeading = tag || headings[level - 1] || 'h2';
  var SelectedStyling = stylings[styleLevel ? styleLevel - 1 : level - 1];
  var alignment = tag == "legend" ? "center" : null; // Ugly fix for firefox

  return core.jsx(SelectedHeading, _extends({
    css: [commonSubHeadingStyle, SelectedStyling, style],
    align: alignment
  }, otherAttr), children, text);
};

var Heading = function Heading(_ref) {
  var text = _ref.text,
      style = _ref.style,
      children = _ref.children,
      otherAttr = _objectWithoutProperties(_ref, ["text", "style", "children"]);

  return core.jsx(SubHeading, _extends({
    style: style,
    level: 1,
    text: text
  }, otherAttr), children);
};

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 5.6rem;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    padding: .8rem 4rem .8rem 1.4rem;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    color: ", ";\n    line-height: 2.4rem;\n    font-size: 2.1rem;\n    font-weight: 500;\n    word-wrap:break-word;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    height:100%;\n    align-items: center;\n    border-radius: .8rem;\n    border: 1px solid ", ";\n    &:hover {\n        background-color: ", ";\n        border-color: ", ";\n        span {\n            text-decoration:underline;\n        }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    padding: 0 1.6rem 0 1.2rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    transform: rotate(270deg);\n    padding-right: .4rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var arrowStyle = core.css(_templateObject$2(), colors.theme1.mid);
var iconStyle = core.css(_templateObject2$3(), colors.theme1.mid);
var iconCardStyle = core.css(_templateObject3$3(), colors.common.white, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark);
var iconText = core.css(_templateObject4$3(), colors.theme1.mid);
var noIcon = core.css(_templateObject5$3());
var topAreaIcon = core.css(_templateObject6$3());

/** @jsx jsx */
var IconCard = React__default.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      text = _ref.text,
      url = _ref.url,
      style = _ref.style,
      onClick = _ref.onClick,
      id = _ref.id;
  var haveIcon = !icon ? noIcon : null;
  return core.jsx("a", {
    ref: ref,
    id: id,
    href: url,
    onClick: onClick,
    css: [iconCardStyle, style],
    className: "noStyle"
  }, icon && core.jsx(EditorIcon, {
    "aria-hidden": "true",
    icon: icon,
    style: iconStyle
  }, "Ikon"), core.jsx("span", {
    css: [iconText, haveIcon]
  }, text), core.jsx(Icon, {
    "aria-hidden": "true",
    icon: "Arrow",
    style: arrowStyle
  }));
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    border-radius:1.6rem;\n    color: ", ";\n    padding: .4rem 1.6rem;\n    display: table;\n    min-height: 3rem;\n    text-decoration: none;\n    font-size:1.6rem;\n    font-weight: 500;\n    line-height:2.4rem;\n    display:inline-block;\n    vertical-align:middle;\n    box-sizing:border-box;\n\n    &:hover {\n        background-color: ", ";\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        text-decoration:underline;\n    }\n    &:active {\n        color:#fff;\n        background-color: ", ";\n        box-shadow:none;\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var tagStyle = core.css(_templateObject$3(), colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark);

/** @jsx jsx */

var Tag = function Tag(_ref) {
  var id = _ref.id,
      url = _ref.url,
      text = _ref.text,
      style = _ref.style,
      onClick = _ref.onClick;
  return core.jsx("a", {
    key: id,
    href: url,
    css: [tagStyle, style],
    onClick: onClick,
    className: "noStyle"
  }, text);
};

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 2rem;\n    right: 1.2rem;\n    vertical-align: middle;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 2rem;\n    right: .5rem;\n    vertical-align: middle;\n    transform: rotate(270deg);\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n\n    [dir='rtl'] &{\n        left: .5rem;\n        right: auto;\n        transform: rotate(90deg);\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    top: calc((100% - 32px) / 2);\n    left: 1.6rem;\n    height: 3.2rem;\n    width: 3.2rem;\n    fill: #fff;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.4rem;\n    line-height:2.4rem;\n    padding: 0 0 .8rem 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$3() {
  var data = _taggedTemplateLiteral(["\n    margin:0 1.6rem .8rem 0;\n    list-style-type:none;\n    &:before{\n        content:none !important;\n    }\n    &:last-child{\n        margin-right:0;\n    }\n"]);

  _templateObject8$3 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$3() {
  var data = _taggedTemplateLiteral(["\n    margin:0;\n    padding:0;\n    align-items: center;\n    align-content: center;\n    display: flex;\n    flex-flow: wrap;\n"]);

  _templateObject7$3 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$4() {
  var data = _taggedTemplateLiteral(["\n     position: relative;\n    min-height:6.9rem;\n    box-sizing:border-box;\n    overflow: auto;\n    padding: .8rem 1.6rem 0 1.6rem;\n"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["     \n        padding: .8rem 4rem .8rem 6.4rem;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n        width:100%;\n        height:100%;\n        padding: .8rem 4rem .8rem 1.6rem;\n        display: flex;\n        flex-direction:column;\n        box-sizing:border-box;\n        justify-content:center;\n        margin:0;\n        color: #fff;\n        line-height: 2.4rem;\n        font-size: 2.1rem;\n        font-weight: 500;\n        word-wrap:break-word;\n\n        [dir='rtl'] &{\n            padding: .8rem 1.6rem .8rem 4rem;\n        }\n\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";    \n    min-height: 7.2rem;\n    text-decoration: none;\n    width: 100%;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    justify-content:center;\n    flex-direction:column;\n    border-top-left-radius:.8rem;\n        border-top-right-radius:.8rem;\n\n    &:hover {\n        background-color: ", ";\n           .tagHeading{\n                text-decoration:underline;\n            }\n    }\n    &:active \n    {   \n        background-color: ", ";\n        border-color:", ";\n        span{\n            color:#fff;\n        }\n        svg {\n            fill:#fff;\n        }\n    }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    background-color:#fff;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    background-color:", ";    \n    display:flex;\n    flex-direction:column;\n    height:100%;\n    min-height:16rem;\n    border-radius:.8rem;\n    \n\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var tagBlockItem = core.css(_templateObject$4(), colors.theme3.xLight);
var invertedTag = core.css(_templateObject2$4());
var tagLink = core.css(_templateObject3$4(), colors.theme1.mid, colors.theme1.midDark, colors.theme1.xDark, colors.theme1.xDark);
var tagHeading = core.css(_templateObject4$4());
var tagIconHeading = core.css(_templateObject5$4());
var tagsArea = core.css(_templateObject6$4());
var tagsList = core.css(_templateObject7$3());
var tagsListItem = core.css(_templateObject8$3());
var tagItem = core.css(_templateObject9());
var tagItemText = core.css(_templateObject10());
var iconStyle$1 = core.css(_templateObject11());
var arrowStyle$1 = core.css(_templateObject12());
var secondaryArrowStyleCSS = core.css(_templateObject13());

/** @jsx jsx */

var GetTags = function GetTags(tags, onClick) {
  return core.jsx("ul", {
    css: tagsList
  }, tags.slice(0, 3).map(function (child, idx) {
    return core.jsx("li", {
      key: "lcbc-".concat(idx),
      css: tagsListItem
    }, core.jsx(Tag, {
      id: idx,
      onClick: onClick,
      url: child.url,
      text: child.titleInNavigation && child.titleInNavigation || child.title && child.title || child.headline && child.headline,
      style: tagItem
    }));
  }));
};

var TagBlock = React__default.forwardRef(function (_ref, ref) {
  var _ref$invertedColors = _ref.invertedColors,
      invertedColors = _ref$invertedColors === void 0 ? false : _ref$invertedColors,
      heading = _ref.heading,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      headingUrl = _ref.headingUrl,
      icon = _ref.icon,
      tags = _ref.tags,
      alternativeTagText = _ref.alternativeTagText,
      style = _ref.style,
      onClick = _ref.onClick,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt;
  var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'];
  var SelectedHeading = headings[headingLevel - 1] || 'h2';
  return core.jsx("div", {
    css: [tagBlockItem, invertedColors ? invertedTag : null, style]
  }, core.jsx("a", {
    ref: ref,
    href: headingUrl,
    css: tagLink,
    className: "noStyle",
    onClick: onClick
  }, icon && core.jsx(EditorIcon, {
    "aria-hidden": "true",
    icon: icon,
    css: iconStyle$1
  }, "Ikon"), core.jsx(SelectedHeading, {
    className: "tagHeading",
    css: [tagHeading, icon != null ? tagIconHeading : null]
  }, heading), secondaryArrowStyle ? core.jsx(Icon, {
    "aria-hidden": "true",
    icon: "LinkArrow",
    style: secondaryArrowStyleCSS
  }) : core.jsx(Icon, {
    "aria-hidden": "true",
    icon: "Arrow",
    style: arrowStyle$1
  })), core.jsx("div", {
    css: tagsArea
  }, tags && tags.length > 0 ? GetTags(tags, onClick) : core.jsx("p", {
    css: tagItemText
  }, alternativeTagText)));
});

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  width:4rem;\n  height:4rem;\n  transform: translate(-50%, 0);\n  ", " {\n    left: 1.2rem;\n    top:-.8rem; \n  }\n\n  [dir=\"rtl\"] &{\n    ", " {\n      left: auto;\n      right: -3.2rem; \n    }\n  }\n\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.7rem;\n  padding: 4rem 1.6rem 2.4rem 1.6rem;\n  margin-top: 2rem;\n  ", " {\n    padding: 2.4rem 3.2rem 2.4rem 3.2rem;\n    margin-top: .8rem;\n    margin-left: .8rem;\n  }\n  [dir=\"rtl\"] &{\n    ", " {\n      margin-left: .0rem;\n      margin-right: .8rem;\n    }\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper = core.css(_templateObject$5(), colors.theme1.light, medium, medium);
var exclamationMarkImage = core.css(_templateObject2$5(), medium, medium);
var heading = core.css(_templateObject3$5());

/** @jsx jsx */
var PrerequisitesBox = function PrerequisitesBox(_ref) {
  var text = _ref.text,
      children = _ref.children,
      wrapperStyle = _ref.wrapperStyle;
  if (children == null) return null;
  return core.jsx("div", {
    css: [wrapper, wrapperStyle]
  }, core.jsx(Icon, {
    icon: "Exclamationmark",
    style: exclamationMarkImage
  }), text && core.jsx(SubHeading, {
    style: heading,
    text: text,
    styleLevel: 3
  }), children);
};

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  fill: #b50255;\n  width:6.4rem;\n  height:6.4rem;\n  left:calc(50% - 3.2rem);\n  top:calc(50% - 3.2rem);\n"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 0.4rem;\n  fill: #fff;\n"]);

  _templateObject8$4 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$4() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius: .8rem;\n  border-top-left-radius:.8rem;\n  background-color: ", ";\n  padding-top:36.84%;\n  position:relative;\n  \n"]);

  _templateObject7$4 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$5() {
  var data = _taggedTemplateLiteral(["\n  margin-top:-.8rem;\n  width:100%;\n  min-height:11.2rem;\n\n  picture {\n    display:block;\n    width:100%;\n    min-height:5rem;\n  }\n  img {\n    display:block;\n    width:100%;\n    height:auto;\n    border-top-right-radius: .8rem;\n    border-top-left-radius:.8rem;\n  }\n\n"]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  margin:1.6rem 2.4rem 2.4rem 2.4rem;\n  ", " {\n    \n      max-width:32.8rem;\n  }\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin:0;\n  padding:0;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  margin: 0 0 .8rem 0;\n  font-weight:700;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  padding-top:.8rem;\n  display:flex;\n\n  &:hover .focusWrapper {\n      background-color: ", ";      \n  }\n  &:active .focusWrapper {\n      background-color: ", ";      \n  }\n  &:hover h3, &:active h3 {\n    text-decoration:underline;\n  }\n  \n  ", " {\n    height:100%\n  }\n\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  min-height: 25.6rem;\n  display:flex;\n  height: calc(100% - .8rem);\n  width:100%;\n  flex-direction:column;\n  background-color: ", ";\n  border-bottom-right-radius:.8rem;\n  border-bottom-left-radius:.8rem;\n\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var focusWrapper = core.css(_templateObject$6(), colors.theme2.mid);
var linkWrapper = core.css(_templateObject2$6(), colors.theme2.midDark, colors.theme2.dark, medium);
var focusHeadline = core.css(_templateObject3$6());
var focusText = core.css(_templateObject4$5());
var textArea = core.css(_templateObject5$5(), medium);
var pictureWrapper = core.css(_templateObject6$5());
var iconBackground = core.css(_templateObject7$4(), colors.theme2.light);
var externalIcon = core.css(_templateObject8$4());
var puffIcon = core.css(_templateObject9$1());

/** @jsx jsx */
var FocusPuff = function FocusPuff(_ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick;
  var imageArea = imageComponent;

  if (imageArea == null) {
    if (image != null) imageArea = core.jsx("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = core.jsx("div", {
        className: 'iconBackground',
        css: iconBackground
      }, core.jsx(EditorIcon, {
        icon: icon,
        style: puffIcon
      }));
    }
  }

  var puffMarkup = function puffMarkup() {
    return core.jsx("div", {
      css: focusWrapper,
      className: 'focusWrapper'
    }, core.jsx("div", {
      css: pictureWrapper
    }, imageArea), core.jsx("div", {
      css: textArea
    }, core.jsx("h3", {
      css: focusHeadline
    }, headline, isExternalLink && core.jsx(Icon, {
      title: "Extern l\xE4nk",
      icon: "External",
      style: externalIcon
    })), core.jsx("p", {
      css: focusText
    }, text)));
  };

  return url !== null ? core.jsx("a", {
    css: linkWrapper,
    onClick: onClick,
    href: url,
    className: "noStyle"
  }, puffMarkup()) : puffMarkup();
};

function _templateObject9$2() {
  var data = _taggedTemplateLiteral(["\n  position:absolute;\n  fill: ", ";\n  width:6.4rem;\n  height:6.4rem;\n  left:calc(50% - 3.2rem);\n  top:calc(50% - 3.2rem);\n"]);

  _templateObject9$2 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-left: 0.8rem;\n  fill: ", ";\n  width:2rem;\n"]);

  _templateObject8$5 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$5() {
  var data = _taggedTemplateLiteral(["\n  border-top-right-radius:.8rem;\n  border-top-left-radius:.8rem;\n  border-bottom-right-radius:0;\n  background-color: ", ";\n  position:relative;\n  padding-top:36.84%;\n\n  ", "{\n    height:100%;\n    padding-top:0;\n    border-top-right-radius:0;\n    border-bottom-left-radius: .8rem;\n    border-bottom-right-radius:0;\n  }\n"]);

  _templateObject7$5 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$6() {
  var data = _taggedTemplateLiteral(["\n  margin-top:-.8rem;\n  width:100%;\n  min-height:11.2rem;\n\n  picture {\n    display:block;\n    width:100%;\n    min-height:5rem;\n  }\n  img {\n    display:block;\n    width:100%;\n    height:auto;\n    border-top-right-radius: .8rem;\n    border-top-left-radius:.8rem;\n  }\n\n  ", "{\n    max-width:49.11%;\n    margin-top:0;\n    margin-left:-.8rem;\n    img {\n      border-top-right-radius: 0;\n      border-bottom-left-radius:.8rem;\n    }\n  }\n\n  ", "{\n    max-width:30.4rem;\n  }\n"]);

  _templateObject6$6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n  padding:1.6rem 2.4rem 2.4rem 2.4rem;\n  box-sizing:border-box;\n  ", " {   \n      max-width:50.89%;  \n      display:flex;\n      justify-content:center;\n      flex-direction:column;\n      width:100%;\n  }\n  ", " {   \n      max-width:32.8rem;\n      \n  }\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin:0;\n  padding:0;\n  color:", ";\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n  color:#000;\n  font-size: 2.4rem;\n  line-height: 3.2rem;\n  margin: 0 0 .8rem 0;\n  font-weight:700;\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  padding-top:.8rem;\n  display:flex;\n\n  h2 {\n    color: ", ";\n  }\n\n  &:hover .focusWrapper {\n      background-color: ", ";      \n  }\n  &:active .focusWrapper {\n      background-color: ", ";      \n  }\n  &:hover h2, &:active h2 {\n    text-decoration:underline;\n  }\n\n  ", " {\n    height:100%\n  }\n\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  min-height: 25.6rem;\n  display:flex;\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  background-color: #fff;\n  border-bottom-right-radius:.8rem;\n  border-bottom-left-radius:.8rem;\n  ", "{\n    flex-direction:row;\n    margin-top:-.8rem;\n    margin-left:.8rem;\n    border-top-right-radius:.8rem;\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var focusWrapper$1 = core.css(_templateObject$7(), medium);
var linkWrapper$1 = core.css(_templateObject2$7(), colors.theme1.mid, colors.theme2.midDark, colors.theme2.dark, medium);
var focusHeadline$1 = core.css(_templateObject3$7());
var focusText$1 = core.css(_templateObject4$6(), colors.theme3.dark);
var textArea$1 = core.css(_templateObject5$6(), medium, large);
var pictureWrapper$1 = core.css(_templateObject6$6(), medium, large);
var iconBackground$1 = core.css(_templateObject7$5(), colors.theme2.light, medium);
var externalIcon$1 = core.css(_templateObject8$5(), colors.theme1.mid);
var puffIcon$1 = core.css(_templateObject9$2(), colors.theme2.mid);

/** @jsx jsx */
var CampaignFocusPuff = function CampaignFocusPuff(_ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick;
  var imageArea = imageComponent;

  if (imageArea == null) {
    if (image != null) imageArea = core.jsx("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = core.jsx("div", {
        css: iconBackground$1
      }, core.jsx(EditorIcon, {
        icon: icon,
        style: puffIcon$1
      }));
    }
  }

  var campaignPuffMarkup = function campaignPuffMarkup() {
    return core.jsx("div", {
      css: focusWrapper$1
    }, core.jsx("div", {
      css: pictureWrapper$1
    }, imageArea), core.jsx("div", {
      css: textArea$1
    }, core.jsx("h3", {
      css: focusHeadline$1
    }, headline, isExternalLink && core.jsx(Icon, {
      title: "Extern l\xE4nk",
      icon: "External",
      style: externalIcon$1
    })), core.jsx("p", {
      css: focusText$1
    }, text)));
  };

  return url !== null ? core.jsx("a", {
    css: linkWrapper$1,
    href: url,
    onClick: onClick,
    className: "noStyle"
  }, campaignPuffMarkup()) : campaignPuffMarkup();
};

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.7rem;\n    padding: ", " ", " ", " ", ";\n    ", " {\n        padding: ", " ", " ", " ", ";\n    }\n    ul {\n        padding-left: 0;\n        li {\n            margin-bottom: 1rem;\n        }\n    }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$1 = core.css(_templateObject$8(), colors.theme3.xLight, spacing.m, spacing.s, spacing.m, spacing.s, medium, spacing.m, spacing.l, spacing.m, spacing.l);
var secondaryColorStyle = core.css(_templateObject2$8(), colors.theme2.light);

/** @jsx jsx */
var FactBox = function FactBox(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      _ref$headlineLevel = _ref.headlineLevel,
      headlineLevel = _ref$headlineLevel === void 0 ? 2 : _ref$headlineLevel,
      content = _ref.content,
      secondaryColor = _ref.secondaryColor,
      style = _ref.style;
  if (!content && !children) return null;
  return core.jsx("div", {
    css: [wrapper$1, LinkWrapperInvertedColorStyle, secondaryColor && secondaryColorStyle, style]
  }, headline && core.jsx(SubHeading, {
    level: headlineLevel,
    text: headline,
    styleLevel: 3
  }), children, content);
};

function _templateObject9$3() {
  var data = _taggedTemplateLiteral([" \n    font-size: 2.1rem;\n    line-height: 2.4rem;\n    font-weight: 500;\n\n"]);

  _templateObject9$3 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$6() {
  var data = _taggedTemplateLiteral(["\n\n    width: 100%;\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    padding-right: 20%;\n    color: ", ";\n    font-weight: 400;\n    margin-top: 1.6rem;\n    display:block;\n    [dir='rtl'] & {\n        padding-left: 20%;\n        padding-right: 0%;\n    }\n\n"]);

  _templateObject8$6 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$6() {
  var data = _taggedTemplateLiteral(["\n    line-height: 2.4rem!important;\n    margin-bottom: 0;\n    padding-bottom: 0;\n    font-size: 2.1rem;\n    display: flex;\n    font-weight: 500 !important;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    color: ", ";\n\n"]);

  _templateObject7$6 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.4rem;\n    cursor: pointer;\n    display: block;\n    border-top: 1px solid ", ";\n    padding: .8rem 0 1.6rem 0;\n    margin: 0 1.6rem;\n    line-height: 2.4rem;\n    margin-top: auto;\n    a{\n        font-weight: 500 !important;\n    }\n    \n"]);

  _templateObject6$7 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$7() {
  var data = _taggedTemplateLiteral(["\n\n    display: inline-flex;\n    flex-direction:column;\n    padding: 0 0 1.6rem 0;\n    a{\n        font-weight: normal !important;\n        &:hover{\n            border-radius: 0 !important;\n        }\n    }\n\n"]);

  _templateObject5$7 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(0deg)!important;\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.6rem;\n    box-sizing:border-box;\n    text-decoration: none !important;\n    \n    &:hover{\n        border-radius: .8rem .8rem 0 0 !important;\n        box-shadow: none !important;\n        text-decoration: underline!important;\n    }\n    &:active {\n        background-color: ", "!important;\n        color: ", "!important;\n    }\n\n    &:visited {\n        color: ", "!important;\n        svg{\n            fill: ", "!important;\n        }\n    }\n\n    .tabnav &:focus {\n        outline: none;\n        \n        > *{\n            outline: 4px solid ", ";\n            outline-offset: 6px;\n        }\n    }\n\n\n\n    width: 100%;\n    span{\n        max-width: 84%;\n    }\n    [dir='rtl'] &{\n        svg{\n            right: 1.4rem;;\n            transform: rotate(90deg);\n        }\n    }\n    svg{\n        flex-shrink: 0;\n        height: 3.2rem;\n        width: 3.2rem;\n        position: relative;\n        right: -1.4rem;\n        transform: rotate(-90deg);\n    }\n\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n    padding: 2.4rem 1.6rem;\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-radius: 0.8rem;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid ", ";\n    overflow: hidden;\n\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$2 = core.css(_templateObject$9(), colors.theme3.midLight);
var linkTextMainLinkStyle = core.css(_templateObject2$9());
var mainLinkStyle = core.css(_templateObject3$8(), colors.theme1.xDark, colors.common.white, colors.theme1.mid, colors.theme1.mid, colors.states.focus);
var rotateArrow = core.css(_templateObject4$7());
var childrenWrapper = core.css(_templateObject5$7());
var showAllLink = core.css(_templateObject6$7(), colors.theme3.midLight);
var innerTextWrapperStyle = core.css(_templateObject7$6(), colors.theme1.mid);
var linkTextCardContentStyle = core.css(_templateObject8$6(), colors.theme3.dark);
var customFontSize = core.css(_templateObject9$3());

/** @jsx jsx */
var LinkCard = React__default.forwardRef(function (_ref, ref) {
  var text = _ref.text,
      href = _ref.href,
      children = _ref.children,
      id = _ref.id,
      _ref$secondaryArrowSt = _ref.secondaryArrowStyle,
      secondaryArrowStyle = _ref$secondaryArrowSt === void 0 ? false : _ref$secondaryArrowSt,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      onClick = _ref.onClick,
      _ref$beforeToggleCoun = _ref.beforeToggleCount,
      beforeToggleCount = _ref$beforeToggleCoun === void 0 ? 3 : _ref$beforeToggleCoun,
      style = _ref.style,
      childrenWrapperStyle = _ref.childrenWrapperStyle;
  var childrenArray = React__default.Children.toArray(children);
  var itemsToShow = [];

  if (childrenArray && childrenArray.length > 0) {
    itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean);
  }

  return core.jsx("div", {
    id: id,
    css: [wrapper$2, style]
  }, core.jsx("a", {
    ref: ref,
    href: href,
    css: mainLinkStyle,
    onClick: onClick
  }, core.jsx(SubHeading, {
    level: headingLevel,
    styleLevel: 3,
    style: innerTextWrapperStyle
  }, core.jsx("span", {
    css: customFontSize
  }, text), core.jsx(Icon, {
    "aria-hidden": "true",
    style: secondaryArrowStyle ? rotateArrow : null,
    icon: secondaryArrowStyle ? 'LinkArrow' : 'Arrow'
  }))), itemsToShow.length > 0 && core.jsx("div", {
    css: [childrenWrapper, childrenWrapperStyle]
  }, itemsToShow), childrenArray.length > beforeToggleCount && core.jsx("span", {
    css: showAllLink
  }, core.jsx("a", {
    href: href,
    onClick: onClick
  }, "Visa alla (", childrenArray.length, ")")));
});
LinkCard.displayName = "LinkCard";

/** @jsx jsx */
var LinkTextCard = React__default.forwardRef(function (_ref, ref) {
  var text = _ref.text,
      href = _ref.href,
      children = _ref.children,
      id = _ref.id,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 2 : _ref$headingLevel,
      onClick = _ref.onClick,
      style = _ref.style,
      dir = _ref.dir,
      lang = _ref.lang;

  var renderLinkText = function renderLinkText() {
    if (children) {
      return core.jsx(SubHeading, {
        level: headingLevel,
        styleLevel: 3,
        style: innerTextWrapperStyle
      }, core.jsx("span", null, text), core.jsx(Icon, {
        "aria-hidden": "true",
        icon: "Arrow"
      }));
    } else {
      return core.jsx("div", {
        css: innerTextWrapperStyle
      }, core.jsx("span", null, text), core.jsx(Icon, {
        "aria-hidden": "true",
        icon: "Arrow"
      }));
    }
  };

  return core.jsx("div", {
    id: id,
    dir: dir,
    css: [wrapper$2, style],
    lang: lang
  }, core.jsx("a", {
    ref: ref,
    href: href,
    css: [mainLinkStyle, linkTextMainLinkStyle],
    onClick: onClick
  }, renderLinkText(), children && core.jsx("span", {
    css: linkTextCardContentStyle
  }, children)));
});
LinkTextCard.displayName = "LinkTextCard";

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    color: #464646;\n    width: 100%;\n    font-size: 21px;\n    line-height: 28px;\n    padding: 18px 0; \n    display: flex;\n    user-select: none;   \n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n\n    appearance: none;\n    width: 2.4rem;\n    height: 2.4rem;\n    vertical-align: middle;\n    border-radius: 50%;\n    border: 2px solid ", ";\n    background: #fff;\n    margin: 0;\n    margin-left: 2.4rem;\n    margin-right: 1.6rem;\n    flex-shrink: 0;\n    \n    &:focus{\n        outline:none!important;\n    }    \n\n    &:checked{\n        outline: none;\n        border: 4px solid ", ";\n        background-color: ", ";\n        position: relative;\n        \n        &+label{ \n            text-decoration: underline;\n            font-weight: 500;\n            color: ", ";\n        } \n\n        &:before{\n            content: \"\";\n            width: 1.6rem;\n            height: 1.6rem;\n            border-radius: 50%;\n            display:block;\n            border: 2px solid #fff;\n            background: transparent;\n            position: absolute;\n            top:-2px;\n            left:-2px;\n        }\n\n    }\n\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n\n    width: 100%;\n    position: relative;\n    border-radius: 0.8rem;\n    border: 2px solid transparent;\n    display:flex;\n    align-items: center;\n    background-color: ", ";\n    &.inputHasValue{\n        border: 2px solid ", ";\n        text-decoration: underline;\n        font-weight: bold;\n    }\n\n    &:hover{\n        border: 2px solid ", ";\n        .radiolabel {\n            text-decoration: underline;\n        }\n    }\n    \n    &:focus-within{\n        .tabnav &{\n            outline-offset: 2px;\n            outline: 3px solid ", ";\n        }\n    }\n    \n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var fieldWrapper = core.css(_templateObject$a(), colors.theme3.xLight, colors.theme1.xDark, colors.theme1.mid, colors.states.focus);
var fieldInput = core.css(_templateObject2$a(), colors.theme1.mid, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark);
var fieldLabel = core.css(_templateObject3$9());

/** @jsx jsx */
var InputRadio = function InputRadio(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      fieldWrapperStyle = _ref.fieldWrapperStyle,
      fieldInputStyle = _ref.fieldInputStyle,
      fieldLabelStyle = _ref.fieldLabelStyle,
      _onChange = _ref.onChange,
      value = _ref.value,
      checked = _ref.checked;
  var inputRef = React.useRef(null);
  return core.jsx("div", {
    css: [fieldWrapper, fieldWrapperStyle],
    className: checked ? "inputHasValue" : ""
  }, core.jsx("label", {
    className: "radiolabel",
    css: [fieldLabel, fieldLabelStyle],
    htmlFor: id
  }, core.jsx("input", {
    ref: inputRef,
    css: [fieldInput, fieldInputStyle],
    id: id,
    name: name,
    type: "radio",
    onChange: function onChange(e) {
      if (_onChange && !document.body.classList.contains('tabnav')) {
        _onChange(e);
      }
    },
    value: value,
    checked: checked,
    onKeyUp: function onKeyUp(e) {
      //32 == space
      if (e.which === 32 || e.key == 'Enter') {
        _onChange(e);
      }
    }
  }), labelText));
};

function _templateObject6$8() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject6$8 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$8() {
  var data = _taggedTemplateLiteral(["\n\n    position: absolute;\n    right: 2.4rem;\n    bottom: 2.2rem;\n\n"]);

  _templateObject5$8 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$8() {
  var data = _taggedTemplateLiteral([" \n    appearance: none;\n    position: absolute;\n    right: 1.6rem;\n    border: 0px;\n    background-color: transparent;\n    bottom: 1.4rem;\n    width: 2.8rem;\n    height: 2.8rem;\n    padding: 0;\n    svg{\n        fill: ", ";\n        width: 2.8rem;\n        height: 2.8rem;\n    }\n    &:focus{\n        outline: none;\n    }\n    \n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    input {\n        border-color: #F00;\n    }\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 1.2rem ", " 1.2rem 1.6rem;\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n    font-size: 1.8rem;\n    line-height: 3rem;\n    height: 5.4rem;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n\n    &:focus{\n        outline: none;\n        border-color: ", "\n    }\n\n    &::placeholder {\n        font-style: italic;\n    }\n    &::-ms-clear{\n        display:none;\n        width: 0;\n        height: 0; \n    }\n    &::-webkit-search-cancel-button{\n        appearance: none;   \n    }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var InputStyle = function InputStyle(hasInnerContent) {
  return css(_templateObject$b(), hasInnerContent ? '4.5rem' : '1.6rem', colors.theme3.midLight, colors.theme1.mid);
};
var invalidStyle = css(_templateObject2$b());
var InputWrapperStyle = css(_templateObject3$a());
var ClearInput = css(_templateObject4$8(), colors.theme1.mid);
var LoadingStyle = css(_templateObject5$8());
var Label = css(_templateObject6$8());

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n  \n  &:after {\n    content: \" \";\n    display: block;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid ", ";\n    border-color: ", " transparent ", " transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n  }\n  @keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var loaderStyle = function loaderStyle(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors.theme2.midLight : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '80px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "80px" : _ref$height,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? "6px" : _ref$border;
  return core.css(_templateObject$c(), width, height, width, height, border, color, color, color);
};

var Loading = (function (_ref2) {
  var color = _ref2.color,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? "small" : _ref2$size,
      style = _ref2.style;
  var sizeStyle = null;

  switch (size) {
    case "small":
      sizeStyle = {
        width: '20px',
        height: '20px',
        border: '3px',
        color: color
      };
  }

  return core.jsx("div", {
    css: [loaderStyle(sizeStyle), style],
    "aria-busy": "true",
    className: "lds-dual-ring"
  });
});

var InputText = React__default.forwardRef(function (_ref, _ref2) {
  var style = _ref.style,
      wrapperStyle = _ref.wrapperStyle,
      placeholder = _ref.placeholder,
      id = _ref.id,
      _onChange = _ref.onChange,
      onClear = _ref.onClear,
      validationError = _ref.validationError,
      name = _ref.name,
      disabled = _ref.disabled,
      label = _ref.label,
      _ref$hideLabel = _ref.hideLabel,
      hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      other = _objectWithoutProperties(_ref, ["style", "wrapperStyle", "placeholder", "id", "onChange", "onClear", "validationError", "name", "disabled", "label", "hideLabel", "loading", "type"]);

  var inputRef = React.useRef();

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? invalidStyle : null;
  var innerContent = null;

  if (type == "search" && !loading && text != null && text != "") {
    innerContent = core.jsx("a", {
      href: "#",
      css: ClearInput,
      className: "noStyle",
      onClick: function onClick(e) {
        e.preventDefault();
        if (inputRef == null || inputRef.current == null) return;
        inputRef.current.value = "";
        setText("");
        inputRef.current.dispatchEvent(new Event('change'));

        if (onClear) {
          onClear(e);
        }
      }
    }, core.jsx(Icon, {
      icon: "Clear"
    }));
  }

  if (loading) {
    innerContent = core.jsx(Loading, {
      style: LoadingStyle
    });
  }

  return core.jsx("div", {
    css: [InputWrapperStyle, wrapperStyle, invalid]
  }, label && core.jsx("label", {
    css: [Label, hideLabel ? VisuallyHidden$1 : null],
    htmlFor: id
  }, label), validationError, core.jsx("input", _extends({
    ref: function ref(el) {
      inputRef.current = el;
      return typeof _ref2 === 'function' ? _ref2(el) : null;
    },
    css: [InputStyle(innerContent != null), style],
    name: name,
    disabled: disabled,
    placeholder: placeholder,
    id: id,
    onChange: function onChange(e) {
      _onChange(e);

      setText(e.target.value);
    },
    type: type
  }, other)), innerContent);
});

function _templateObject8$7() {
  var data = _taggedTemplateLiteral(["\n    fill:", ";\n    width: 1.6rem;\n    height: 1.6rem;\n    vertical-align: bottom;\n    ", " {\n        height: 2.4rem;\n        width: 2.4rem;\n        vertical-align: bottom;\n    }\n"]);

  _templateObject8$7 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$7() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    svg {\n        padding-left:.8rem;\n    }\n"]);

  _templateObject7$7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$9() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    svg {\n        padding-right:.8rem;\n     }\n"]);

  _templateObject6$9 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$9() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    color: ", ";\n    svg {\n            fill:", "; \n        }\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n    &:disabled {\n        ", "\n    }\n"]);

  _templateObject5$9 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteral(["\n    &:hover, &:active, &.selectedButtonStyle {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    background-color:transparent;\n    color:", ";\n    box-shadow:inset 0px 0px 0px 1px ", ";\n\n    svg {\n        fill:", "; \n    }\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n        border-color:", ";\n    }\n    &:active {\n        color:", ";\n        background-color:", ";\n        box-shadow:none;\n        svg {\n            fill:", "; \n        }\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    text-align: center;\n    display: inline-block;\n    vertical-align: middle;\n    font-size:1.6rem;\n    font-weight:500;\n    padding: .8rem;\n    color: ", ";\n    border-radius:.8rem;\n    width:100%;\n    box-sizing: border-box;\n    cursor:pointer;\n    background-color:", ";\n\n    svg {\n        fill: ", ";\n        flex-shrink: 0;\n    }\n\n    ", "{\n        font-size:2.1rem;\n        line-height:2.4rem;\n        width:fit-content;\n        padding:1.6rem 2.4rem;\n    }\n\n    &:hover, &.selectedButtonStyle {\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:active{\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral([" \n    color: ", ";\n    background-color: ", ";\n    text-decoration:none;\n    box-shadow:none;\n    cursor:inherit;\n    svg {\n        fill:", ";\n    }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var disabled = core.css(_templateObject$d(), colors.theme3.mid, colors.theme3.midLight, colors.theme3.mid);
var buttonStyle = core.css(_templateObject2$c(), colors.common.white, colors.theme1.mid, colors.common.white, medium, colors.theme1.midDark, colors.theme1.xDark, disabled);
var secondaryStyle = core.css(_templateObject3$b(), colors.theme1.mid, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.common.white, colors.theme1.xDark, colors.common.white, disabled);
var invertedBackgroundStyle = core.css(_templateObject4$9(), colors.common.white, colors.theme1.dark);
var invertedSecondaryBackgroundStyle = core.css(_templateObject5$9(), colors.common.white, colors.common.white, colors.common.white, colors.common.white, colors.theme1.midDark, colors.theme1.dark, disabled);
var buttonIconLeft = core.css(_templateObject6$9());
var buttonIconRight = core.css(_templateObject7$7());
var iconStyle$2 = core.css(_templateObject8$7(), colors.common.white, medium);

var Button = function Button(_ref) {
  var text = _ref.text,
      _ref$secondaryButtonS = _ref.secondaryButtonStyle,
      secondaryButtonStyle = _ref$secondaryButtonS === void 0 ? false : _ref$secondaryButtonS,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      className = _ref.className,
      id = _ref.id,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "submit" : _ref$type,
      selected = _ref.selected,
      disabled = _ref.disabled,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      style = _ref.style,
      reference = _ref.reference,
      onClick = _ref.onClick,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["text", "secondaryButtonStyle", "invertedBackgroundColor", "className", "id", "type", "selected", "disabled", "iconLeft", "iconRight", "style", "reference", "onClick", "href"]);

  var styles = [buttonStyle];
  var cssClass = [className];
  secondaryButtonStyle && styles.push(secondaryStyle);
  invertedBackgroundColor && styles.push(invertedBackgroundStyle);
  selected && cssClass.push("selectedButtonStyle");
  href && cssClass.push("noStyle");
  invertedBackgroundColor && secondaryButtonStyle && styles.push(invertedSecondaryBackgroundStyle);
  iconLeft && styles.push(buttonIconLeft);
  iconRight && styles.push(buttonIconRight);
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  style && styles.push(style);

  var props = _objectSpread({
    "id": id,
    "css": styles,
    "className": cssClass.join(" "),
    "disabled": disabled,
    "onClick": onClick,
    "ref": reference,
    "type": href !== null ? null : type,
    "href": href || null
  }, ariaAttrs);

  var leftIcon = iconLeft ? React__default.isValidElement(iconLeft) ? iconLeft : core.jsx(Icon, {
    style: iconStyle$2,
    icon: iconLeft
  }) : null;
  var rightIcon = iconRight ? React__default.isValidElement(iconRight) ? iconRight : core.jsx(Icon, {
    style: iconStyle$2,
    icon: iconRight
  }) : null;
  return href ? core.jsx("a", props, leftIcon, text, rightIcon) : core.jsx("button", props, leftIcon, text, rightIcon);
};

function _templateObject8$8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.8rem;\n    line-height: 3.2rem;\n    margin-bottom: 0.8rem;\n    display: block;\n"]);

  _templateObject8$8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$8() {
  var data = _taggedTemplateLiteral(["\n\n    appearance: none;\n    position: absolute;\n    right: 0px;\n    border: 0px;\n    background-color: transparent;\n    top: 0.5rem;\n    width: 2.8rem;\n    height: 2.8rem;\n    padding: 0;\n    svg{\n        fill: ", ";\n        width: 2.8rem;\n        height: 2.8rem;\n    }\n    &:focus{\n        outline: none;\n    }\n\n    ", " {\n        top: 1.4rem;\n        right: 1.6rem;\n    }\n\n"]);

  _templateObject7$8 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$a() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:none;\n    &:hover, &:active {\n        box-shadow:none;\n    }\n"]);

  _templateObject6$a = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$a() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n    width:auto;\n    display:flex;\n    align-items: center;\n    border-radius: 0 .8rem .8rem 0;\n    margin-right:-.8rem;\n"]);

  _templateObject5$a = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$a() {
  var data = _taggedTemplateLiteral(["\n    -webkit-appearance: none;\n    background-color: ", ";\n    box-shadow:inset 0px 0px 0px 2px ", ";\n    border-radius: .8rem 0 0 .8rem;\n    border:none;\n    font-size:1.6rem;\n    line-height:2.4rem;\n    display:flex;\n    flex-grow:1;\n    padding: .8rem 4.5rem .8rem .8rem;\n    color: ", ";\n    font-style: normal;\n    font-weight: 500;\n    box-sizing: border-box;\n    width: 100%; \n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n\n    ", "{\n        font-size:1.8rem;\n        line-height:3.2rem;\n        padding: 1.2rem 6.4rem 1.2rem 1.6rem;\n    }\n\n    &:hover {\n        box-shadow:inset 0px 0px 0px 2px ", ";\n    }\n    &:active {\n        box-shadow:inset 0px 0px 0px 2px ", ";\n    }\n    &::placeholder {\n        font-style:italic;\n        color: ", ";\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    flex-grow:1;\n    position: relative;\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    display:flex;\n    flex-direction: row;\n    align-items: stretch;\n    background-color: ", ";\n    margin-right:.8rem;\n    border-radius:.8rem;\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral([" \n        background-color: ", ";\n        text-decoration:none;\n        box-shadow:inset 0px 0px 0px 1px ", ";\n        cursor:inherit;\n        &::placeholder {\n            color: ", ";\n        }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var disabled$1 = core.css(_templateObject$e(), colors.theme3.xLight, colors.theme3.midLight, colors.theme3.midLight);
var searchWrapperStyle = core.css(_templateObject2$d(), colors.common.white);
var searchFieldInputWrapperStyles = core.css(_templateObject3$c());
var searchFieldInputStyle = core.css(_templateObject4$a(), colors.common.white, colors.theme3.midLight, colors.theme1.xDark, medium, colors.theme1.mid, colors.theme1.xDark, colors.theme3.midDark, disabled$1);
var searchFieldButtonStyle = core.css(_templateObject5$a());
var invertedBackgroundStyle$1 = core.css(_templateObject6$a());
var clearInputStyle = core.css(_templateObject7$8(), colors.theme1.mid, medium);
var labelStyle = core.css(_templateObject8$8());

var FormSearchField = React__default.forwardRef(function (_ref, _ref2) {
  var className = _ref.className,
      icon = _ref.icon,
      fieldtext = _ref.fieldtext,
      labeltext = _ref.labeltext,
      _ref$showLabel = _ref.showLabel,
      showLabel = _ref$showLabel === void 0 ? false : _ref$showLabel,
      onClick = _ref.onClick,
      onClear = _ref.onClear,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      buttontext = _ref.buttontext,
      style = _ref.style,
      disabled = _ref.disabled,
      type = _ref.type,
      inputtype = _ref.inputtype,
      value = _ref.value,
      name = _ref.name,
      id = _ref.id,
      autocomplete = _ref.autocomplete,
      validationError = _ref.validationError,
      other = _objectWithoutProperties(_ref, ["className", "icon", "fieldtext", "labeltext", "showLabel", "onClick", "onClear", "onChange", "onBlur", "invertedBackgroundColor", "buttontext", "style", "disabled", "type", "inputtype", "value", "name", "id", "autocomplete", "validationError"]);

  var styles = [searchWrapperStyle];
  style && styles.push(style);
  var searchFieldInputStyles = [searchFieldInputStyle];
  invertedBackgroundColor && searchFieldInputStyles.push(invertedBackgroundStyle$1);
  var inputRef = React.useRef();
  var ariaAttrs = {};
  Object.keys(other).filter(function (x) {
    return x.startsWith("aria-");
  }).forEach(function (x) {
    return ariaAttrs[x] = other[x];
  });
  return core.jsx(React__default.Fragment, null, core.jsx("label", {
    css: showLabel ? labelStyle : VisuallyHidden$1,
    htmlFor: id || name
  }, labeltext || fieldtext), validationError, core.jsx("div", {
    css: [styles],
    className: className,
    role: "search"
  }, core.jsx("div", {
    css: searchFieldInputWrapperStyles
  }, core.jsx("input", _extends({}, other, {
    onChange: onChange,
    onBlur: onBlur,
    id: id || name,
    ref: function ref(el) {
      inputRef.current = el;
      return typeof _ref2 === 'function' ? _ref2(el) : null;
    },
    type: inputtype || "search",
    placeholder: fieldtext,
    disabled: disabled,
    value: value,
    name: name,
    autoComplete: autocomplete,
    css: [searchFieldInputStyles]
  })), inputRef && inputRef.current && inputRef.current.value.length > 0 && core.jsx("a", {
    href: "#",
    css: clearInputStyle,
    className: "noStyle",
    onClick: function onClick(e) {
      e.preventDefault();
      if (inputRef == null || inputRef.current == null) return;
      inputRef.current.value = "";
      inputRef.current.dispatchEvent(new Event('change'));

      if (onClear) {
        onClear(e);
      }
    }
  }, core.jsx(Icon, {
    icon: "Clear"
  }))), core.jsx(Button, {
    style: searchFieldButtonStyle,
    disabled: disabled,
    onClick: onClick,
    iconLeft: icon,
    text: buttontext //{...ariaAttrs}

  })));
});

function _templateObject4$b() {
  var data = _taggedTemplateLiteral(["\n    textarea {\n        border-color: #F00;\n    }\n"]);

  _templateObject4$b = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box;\n    border: 2px solid #979797;\n    font-family: Arial;\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    -webkit-appearance: textfield; /* safari fix */\n    margin-bottom: 2.4rem;\n    max-width: 100%;\n    min-width: 100%;\n\n    &:focus{\n        outline: none;\n        border-color: ", "\n    }\n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var TextAreaStyle = css(_templateObject$f(), colors.theme1.mid);
var TextAreaWrapperStyle = css(_templateObject2$e());
var Label$1 = css(_templateObject3$d());
var invalidStyle$1 = css(_templateObject4$b());

var TextArea = function TextArea(_ref) {
  var style = _ref.style,
      wrapperStyle = _ref.wrapperStyle,
      placeholder = _ref.placeholder,
      text = _ref.text,
      id = _ref.id,
      _onChange = _ref.onChange,
      onClear = _ref.onClear,
      validationError = _ref.validationError,
      name = _ref.name,
      disabled = _ref.disabled,
      _ref$hiddenLabel = _ref.hiddenLabel,
      hiddenLabel = _ref$hiddenLabel === void 0 ? false : _ref$hiddenLabel,
      other = _objectWithoutProperties(_ref, ["style", "wrapperStyle", "placeholder", "text", "id", "onChange", "onClear", "validationError", "name", "disabled", "hiddenLabel"]);

  var label = other.label;
  var inputRef = React.useRef(null);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      addedText = _useState2[0],
      setText = _useState2[1];

  var invalid = validationError ? invalidStyle$1 : null;
  return core.jsx("div", {
    css: [TextAreaWrapperStyle, wrapperStyle, invalid]
  }, label && core.jsx("label", {
    css: [Label$1, hiddenLabel ? VisuallyHidden$1 : null],
    htmlFor: id || name
  }, label), validationError, core.jsx("textarea", _extends({
    rows: "2",
    id: id,
    ref: inputRef
  }, other, {
    css: [TextAreaStyle, style],
    name: name,
    disabled: disabled,
    placeholder: placeholder,
    onChange: function onChange(e) {
      _onChange(e);

      setText(e.target.value);
    }
  }), addedText));
};

function _templateObject5$b() {
  var data = _taggedTemplateLiteral(["\n    &:hover + label {\n        background-color:", ";\n        color: ", ";\n    }\n    &:checked + label {\n        background-color:", ";\n    }\n    \n"]);

  _templateObject5$b = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$c() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n        background-color:", ";\n    }\n"]);

  _templateObject4$c = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteral(["\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  .checkbox-label {\n    font-size: 2.1rem;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .checkbox + .checkbox-label:before {\n    content: '';\n    background: #fff;\n    border-radius: 2px;\n    border: 1px solid ", ";\n    display: inline-block;\n    vertical-align: middle;\n    width: 32px;\n    height: 32px;\n    margin-right: 1.6rem;\n  }\n\n  .checkbox:checked + .checkbox-label {\n    text-decoration: underline;\n    color: ", ";\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n  }\n\n  .checkbox {\n    &:checked + label:before {\n      background: ", ";\n      border: 1px solid ", ";\n    }\n  }\n\n  .tabnav & .checkbox:focus + .checkbox-label {\n    outline: ", " solid 2px;\n    outline-offset: 2px;\n    box-shadow: none;\n  }\n\n  .checkbox:hover + .checkbox-label {\n    box-shadow:  0px 0px 0px 5px ", ";\n    background-color: ", ";\n    text-decoration: underline;\n  }\n\n  .checkbox:checked + .checkbox-label:before {\n    animation: fadein .2s ease-out;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85 85' %3E%3Cpath fill='", "' d='", "'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-size: 100px 100px;\n    background-position: 6px 8px;\n    position: relative;\n  }\n  @keyframes fadein {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteral([" \n    font-size: 2.1rem;\n    line-height: 3.2rem;\n    border-radius: .8px;\n    display: inline-block;\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral([" \n    position: relative;\n    display: inline-block;\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var wrapperStyle = core.css(_templateObject$g());
var labelStyle$1 = core.css(_templateObject2$f());
var checkbox = core.css(_templateObject3$e(), colors.theme1.mid, colors.theme1.dark, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.dark, colors.theme1.mid, colors.states.focus, colors.theme1.midLight, colors.theme1.midLight, encodeURIComponent('#fff'), checkPath);
var invertedLabelStyle = core.css(_templateObject4$c(), colors.common.white);
var invertedfieldStyle = core.css(_templateObject5$b(), colors.common.white, colors.theme1.xDark, colors.common.white);

/** @jsx jsx */
var FormCheckbox = function FormCheckbox(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      value = _ref.value,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      style = _ref.style;
  var labelStyles = [labelStyle$1];

  if (invertedBackgroundColor) {
    labelStyles.push(invertedLabelStyle);
  }

  style && labelStyles.push(style);
  return core.jsx("div", {
    css: [wrapperStyle, checkbox],
    "data-checked": checked
  }, core.jsx("input", {
    id: id,
    name: name,
    type: "checkbox",
    className: "checkbox",
    value: value,
    onChange: onChange,
    checked: checked
  }), core.jsx("label", {
    htmlFor: id,
    css: [labelStyles],
    className: "checkbox-label"
  }, labelText));
};

function _templateObject5$c() {
  var data = _taggedTemplateLiteral(["\n    &:hover + label {\n        background-color:", ";\n        color: ", ";\n    }\n    &:checked + label {\n        background-color:", ";\n    }\n    \n"]);

  _templateObject5$c = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$d() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n        background-color:", ";\n    }\n"]);

  _templateObject4$d = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top:.8rem;\n    left:.8rem;\n    appearance: none;\n    height:3.2rem;\n    width:3.2rem;\n    border:solid 1px ", ";\n    border-radius:.2rem;\n    background-color:", ";\n    margin:0;\n    border-radius:50%;\n\n    &:checked {\n        border-color:", ";\n    }\n    &:checked::before{\n        content: '';\n        display: block;\n        background-color:", ";\n        position: absolute;\n        height:2.2rem;\n        width:2.2rem;\n        left: calc(50% - 1.1rem);\n        top: calc(50% - 1.1rem);\n        border-radius:50%;\n   }\n   &:hover + label{\n    background-color:", ";\n    text-decoration:underline;\n   }\n   &:checked + label {\n    background-color:", ";\n    color:", ";\n    text-decoration:underline;\n   }\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteral([" \n    font-size:2.1rem;\n    line-height:3.2rem;\n    padding:.8rem .8rem .8rem 5.6rem;\n    border-radius:.8rem;\n    display:inline-block;\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n    }\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteral([" \n    position:relative;\n    display:inline-block;\n\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var wrapperStyle$1 = core.css(_templateObject$h());
var labelStyle$2 = core.css(_templateObject2$g(), colors.theme1.light);
var fieldStyle = core.css(_templateObject3$f(), colors.theme1.mid, colors.common.white, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.light, colors.theme1.light, colors.theme1.xDark);
var invertedLabelStyle$1 = core.css(_templateObject4$d(), colors.common.white);
var invertedfieldStyle$1 = core.css(_templateObject5$c(), colors.common.white, colors.theme1.xDark, colors.common.white);

/** @jsx jsx */
var FormRadiobutton = function FormRadiobutton(_ref) {
  var name = _ref.name,
      id = _ref.id,
      labelText = _ref.labelText,
      value = _ref.value,
      _ref$invertedBackgrou = _ref.invertedBackgroundColor,
      invertedBackgroundColor = _ref$invertedBackgrou === void 0 ? false : _ref$invertedBackgrou,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      style = _ref.style;
  var fieldStyles = [fieldStyle];
  var labelStyles = [labelStyle$2];

  if (invertedBackgroundColor) {
    labelStyles.push(invertedLabelStyle$1);
    fieldStyles.push(invertedfieldStyle$1);
  }

  style && labelStyles.push(style);
  return core.jsx(React__default.Fragment, null, core.jsx("div", {
    css: wrapperStyle$1
  }, core.jsx("input", {
    id: id,
    name: name,
    type: "radio",
    css: [fieldStyles],
    value: value,
    onChange: onChange,
    checked: checked
  }), core.jsx("label", {
    htmlFor: id,
    css: [labelStyles]
  }, labelText)));
};

/** @jsx jsx */
var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children;
  return core.jsx("fieldset", null, children);
};

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 1.4rem;\n  svg {\n    align-content: center;\n    flex-shrink: 0;\n    margin-right: 0.4rem;\n    fill: ", ";\n  }\n  p {\n    line-height: 2.4rem;\n    padding-bottom: 0;\n  }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$3 = function wrapper(success) {
  return css(_templateObject$i(), success ? colors.common.success : colors.common.warning, success ? colors.common.success : colors.common.warning);
};

/** @jsx jsx */

var ValidationResponse = function ValidationResponse(_ref) {
  var _ref$success = _ref.success,
      success = _ref$success === void 0 ? false : _ref$success,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      children = _ref.children;
  return core.jsx("div", {
    css: wrapper$3(success)
  }, core.jsx(Icon, {
    icon: success ? "Check" : "Clear"
  }), text, children);
};

function _templateObject3$g() {
  var data = _taggedTemplateLiteral(["\n    select {\n        border-color: #F00;\n    }\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n    appearance: none;\n    width: 100%;\n    padding: 1.2rem 1.6rem;\n    box-sizing:border-box;\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path fill='", "' d='", "' /></svg>\");\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: 1.6em auto, 100%;\n    &[data-hasvalue=\"false\"]{\n        color: ", ";    \n    }\n\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var selectStyle = core.css(_templateObject$j(), colors.theme3.midLight, encodeURIComponent(colors.theme1.mid), arrowPath, colors.theme3.dark);
var selectWrapperStyle = core.css(_templateObject2$h());
var invalidStyle$2 = core.css(_templateObject3$g());

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      id = _ref.id,
      _onChange = _ref.onChange,
      validationError = _ref.validationError,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["label", "id", "onChange", "validationError", "children"]);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var invalid = validationError ? invalidStyle$2 : null;
  return core.jsx("div", {
    css: [selectWrapperStyle, invalid]
  }, label && core.jsx("label", {
    css: Label$1,
    htmlFor: id
  }, label), validationError, core.jsx("select", _extends({
    id: id,
    css: selectStyle,
    "data-hasvalue": !!value,
    value: value || "",
    onChange: function onChange(e) {
      setValue(e.target.value);

      if (_onChange) {
        _onChange(e);
      }
    }
  }, other), children));
};

function _templateObject8$9() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(180deg);\n"]);

  _templateObject8$9 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$9() {
  var data = _taggedTemplateLiteral(["\n    width:2.4rem;\n    height:2.4rem;\n    position: relative;\n    top: 3px;\n"]);

  _templateObject7$9 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$b() {
  var data = _taggedTemplateLiteral(["\n    box-shadow:inset 0px 0px 0px 1px ", ";\n    color: ", ";\n    svg {\n            fill:", "; \n        }\n    &:hover, &:active {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:hover {\n        background-color:", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n    &:disabled {\n        ", "\n    }\n"]);

  _templateObject6$b = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$d() {
  var data = _taggedTemplateLiteral(["\n    &:hover, &:active {\n        box-shadow:inset 0px 0px 0px 1px ", ";\n    }\n    &:active {\n        background-color: ", ";\n    }\n"]);

  _templateObject5$d = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$e() {
  var data = _taggedTemplateLiteral(["\n    background-color:transparent;\n    color:", ";\n    box-shadow:inset 0px 0px 0px 1px ", ";\n\n    svg {\n        fill:", "; \n    }\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n        border-color:", ";\n    }\n    &:active {\n        color:", ";\n        background-color:", ";\n        box-shadow:none;\n        svg {\n            fill:", "; \n        }\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject4$e = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$h() {
  var data = _taggedTemplateLiteral(["\n\n    padding: .8rem .8rem !important;\n    font-size: 1.6rem !important;\n    span{\n        padding-right: .2rem;\n    }\n    svg{\n        top: 1px;\n    }\n    &[aria-expanded=\"true\"]{\n        svg{\n            top: -1px;\n        }\n    }\n\n"]);

  _templateObject3$h = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.6rem;\n    line-height:2.4rem;\n    font-weight:500;\n    padding:.8rem 0;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    \n    color: ", ";\n    border-radius:3.2rem;\n    width:100%;\n    cursor:pointer;\n    background-color:", ";\n\n    span{\n        padding-right: .8rem;\n    }\n    svg {\n        fill: ", ";\n    }\n\n    ", "{\n        /*width:auto;*/\n        font-size:2.1rem;\n        padding:1.6rem 2.4rem;\n    }\n\n    &:hover {\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:active{\n        background-color:", ";\n        text-decoration:underline;\n    }\n    &:disabled{\n        ", "\n    }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteral([" \n    color: ", ";\n    background-color: ", ";\n    text-decoration:none;\n    box-shadow:none;\n    cursor:inherit;\n    svg {\n        fill:", ";\n    }\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var disabled$2 = core.css(_templateObject$k(), colors.theme3.mid, colors.theme3.midLight, colors.theme3.mid);
var expandButtonStyle = core.css(_templateObject2$i(), colors.common.white, colors.theme1.mid, colors.common.white, medium, colors.theme1.midDark, colors.theme1.xDark, disabled$2);
var smallStyle = core.css(_templateObject3$h());
var secondaryStyle$1 = core.css(_templateObject4$e(), colors.theme1.mid, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.common.white, colors.theme1.xDark, colors.common.white, disabled$2);
var invertedBackgroundStyle$2 = core.css(_templateObject5$d(), colors.common.white, colors.theme1.dark);
var invertedSecondaryBackgroundStyle$1 = core.css(_templateObject6$b(), colors.common.white, colors.common.white, colors.common.white, colors.common.white, colors.theme1.midDark, colors.theme1.dark, disabled$2);
var iconStyle$3 = core.css(_templateObject7$9());
var expandedIconStyle = core.css(_templateObject8$9());

/** @jsx jsx */
var ExpandButton = function ExpandButton(_ref) {
  var text = _ref.text,
      _ref$secondaryButtonS = _ref.secondaryButtonStyle,
      secondaryButtonStyle = _ref$secondaryButtonS === void 0 ? false : _ref$secondaryButtonS,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      className = _ref.className,
      id = _ref.id,
      disabled = _ref.disabled,
      style = _ref.style,
      onClick = _ref.onClick;
  var styles = [expandButtonStyle];
  secondaryButtonStyle && styles.push(secondaryStyle$1);
  small && styles.push(smallStyle); // invertedBackgroundColor && styles.push(invertedBackgroundStyle);
  // (invertedBackgroundColor && secondaryButtonStyle) && styles.push(invertedSecondaryBackgroundStyle);

  style && styles.push(style);
  return core.jsx("button", {
    id: id,
    css: styles,
    className: className,
    disabled: disabled,
    "aria-expanded": expanded ? "true" : "false",
    onClick: onClick
  }, core.jsx("span", null, text), core.jsx(Icon, {
    "aria-hidden": "true",
    icon: "Arrow",
    style: [iconStyle$3, expanded && expandedIconStyle]
  }));
};

function _templateObject8$a() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n    h3 {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject8$a = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$a() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  padding-bottom: 0;\n"]);

  _templateObject7$a = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$c() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: .8rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: ", ";\n"]);

  _templateObject6$c = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$e() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-bottom: ", ";\n  text-decoration: underline;\n  font-weight: 700;\n  display: block;\n  padding-top: .4rem;\n"]);

  _templateObject5$e = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$f() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n  text-decoration: none !important;\n"]);

  _templateObject4$f = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$i() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none !important;\n"]);

  _templateObject3$i = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  padding-bottom: 0.8rem;\n  line-height: 2.4rem;\n  color: ", ";\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  font-weight: 500;\n  p {\n    color: ", ";\n  }\n  p.listItemHeadline {\n      color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    p {\n      text-decoration: none;\n    }\n  }\n  &:active {\n    background-color: ", ";\n    .listItemHeadline {\n      color: ", ";\n    }\n    p {\n      text-decoration: none;\n    }\n  }\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$4 = core.css(_templateObject$l(), colors.theme3.dark, colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.theme3.midLight);
var news = core.css(_templateObject2$j(), colors.theme3.dark);
var disabled$3 = core.css(_templateObject3$i());
var headlineDisabled = core.css(_templateObject4$f(), colors.theme3.midDark);
var headline = core.css(_templateObject5$e(), spacing.m, spacing.xs);
var preambleStyle = core.css(_templateObject6$c(), colors.theme3.dark);
var bottomText = core.css(_templateObject7$a(), colors.theme3.mid);
var invertedLink = core.css(_templateObject8$a(), colors.common.white, colors.common.white, colors.theme1.xDark);

/** @jsx jsx */
var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      headline$1 = _ref.headline,
      preamble = _ref.preamble,
      bottomText$1 = _ref.bottomText,
      type = _ref.type,
      reviewedDate = _ref.reviewedDate,
      href = _ref.href,
      headlineLevel = _ref.headlineLevel,
      headlineStyleLevel = _ref.headlineStyleLevel,
      style = _ref.style,
      invertedLinkStyle = _ref.invertedLinkStyle;
  return core.jsx("a", {
    css: [wrapper$4, invertedLinkStyle && invertedLink, style],
    className: "noStyle",
    href: href
  }, type && core.jsx("p", {
    css: news
  }, type.toUpperCase(), reviewedDate && core.jsx(React__default.Fragment, null, ": ", core.jsx(DateFormat, {
    date: reviewedDate,
    showDate: true
  }))), core.jsx("p", {
    css: headline,
    className: "listItemHeadline"
  }, headline$1), children, preamble && core.jsx("p", {
    css: preambleStyle
  }, preamble), bottomText$1 && core.jsx("p", {
    css: bottomText
  }, bottomText$1));
};

function _templateObject8$b() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n    h3 {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject8$b = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$b() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  padding-bottom: 0;\n"]);

  _templateObject7$b = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$d() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: .8rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: ", ";\n"]);

  _templateObject6$d = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$f() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-bottom: ", ";\n  text-decoration: underline;\n  font-weight: 700;\n  display: block;\n  padding-top: .4rem;\n"]);

  _templateObject5$f = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$g() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n  text-decoration: none !important;\n"]);

  _templateObject4$g = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$j() {
  var data = _taggedTemplateLiteral(["\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none !important;\n"]);

  _templateObject3$j = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.4rem;\n  padding-bottom: 0.8rem;\n  line-height: 2.4rem;\n  color: ", ";\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  font-weight: 500;\n  p {\n    color: ", ";\n  }\n  p.listItemHeadline {\n      color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    p {\n      text-decoration: none;\n    }\n  }\n  &:active {\n    background-color: ", ";\n    .listItemHeadline {\n      color: ", ";\n    }\n    p {\n      text-decoration: none;\n    }\n  }\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var wrapper$5 = core.css(_templateObject$m(), colors.theme3.dark, colors.theme1.mid, colors.theme1.midLight, colors.theme1.midLight, colors.theme1.xDark, colors.theme3.light);
var news$1 = core.css(_templateObject2$k(), colors.theme3.dark);
var disabled$4 = core.css(_templateObject3$j());
var headlineDisabled$1 = core.css(_templateObject4$g(), colors.theme3.midDark);
var headline$1 = core.css(_templateObject5$f(), spacing.m, spacing.xs);
var preambleStyle$1 = core.css(_templateObject6$d(), colors.theme3.dark);
var bottomText$1 = core.css(_templateObject7$b(), colors.theme3.mid);
var invertedLink$1 = core.css(_templateObject8$b(), colors.common.white, colors.common.white, colors.theme1.xDark);

/** @jsx jsx */
var ListItemDisabled = function ListItemDisabled(_ref) {
  var children = _ref.children,
      headline = _ref.headline,
      preamble = _ref.preamble,
      bottomText = _ref.bottomText,
      type = _ref.type,
      reviewedDate = _ref.reviewedDate,
      href = _ref.href,
      headlineLevel = _ref.headlineLevel,
      headlineStyleLevel = _ref.headlineStyleLevel,
      style = _ref.style,
      invertedLinkStyle = _ref.invertedLinkStyle,
      disabled = _ref.disabled;
  return core.jsx("div", {
    css: [wrapper$5, invertedLinkStyle && invertedLink$1, disabled$4, style] // className='noStyle'
    // tabIndex={disabled ? '-1' : null}
    // href={href}

  }, type && core.jsx("p", {
    css: news$1
  }, type.toUpperCase(), reviewedDate && core.jsx(React__default.Fragment, null, ": ", core.jsx(DateFormat, {
    date: reviewedDate,
    showDate: true
  }))), core.jsx("p", {
    css: [headlineDisabled$1, headline$1],
    className: "listItemHeadline"
  }, headline), children, preamble && core.jsx("p", {
    css: preambleStyle$1
  }, preamble), bottomText && core.jsx("p", {
    css: bottomText$1
  }, bottomText));
};

function _templateObject6$e() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 1.8rem;\n  line-height: ", ";\n  ", " {\n    margin-left: ", ";\n  }\n\n"]);

  _templateObject6$e = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$g() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  padding-right: 0;\n  margin-top: ", ";\n  ", " {\n    padding-right: ", ";\n    justify-content: flex-end;\n  }\n"]);

  _templateObject5$g = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$h() {
  var data = _taggedTemplateLiteral(["\n  border: solid ", ";\n  border-width: 0px 8px 3px;\n  border-radius: 8px;\n  margin-top: -1px;\n  background-color:", ";\n  color: ", " !important;\n  :hover {\n    background-color:", " !important;\n  }\n"]);

  _templateObject4$h = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$k() {
  var data = _taggedTemplateLiteral(["\n  color: ", " !important;\n  font-size: ", ";\n  line-height: ", ";\n  margin-right: ", ";\n"]);

  _templateObject3$k = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  line-height: ", ";\n  /* margin-bottom: ", "; */\n  margin-right: ", ";\n  ", " {\n    font-size: ", ";\n    line-height: ", ";\n  }\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: ", ";\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var alphabetWrapper = core.css(_templateObject$n(), spacing.l);
var link = core.css(_templateObject2$l(), spacing.l, spacing.xl, spacing.xs, spacing.s, medium, spacing.m, spacing.l);
var invalidLetter = core.css(_templateObject3$k(), colors.theme3.midDark, spacing.m, spacing.l, spacing.s);
var activeLetter = core.css(_templateObject4$h(), colors.theme1.dark, colors.theme1.dark, colors.common.white, colors.theme1.dark);
var linkShowAllWrapper = core.css(_templateObject5$g(), spacing.s, medium, spacing.l);
var linkShowAll = core.css(_templateObject6$e(), spacing.l, medium, spacing.s);

/** @jsx jsx */
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];

var isVisibleLetter = function isVisibleLetter(visibleLetters, letter) {
  return visibleLetters && Array.isArray(visibleLetters) && visibleLetters.some(function (v) {
    return v === letter;
  });
};

var DisplayAlphabet = function DisplayAlphabet(_ref) {
  var onClickLetter = _ref.onClickLetter,
      onClickShowAll = _ref.onClickShowAll,
      activeLetter$1 = _ref.activeLetter,
      visibleLetters = _ref.visibleLetters;
  return core.jsx("div", null, core.jsx("div", {
    css: alphabetWrapper
  }, alphabet.map(function (letter) {
    return isVisibleLetter(visibleLetters, letter) ? core.jsx("a", {
      key: letter,
      css: [link, letter === activeLetter$1 ? activeLetter : null],
      href: visibleLetters.some(function (v) {
        return v === letter;
      }) ? "?letter=".concat(letter) : "/",
      "data-letter": letter,
      onClick: onClickLetter
    }, letter) : core.jsx("div", {
      css: invalidLetter
    }, letter);
  })), core.jsx("div", {
    css: linkShowAllWrapper
  }, core.jsx("a", {
    css: linkShowAll,
    href: "?letter=alla",
    onClick: onClickShowAll
  }, "Visa Alla A-\xD6")));
};

function _templateObject7$c() {
  var data = _taggedTemplateLiteral(["\n    svg {\n        position: relative;\n        top: 1px;        \n    }\n"]);

  _templateObject7$c = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$f() {
  var data = _taggedTemplateLiteral(["\n    margin-top: ", ";\n    ", " {\n        margin-top: 0;\n        display: inline-block;\n        flex-grow: 1;\n        text-align: right;\n        font-size: 1.8rem;\n    }\n"]);

  _templateObject6$f = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$h() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.6rem;\n    width: 7.2rem;\n    height: 4rem;\n    margin-left: ", ";\n    margin-bottom: ", ";\n    padding: 0 ", ";\n\n    &:first-of-type {\n        margin-left: 0;\n    }\n\n    ", " {\n        font-size: 1.6rem;\n        width: 7.2rem;\n        padding: 0 ", ";\n\n        &:first-of-type {\n            margin-left: ", ";\n        }\n\n        margin-left: ", ";\n        margin-bottom: 0;\n        margin-top: -.4rem;\n    }\n"]);

  _templateObject5$h = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$i() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    display: flex;\n\n    ", " {\n        flex-direction: row;\n    }\n"]);

  _templateObject4$i = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$l() {
  var data = _taggedTemplateLiteral(["\n    p {\n        padding-bottom: 0;\n    }\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: row;\n    }\n"]);

  _templateObject3$l = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteral(["\n    p {\n        padding-bottom: 0;\n    }\n    padding-bottom: ", ";\n    padding-top: ", ";\n    border-bottom: .1rem solid ", ";\n    display: flex;\n    flex-direction: column;\n\n    ", " {\n        flex-direction: row;\n    }\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.15);\n    padding: ", " ", " ", " ", ";\n\n    ", " {\n        padding: ", " ", " ", " ", ";\n    }\n\n    a {\n        font-size: 1.8rem;\n        line-height: ", ";\n        margin-right: ", ";\n    }\n    background-color: ", ";\n\n    ", " {\n        p > a {\n            margin-bottom: 0;\n        }\n    }\n    margin-bottom: ", ";\n    border-radius: ", ";\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var sourceStyle = core.css(_templateObject$o(), spacing.s, spacing.s, spacing.m, spacing.s, medium, spacing.m, spacing.l, spacing.m, spacing.l, spacing.l, spacing.s, colors.theme1.light, medium, spacing.s, spacing.xs);
var firstRow = core.css(_templateObject2$m(), spacing.s, spacing.m, colors.theme3.midLight, medium);
var firstRowUsabilla = core.css(_templateObject3$l(), medium);
var secondRow = core.css(_templateObject4$i(), medium);
var buttonStyle$1 = core.css(_templateObject5$h(), spacing.m, spacing.s, spacing.m, medium, spacing.m, spacing.m, spacing.m);
var rightAlign = core.css(_templateObject6$f(), spacing.xs, medium);
var sourceLink = core.css(_templateObject7$c());

var isExternal = (function (baseUrl, url) {
  var matchInternal = new RegExp("^(\/)|(" + baseUrl + ")", "i");

  if (typeof url == 'undefined' || url == "#") {
    return false;
  } else {
    return !matchInternal.test(url);
  }
});

/** @jsx jsx */
var Source = function Source(_ref) {
  var usabilla = _ref.usabilla,
      baseUrl = _ref.baseUrl,
      sourcesCollection = _ref.sourcesCollection,
      markdownText = _ref.markdownText,
      reviewedDate = _ref.reviewedDate,
      reviewedDateText = _ref.reviewedDateText,
      style = _ref.style,
      english = _ref.english,
      bottomContent = _ref.bottomContent;
  var reviewed = reviewedDate ? new Date(reviewedDate) : null;
  var monthsSv = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
  var monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return core.jsx("div", {
    css: [sourceStyle, style]
  }, usabilla && core.jsx("div", {
    css: usabilla ? firstRowUsabilla : firstRow
  }, usabilla), core.jsx("div", {
    css: secondRow
  }, sourcesCollection && sourcesCollection.items.length > 0 && core.jsx("p", null, english ? 'Source: ' : 'Källa: ', sourcesCollection.items.map(function (item, idx) {
    return core.jsx("a", {
      href: item.linkUrl,
      key: "link-" + idx,
      css: sourceLink,
      className: isExternal(baseUrl, item.linkUrl) ? "external" : null
    }, item.linkText, isExternal(baseUrl, item.linkUrl) && core.jsx(Icon, {
      title: "Extern l\xE4nk",
      className: "external",
      icon: "External"
    }));
  })), markdownText, reviewed && core.jsx("div", {
    css: rightAlign
  }, core.jsx("p", null, "".concat(reviewedDateText || english ? 'Proofread: ' : 'Granskad: ').concat(reviewed.getDate(), " ").concat(english ? monthsEn[reviewed.getMonth()] : monthsSv[reviewed.getMonth()], " ").concat(reviewed.getFullYear())))), bottomContent && core.jsx("div", null, bottomContent));
};

var Polyfill = function Polyfill() {
  return "\n        var pf = [];\n        if(!Object.assign)pf.push(\"Object.assign\");\n        if(!window.Promise)pf.push(\"Promise\");\n        if(!window.fetch)pf.push(\"fetch\");\n        if(!window.IntersectionObserver)pf.push(\"IntersectionObserver\");\n        if(!window.IntersectionObserverEntry)pf.push(\"IntersectionObserverEntry\");\n        if(!window.URL || typeof window.URL !== \"function\")pf.push(\"URL\");\n        if(!Array.prototype.find)pf.push(\"Array.prototype.find\");\n        if(!Array.prototype.includes)pf.push(\"Array.prototype.includes\");\n        if(!Array.prototype.findIndex)pf.push(\"Array.prototype.findIndex\")\n        if(!Array.prototype.entries)pf.push(\"Array.prototype.entries\")\n        if(!window.HTMLPictureElement)pf.push(\"HTMLPictureElement\")\n        if(!String.prototype.endsWith)pf.push(\"String.prototype.endsWith\");\n        if(!String.prototype.startsWith)pf.push(\"String.prototype.startsWith\");\n        if(!Object.values)pf.push(\"Object.values\");\n        if(!Object.entries)pf.push(\"Object.entries\");\n        if(!Element.prototype.matches)pf.push(\"Element.prototype.matches\")\n        if(pf.length > 0) {\n            console.log(\"polyfill(s) found\",pf)\n            var js = document.createElement('script');\n            js.src = \"https://polyfill.io/v3/polyfill.min.js?features=\"+pf.join(\",\");\n            document.head.appendChild(js);\n        }\n    ";
};

function _templateObject$p() {
  var data = _taggedTemplateLiteral(["\n  height: ", "rem;\n  background-repeat: no-repeat;\n  background-image: \n    ", "\n    linear-gradient(", " 100%, transparent 0);\n    background-size:\n      ", "\n      100% 100%;\n    background-position:\n      ", "\n      0 0;\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}

var linearGradient = function linearGradient(rows) {
  return new Array(rows).fill(0).map(function () {
    return "linear-gradient(".concat(colors.theme3.xLight, " 100%, transparent 0),");
  });
};

var randomIntFromInterval = function randomIntFromInterval(min, max) {
  return Math.random() * (max - min + 1) + min;
};

var backgroundSize = function backgroundSize(rows) {
  return new Array(rows).fill(0).map(function () {
    return "".concat(randomIntFromInterval(80, 90), "% ").concat(spacing.m, ",");
  });
};

var backgroundPosition = function backgroundPosition(rows) {
  return new Array(rows).fill(0).map(function (a, i) {
    return "".concat(spacing.xs, " calc(").concat(spacing.xs, " * ").concat(i * 6, "),");
  });
};

var wrapper$6 = function wrapper(rows, height) {
  return core.css(_templateObject$p(), height, linearGradient(rows), colors.common.white, backgroundSize(rows), backgroundPosition(rows));
};

/** @jsx jsx */
var Skeleton = function Skeleton(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 8 : _ref$rows,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 48 : _ref$height;
  return core.jsx("div", {
    css: wrapper$6(rows, height)
  });
};

function _templateObject7$d() {
  var data = _taggedTemplateLiteral(["\n\n    background-color:", ";\n    color: #fff!important;\n\n    &:hover{\n        color: ", "!important;\n    }\n\n\n"]);

  _templateObject7$d = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$g() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.6rem;\n    color: ", ";\n    font-weight: 500;\n    ", "{\n        font-size: 2.1rem;\n    }\n\n"]);

  _templateObject6$g = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$i() {
  var data = _taggedTemplateLiteral(["\n    visibility: hidden;\n"]);

  _templateObject5$i = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$j() {
  var data = _taggedTemplateLiteral(["\n    margin-left: auto;\n    font-size: 1.8rem;\n    position: absolute;\n    right: 0px;\n    bottom: -0rem;\n\n    ", "{\n        position: static;\n    }\n    &:visited{\n        color: ", "!important;\n    }\n\n"]);

  _templateObject4$j = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$m() {
  var data = _taggedTemplateLiteral(["\n    margin-right: auto;\n    font-size: 1.8rem;\n    position: absolute;\n    left: 0px;\n    bottom: -0rem;\n\n    ", "{\n        position: static;\n    }\n    &:visited{\n        color: ", "!important;\n    }\n"]);

  _templateObject3$m = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$n() {
  var data = _taggedTemplateLiteral(["\n    height: 4.0rem;\n    width: 4.2rem;\n\n    line-height: 4.0rem;\n    border: 1px solid ", ";\n    border-radius: 8px;\n    display: inline-block;\n    font-size: 2.1rem;\n    text-align:center;\n    text-decoration: none !important;\n    margin: 0 0.8rem;\n\n    &.last{\n        margin-right: 0;\n    }\n\n    &.first{\n        margin-left: 0;\n    }\n\n    ", "{\n        margin: 0 1.2rem;\n        height: 5.6rem;\n        line-height: 5.6rem;\n        width: 6.0rem;\n    }\n\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$q() {
  var data = _taggedTemplateLiteral(["\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    ", "{\n        justify-content: space-between;\n        padding-bottom: 4.8rem;\n    }\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var paginationWrapperStyle = core.css(_templateObject$q(), large);
var pageStyle = core.css(_templateObject2$n(), colors.theme1.mid, medium);
var prevPageStyle = core.css(_templateObject3$m(), medium, colors.theme1.mid);
var nextPageStyle = core.css(_templateObject4$j(), medium, colors.theme1.mid);
var prevPageStyleHidden = core.css(_templateObject5$i());
var distanceIndicatorStyle = core.css(_templateObject6$g(), colors.theme1.mid, medium);
var currentPageStyle = core.css(_templateObject7$d(), colors.theme1.dark, colors.theme1.mid);

var Pagination = function Pagination(_ref) {
  var pageSize = _ref.pageSize,
      total = _ref.total,
      currentPage = _ref.currentPage,
      baseUrl = _ref.baseUrl,
      _onClick = _ref.onClick,
      style = _ref.style,
      seoCallback = _ref.seoCallback;
  if (total == 0) return null;

  if (!_onClick) {
    _onClick = function onClick() {};
  }

  var totalNumberOfPages = Math.ceil(total / pageSize);
  var links = Object.keys(_toConsumableArray(new Array(totalNumberOfPages))).map(function (val) {
    return parseInt(val) + 1;
  });
  var searchRadius = currentPage == totalNumberOfPages || currentPage == 1 ? 2 : 1;

  var createHref = function createHref(pageNumber) {
    var url = new URL(baseUrl, "http://f.a");
    url.searchParams.set("page", pageNumber);
    return url.pathname + url.search;
  }; //filter pages that are close to the current page


  var shouldBeDisplayed = function shouldBeDisplayed(page) {
    if (page == currentPage) return true;
    if (page > currentPage && currentPage + searchRadius >= page) return true;
    if (page < currentPage && currentPage - searchRadius <= page) return true;
    return false;
  };

  var filteredLink = links.filter(function (x) {
    return shouldBeDisplayed(x);
  });

  var firstLink = function firstLink() {
    if (filteredLink.some(function (x) {
      return x === 1;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === 2;
    }) ? null : core.jsx("span", {
      css: distanceIndicatorStyle
    }, "...");
    return core.jsx(React__default.Fragment, null, core.jsx("a", {
      className: "first",
      href: createHref(1),
      onClick: function onClick(e) {
        return _onClick(e, 1);
      },
      css: [pageStyle]
    }, "1"), distanceEl);
  };

  var lastLink = function lastLink() {
    var max = Math.max.apply(Math, _toConsumableArray(links));
    if (filteredLink.some(function (x) {
      return x == max;
    })) return null;
    var distanceEl = filteredLink.some(function (x) {
      return x === max - 1;
    }) ? null : core.jsx("span", {
      css: distanceIndicatorStyle
    }, "...");
    return core.jsx(React__default.Fragment, null, distanceEl, core.jsx("a", {
      className: "last",
      href: createHref(max),
      onClick: function onClick(e) {
        return _onClick(e, max);
      },
      css: pageStyle
    }, max));
  };

  var isFirstPage = currentPage == 1;
  var lastPage = Math.max.apply(Math, _toConsumableArray(links));
  var isLastPage = lastPage == currentPage;
  var prevPage = isFirstPage ? null : createHref(currentPage - 1);
  var nextPage = isLastPage ? null : createHref(currentPage + 1);
  var SeoCallbackResult = seoCallback ? seoCallback(prevPage, nextPage) : null;

  var getClass = function getClass(pageNumber) {
    if (lastPage === pageNumber) return "last";
    if (pageNumber === 1) return "first";
    return null;
  };

  return core.jsx("nav", {
    "aria-label": "pagination",
    css: [paginationWrapperStyle, style]
  }, isFirstPage ? core.jsx("span", {
    css: [prevPageStyle, prevPageStyleHidden]
  }, "F\xF6reg\xE5ende sida") : core.jsx("a", {
    href: createHref(currentPage - 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage - 1);
    },
    css: prevPageStyle
  }, "F\xF6reg\xE5ende sida"), firstLink(), filteredLink.map(function (pageNumber) {
    var isCurrent = pageNumber == currentPage;
    return core.jsx("a", {
      href: createHref(pageNumber),
      className: getClass(pageNumber),
      onClick: function onClick(e) {
        return _onClick(e, pageNumber);
      },
      "aria-current": isCurrent ? "page" : null,
      key: "pagination".concat(pageNumber),
      css: [pageStyle, isCurrent ? currentPageStyle : null]
    }, pageNumber);
  }), lastLink(), isLastPage ? core.jsx("span", {
    css: [nextPageStyle, prevPageStyleHidden]
  }, "N\xE4sta sida") : core.jsx("a", {
    href: createHref(currentPage + 1),
    onClick: function onClick(e) {
      return _onClick(e, currentPage + 1);
    },
    css: nextPageStyle
  }, "N\xE4sta sida"), SeoCallbackResult);
};

function _templateObject8$c() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ", ";\n  }\n  &:hover {\n    text-decoration: underline !important;\n  }\n"]);

  _templateObject8$c = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$e() {
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  position: relative;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 0.8rem 4rem 0.8rem 1.6rem;\n  border: solid 1px ", ";\n  color: ", ";\n  border-radius: 3.2rem;\n  transition: visibility 0.1s, opacity 0.1s ease-in-out;\n  font-weight: 700;\n  margin-bottom: 1.6rem;\n  margin-left:auto;\n  align-self: center;\n\n  cursor: pointer;\n\n  .expanded > & {\n    visibility: visible;\n    display:block;\n    opacity: 1;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    text-decoration: underline;\n    color: #fff;\n    background-color: ", ";\n    border-color: ", ";\n    svg {\n      fill: #fff;\n    }\n  }\n\n  > svg {\n    transform: rotate(180deg);\n    height: 1.6rem;\n    fill: ", ";\n    height: 1.6rem;\n    position: absolute;\n    width: 1.6rem;\n    top: 1.2rem;\n    right: 1.6rem;\n  }\n"]);

  _templateObject7$e = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$h() {
  var data = _taggedTemplateLiteral(["\n    margin-left:auto!important;\n"]);

  _templateObject6$h = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$j() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(180deg);\n"]);

  _templateObject5$j = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$k() {
  var data = _taggedTemplateLiteral(["\n    transition: transform .2s ease-out;\n    width: ", ";\n    height: ", ";\n    margin-left: .5rem;\n    display:flex;\n    ", " {\n        margin-left: 1rem;\n    }\n"]);

  _templateObject4$k = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$n() {
  var data = _taggedTemplateLiteral(["\n\n  &.full-width > .link-element a {\n    display: block;\n  }\n\n  > .link-element a {\n\n    .link-element-container {\n\n        h1, h2, h3, h4 {\n            white-space: pre-line;\n            margin-bottom: 0;\n        }\n\n        display: flex;\n        align-items: center;\n\n    }\n\n    font-weight: 600;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    position: relative;\n    ", " {\n      width: 100%;\n    }\n\n    svg {\n      font-size: inherit;\n      vertical-align: middle;\n      fill: ", ";\n      flex-shrink: 0;\n    }\n  }\n\n  .expand-section {\n    max-height: 0;\n    overflow: hidden;\n    height: auto;\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    flex-direction: column;\n\n    &.expanded {\n      max-height: 100%;\n      overflow: visible;\n      -ms-overflow-style: none;\n      overflow: -moz-scrollbars-none;\n      &::-webkit-scrollbar{\n        display:none;\n      }\n    }\n    &:not(.expanded) {\n      visibility: hidden;\n      display: none;\n\n    }\n  }\n"]);

  _templateObject3$n = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$o() {
  var data = _taggedTemplateLiteral(["\n\n  > .expanded > .link-element {\n    background-color: ", ";\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    &:hover {\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  > div > .link-element {\n    border-radius: ", ";\n    background-color: ", ";\n    margin-bottom: 0rem!important;\n    border: 2px solid transparent;\n    &:hover {\n      border: .2rem solid ", ";\n      border-radius: ", ";\n      background-color: ", ";\n    }\n    a{\n        margin: 0 1px 1px 1px;\n        padding: ", " ", ";\n        ", " {\n          padding: ", " ", ";\n        }\n        box-sizing: border-box;\n        &:hover {\n            text-decoration: underline;\n            cursor: pointer;\n        }\n        &[aria-expanded=\"true\"] {\n            h2,h3,h4{\n                text-decoration: underline!important;\n            }\n        }\n    }\n  }\n  > div > .expand-section {\n      background-color: ", ";\n      border: 2px solid transparent;\n      padding: ", " ", " ", " ", ";\n      ", " {\n        padding: ", " ", " ", " ", ";\n      }\n      position: fixed;\n  }\n  > div > .expand-section.expanded {\n    border: 2px solid ", ";\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n    border-top: none;\n    position: relative;\n    > div {\n      margin-top: 0;\n    }\n  }\n\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$r() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.5rem;\n\n    :focus-within {\n      .tabnav &{\n          outline: .2rem solid ", ";\n          outline-offset: .2rem;\n      }\n    }\n\n    > .withContentExpander {\n      .full-width {\n          border: 2px solid transparent;\n          &.expanded,:hover{\n              border: .2rem solid ", ";\n          }\n      }\n\n      > .link-element { \n          margin-bottom: 0rem!important;\n          a{\n              padding: 2.4rem;\n              box-sizing: border-box;\n              &:hover {\n                  text-decoration: underline;\n                  background-color: inherit;\n                  cursor: pointer;\n              }\n              &[aria-expanded=\"true\"] {\n                  h2,h3,h4{\n                      text-decoration: underline!important;\n                  }\n              }\n          }\n      }\n      > .expand-section{\n          padding: 0 2.4rem;\n      }\n    }\n\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var grayContentExpanderWrapper = core.css(_templateObject$r(), colors.theme3.xLight, colors.states.focus, colors.theme1.mid);
var grayFocusedOnExpansionWrapper = core.css(_templateObject2$o(), colors.theme3.light, spacing.xs, colors.theme3.xLight, colors.theme1.mid, spacing.xs, colors.theme1.light, spacing.s, spacing.xs, medium, spacing.s, spacing.m, colors.common.white, spacing.s, spacing.xs, spacing.m, spacing.xs, medium, spacing.s, spacing.m, spacing.m, spacing.m, colors.theme3.light, spacing.xs, spacing.xs);
var ComponentWrapperStyle = core.css(_templateObject3$n(), small, colors.theme1.mid);
var IconStyle = function IconStyle(fontSize) {
  return core.css(_templateObject4$k(), fontSize, fontSize, medium);
};
var IconExpandedStyle = core.css(_templateObject5$j());
var IconFullWidth = core.css(_templateObject6$h());
var collapseButtonStyle = core.css(_templateObject7$e(), spacing.xs, colors.theme1.mid, colors.theme1.mid, colors.theme1.midLight, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.xDark, colors.theme1.mid);
var baseLinkStyle = core.css(_templateObject8$c(), colors.theme1.mid, colors.theme1.mid);

var measureElement = function measureElement(element) {
  var DOMNode = ReactDOM.findDOMNode(element);
  return DOMNode && DOMNode.childNodes[0] && window.getComputedStyle(DOMNode.querySelectorAll("h1, h2, h3, h4, h5, h6")[0] || DOMNode.childNodes[0], null).getPropertyValue("line-height");
};

var WithContentExpander = function WithContentExpander(_ref) {
  var wrappedComponent = _ref.wrappedComponent,
      linkElement = _ref.linkElement,
      linkStyle = _ref.linkStyle,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? true : _ref$isFullWidth,
      _ref$hasCollapseButto = _ref.hasCollapseButton,
      hasCollapseButton = _ref$hasCollapseButto === void 0 ? false : _ref$hasCollapseButto,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$scrollIntoView = _ref.scrollIntoView,
      scrollIntoView = _ref$scrollIntoView === void 0 ? false : _ref$scrollIntoView,
      wrapperStyle = _ref.wrapperStyle,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      wrapperId = _ref.wrapperId,
      _ref$linkHref = _ref.linkHref,
      linkHref = _ref$linkHref === void 0 ? "" : _ref$linkHref;

  var _useState = React.useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = React.useState("16px"),
      _useState4 = _slicedToArray(_useState3, 2),
      linkElementFontSize = _useState4[0],
      setLinkElementFontSize = _useState4[1];

  var linkContainerRef = React.useRef();
  var linkRef = React.useRef();
  var topOfComponent = React.useRef();

  var doExpansion = function doExpansion(e) {
    setExpanded(!expanded);

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    return false;
  };

  React.useEffect(function () {
    setExpanded(open);
  }, [open]);
  React.useEffect(function () {
    setLinkElementFontSize(measureElement(linkContainerRef.current));
  }, []);
  React.useLayoutEffect(function () {
    if (scrollIntoView && topOfComponent.current && expanded) {
      var DOMNode = ReactDOM.findDOMNode(topOfComponent.current);
      DOMNode.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [expanded]);
  if (!show) return null;
  return core.jsx("div", {
    className: "withContentExpander ".concat(isFullWidth ? "full-width" : null, " ").concat(expanded ? "expanded" : null),
    id: wrapperId,
    css: [ComponentWrapperStyle, wrapperStyle],
    ref: topOfComponent
  }, core.jsx("div", {
    className: "link-element",
    onClick: function onClick(e) {
      return doExpansion(e);
    }
  }, core.jsx("a", {
    href: linkHref,
    ref: linkRef,
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    "aria-haspopup": "true",
    "aria-expanded": expanded ? "true" : "false",
    "aria-label": linkElement.props.children || "",
    className: "noStyle",
    css: [baseLinkStyle, linkStyle]
  }, core.jsx("div", {
    className: "link-element-container",
    ref: linkContainerRef
  }, linkElement, core.jsx(Icon, {
    "aria-hidden": "true",
    className: "expand-icon",
    icon: "Arrow",
    style: [IconStyle(linkElementFontSize), expanded ? IconExpandedStyle : null, isFullWidth ? IconFullWidth : null]
  })))), core.jsx("div", {
    className: "expand-section ".concat(expanded && "expanded")
  }, wrappedComponent, hasCollapseButton && core.jsx("div", {
    tabIndex: "0",
    onClick: function onClick(e) {
      var DOMNode = ReactDOM.findDOMNode(linkRef.current);
      DOMNode.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      doExpansion(e);
      DOMNode.focus({
        preventScroll: true
      });
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        var DOMNode = ReactDOM.findDOMNode(linkRef.current);
        DOMNode.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        doExpansion(e);
        DOMNode.focus({
          preventScroll: true
        });
      }
    },
    css: collapseButtonStyle
  }, "F\xE4ll ihop", core.jsx(Icon, {
    icon: "Arrow"
  }))));
};

exports.Button = Button;
exports.CampaignFocusPuff = CampaignFocusPuff;
exports.DateFormat = DateFormat;
exports.DisplayAlphabet = DisplayAlphabet;
exports.Dropdown = Dropdown;
exports.EditorIcon = EditorIcon;
exports.ElementLinkColorStyle = ElementLinkColorStyle;
exports.ElementLinkInvertedColorStyle = ElementLinkInvertedColorStyle;
exports.ExpandButton = ExpandButton;
exports.FactBox = FactBox;
exports.FocusPuff = FocusPuff;
exports.FormCheckbox = FormCheckbox;
exports.FormRadiobutton = FormRadiobutton;
exports.FormSearchField = FormSearchField;
exports.FormWrapper = FormWrapper;
exports.Formats = Formats;
exports.GlobalStyles = GlobalStyles;
exports.Heading = Heading;
exports.Icon = Icon;
exports.IconCard = IconCard;
exports.InputRadio = InputRadio;
exports.InputText = InputText;
exports.LinkCard = LinkCard;
exports.LinkTextCard = LinkTextCard;
exports.LinkWrapperColorStyle = LinkWrapperColorStyle;
exports.LinkWrapperInvertedColorStyle = LinkWrapperInvertedColorStyle;
exports.ListItem = ListItem;
exports.ListItemDisabled = ListItemDisabled;
exports.Pagination = Pagination;
exports.Polyfill = Polyfill;
exports.PrerequisitesBox = PrerequisitesBox;
exports.Skeleton = Skeleton;
exports.Source = Source;
exports.SubHeading = SubHeading;
exports.Tag = Tag;
exports.TagBlock = TagBlock;
exports.TextArea = TextArea;
exports.ValidationResponse = ValidationResponse;
exports.WithContentExpander = WithContentExpander;
exports.checkPath = checkPath;
exports.colors = colors;
exports.grayContentExpanderWrapper = grayContentExpanderWrapper;
exports.grayFocusedOnExpansionWrapper = grayFocusedOnExpansionWrapper;
exports.spacing = spacing;
exports.warnPath = warnPath;
//# sourceMappingURL=main.js.map
