"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceLink = exports.rightAlign = exports.buttonStyle = exports.secondRow = exports.firstRowUsabilla = exports.firstRow = exports.sourceStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

var _Spacing = require("../Spacing/Spacing");

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    svg {\n\n\n\n\n\n\n\n        position: relative;\n\n\n\n\n\n\n\n        top: 1px;        \n\n\n\n\n\n\n\n        left: 8px;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    margin-top: ", ";\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        margin-top: 0;\n\n\n\n\n\n\n\n        display: inline-block;\n\n\n\n\n\n\n\n        flex-grow: 1;\n\n\n\n\n\n\n\n        text-align: right;\n\n\n\n\n\n\n\n        font-size: 1.8rem;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    font-size: 1.6rem;\n\n\n\n\n\n\n\n    width: 7.2rem;\n\n\n\n\n\n\n\n    height: 4rem;\n\n\n\n\n\n\n\n    margin-left: ", ";\n\n\n\n\n\n\n\n    margin-bottom: ", ";\n\n\n\n\n\n\n\n    padding: 0 ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    &:first-of-type {\n\n\n\n\n\n\n\n        margin-left: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        font-size: 1.6rem;\n\n\n\n\n\n\n\n        width: 7.2rem;\n\n\n\n\n\n\n\n        padding: 0 ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        &:first-of-type {\n\n\n\n\n\n\n\n            margin-left: ", ";\n\n\n\n\n\n\n\n        }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        margin-left: ", ";\n\n\n\n\n\n\n\n        margin-bottom: 0;\n\n\n\n\n\n\n\n        margin-top: -.4rem;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    p {\n\n\n\n\n\n\n\n        padding-bottom: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    p {\n\n\n\n\n\n\n\n        padding-bottom: 0;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    padding-bottom: ", ";\n\n\n\n\n\n\n\n    padding-top: ", ";\n\n\n\n\n\n\n\n    border-bottom: .1rem solid ", ";\n\n\n\n\n\n\n\n    display: flex;\n\n\n\n\n\n\n\n    flex-direction: column;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        flex-direction: row;\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n\n\n    box-shadow: 0 1px 3px 0px rgba(0,0,0,0.06);\n\n\n\n\n\n\n\n    padding: ", " ", " ", " ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        padding: ", " ", " ", " ", ";\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    a {\n\n\n\n\n\n\n\n        font-size: 1.8rem;\n\n\n\n\n\n\n\n        line-height: ", ";\n\n\n\n\n\n\n\n        margin-right: ", ";\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    background-color: ", ";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    ", " {\n\n\n\n\n\n\n\n        p > a {\n\n\n\n\n\n\n\n            margin-bottom: 0;\n\n\n\n\n\n\n\n        }\n\n\n\n\n\n\n\n    }\n\n\n\n\n\n\n\n    margin-bottom: ", ";\n\n\n\n\n\n\n\n    border-radius: ", ";\n\n\n\n\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sourceStyle = (0, _core.css)(_templateObject(), _Spacing.spacing.s, _Spacing.spacing.s, _Spacing.spacing.m, _Spacing.spacing.s, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.l, _Spacing.spacing.m, _Spacing.spacing.l, _Spacing.spacing.l, _Spacing.spacing.s, _Colors.colors.theme1.light, _globalStyles.medium, _Spacing.spacing.s, _Spacing.spacing.xs);
exports.sourceStyle = sourceStyle;
var firstRow = (0, _core.css)(_templateObject2(), _Spacing.spacing.s, _Spacing.spacing.m, _Colors.colors.theme3.midLight, _globalStyles.medium);
exports.firstRow = firstRow;
var firstRowUsabilla = (0, _core.css)(_templateObject3(), _globalStyles.medium);
exports.firstRowUsabilla = firstRowUsabilla;
var secondRow = (0, _core.css)(_templateObject4(), _globalStyles.medium);
exports.secondRow = secondRow;
var buttonStyle = (0, _core.css)(_templateObject5(), _Spacing.spacing.m, _Spacing.spacing.s, _Spacing.spacing.m, _globalStyles.medium, _Spacing.spacing.m, _Spacing.spacing.m, _Spacing.spacing.m);
exports.buttonStyle = buttonStyle;
var rightAlign = (0, _core.css)(_templateObject6(), _Spacing.spacing.xs, _globalStyles.medium);
exports.rightAlign = rightAlign;
var sourceLink = (0, _core.css)(_templateObject7());
exports.sourceLink = sourceLink;

//# sourceMappingURL=Source.css.js.map