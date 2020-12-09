"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelStyle = exports.clearInputStyle = exports.invertedBackgroundStyle = exports.searchFieldButtonStyle = exports.searchFieldInputStyle = exports.searchFieldInputWrapperStyles = exports.searchWrapperStyle = void 0;

var _core = require("@emotion/core");

var _Colors = require("../Colors/Colors");

var _globalStyles = require("../GlobalStyles/globalStyles");

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\n\n    font-size: 1.8rem;\n\n\n    line-height: 3.2rem;\n\n\n    margin-bottom: 0.8rem;\n\n\n    display: block;\n\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n    appearance: none;\n\n\n    position: absolute;\n\n\n    right: 0px;\n\n\n    border: 0px;\n\n\n    background-color: transparent;\n\n\n    top: 0.5rem;\n\n\n    width: 2.8rem;\n\n\n    height: 2.8rem;\n\n\n    padding: 0;\n\n\n    svg{\n\n\n        fill: ", ";\n\n\n        width: 2.8rem;\n\n\n        height: 2.8rem;\n\n\n    }\n\n\n    &:focus{\n\n\n        outline: none;\n\n\n    }\n\n\n\n\n\n    ", " {\n\n\n        top: 1.4rem;\n\n\n        right: 1.6rem;\n\n\n    }\n\n\n\n\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n\n    box-shadow:none;\n\n\n    &:hover, &:active {\n\n\n        box-shadow:none;\n\n\n    }\n\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n\n    white-space: nowrap;\n\n\n    width:auto;\n\n\n    align-items: center;\n\n\n    border-radius: 0 .8rem .8rem 0;\n\n\n    margin-right:-.8rem;\n\n\n    padding: .8rem;\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n\n    -webkit-appearance: none;\n\n\n    background-color: ", ";\n\n\n    box-shadow:inset 0px 0px 0px 2px ", ";\n\n\n    border-radius: .8rem 0 0 .8rem;\n\n\n    border:none;\n\n\n    font-size:1.6rem;\n\n\n    line-height:2.4rem;\n\n\n    display:flex;\n\n\n    flex-grow:1;\n\n\n    padding: .8rem 4.5rem .8rem .8rem;\n\n\n    color: ", ";\n\n\n    font-style: normal;\n\n\n    font-weight: 500;\n\n\n    box-sizing: border-box;\n\n\n    width: 100%; \n\n\n\n\n\n    &::-webkit-search-cancel-button{\n\n\n        appearance: none;\n\n\n    }\n\n\n\n\n\n    ", "{\n\n\n        font-size:1.8rem;\n\n\n        line-height:3.2rem;\n\n\n        padding: 1.2rem 6.4rem 1.2rem 1.6rem;\n\n\n    }\n\n\n\n\n\n    &:hover {\n\n\n        box-shadow:inset 0px 0px 0px 2px ", ";\n\n\n    }\n\n\n    &:active {\n\n\n        box-shadow:inset 0px 0px 0px 2px ", ";\n\n\n    }\n\n\n    &::placeholder {\n\n\n        font-style:italic;\n\n\n        color: ", ";\n\n\n    }\n\n\n    &:disabled{\n\n\n        ", "\n\n\n    }\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n\n    display:flex;\n\n\n    flex-grow:1;\n\n\n    position: relative;\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n\n    position:relative;\n\n\n    display:flex;\n\n\n    flex-direction: row;\n\n\n    align-items: stretch;\n\n\n    background-color: ", ";\n\n\n    margin-right:.8rem;\n\n\n    border-radius:.8rem;\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n\n\n        background-color: ", ";\n\n\n        text-decoration:none;\n\n\n        box-shadow:inset 0px 0px 0px 1px ", ";\n\n\n        cursor:inherit;\n\n\n        &::placeholder {\n\n\n            color: ", ";\n\n\n        }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var disabled = (0, _core.css)(_templateObject(), _Colors.colors.theme3.xLight, _Colors.colors.theme3.midLight, _Colors.colors.theme3.midLight);
var searchWrapperStyle = (0, _core.css)(_templateObject2(), _Colors.colors.common.white);
exports.searchWrapperStyle = searchWrapperStyle;
var searchFieldInputWrapperStyles = (0, _core.css)(_templateObject3());
exports.searchFieldInputWrapperStyles = searchFieldInputWrapperStyles;
var searchFieldInputStyle = (0, _core.css)(_templateObject4(), _Colors.colors.common.white, _Colors.colors.theme3.midLight, _Colors.colors.theme1.xDark, _globalStyles.medium, _Colors.colors.theme1.mid, _Colors.colors.theme1.xDark, _Colors.colors.theme3.midDark, disabled);
exports.searchFieldInputStyle = searchFieldInputStyle;
var searchFieldButtonStyle = (0, _core.css)(_templateObject5());
exports.searchFieldButtonStyle = searchFieldButtonStyle;
var invertedBackgroundStyle = (0, _core.css)(_templateObject6());
exports.invertedBackgroundStyle = invertedBackgroundStyle;
var clearInputStyle = (0, _core.css)(_templateObject7(), _Colors.colors.theme1.mid, _globalStyles.medium);
exports.clearInputStyle = clearInputStyle;
var labelStyle = (0, _core.css)(_templateObject8());
exports.labelStyle = labelStyle;

//# sourceMappingURL=FormSearchField.css.js.map