"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = exports.exclamationMarkImage = exports.wrapper = void 0;

var _core = require("@emotion/core");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Colors = require("../Colors/Colors");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -2rem;\n  left: 50%;\n  width:4rem;\n  height:4rem;\n  transform: translate(-50%, 0);\n  ", " {\n    left: 1.2rem;\n    top:-.8rem; \n  }\n\n  [dir=\"rtl\"] &{\n    ", " {\n      left: auto;\n      right: -3.2rem; \n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0.7rem;\n  padding: 4rem 1.6rem 2.4rem 1.6rem;\n  margin-top: 2rem;\n  ", " {\n    padding: 2.4rem 3.2rem 2.4rem 3.2rem;\n    margin-top: .8rem;\n    margin-left: .8rem;\n  }\n  [dir=\"rtl\"] &{\n    ", " {\n      margin-left: .0rem;\n      margin-right: .8rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = (0, _core.css)(_templateObject(), _Colors.colors.theme1.light, _globalStyles.medium, _globalStyles.medium);
exports.wrapper = wrapper;
var exclamationMarkImage = (0, _core.css)(_templateObject2(), _globalStyles.medium, _globalStyles.medium);
exports.exclamationMarkImage = exclamationMarkImage;
var heading = (0, _core.css)(_templateObject3());
exports.heading = heading;

//# sourceMappingURL=PrerequisitesBox.css.js.map