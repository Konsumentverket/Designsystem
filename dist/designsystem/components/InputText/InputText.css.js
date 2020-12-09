"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.LoadingStyle = exports.ClearInput = exports.InputWrapperStyle = exports.invalidStyle = exports.InputStyle = void 0;

var _css = _interopRequireDefault(require("@emotion/css"));

var _Colors = require("../Colors/Colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n\n  color: #4D4D4D;\n\n\n  font-size: 1.8rem;\n\n\n  line-height: 3.2rem;\n\n\n  margin-bottom: .8rem;\n\n\n  display: block;\n\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n\n\n\n\n    position: absolute;\n\n\n    right: 2.4rem;\n\n\n    bottom: 2.2rem;\n\n\n\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([" \n\n\n    appearance: none;\n\n\n    position: absolute;\n\n\n    right: 1.6rem;\n\n\n    border: 0px;\n\n\n    background-color: transparent;\n\n\n    bottom: 1.4rem;\n\n\n    width: 2.8rem;\n\n\n    height: 2.8rem;\n\n\n    padding: 0;\n\n\n    svg{\n\n\n        fill: ", ";\n\n\n        width: 2.8rem;\n\n\n        height: 2.8rem;\n\n\n    }\n\n\n    &:focus{\n\n\n        outline: none;\n\n\n    }\n\n\n    \n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n\n    position: relative;\n\n\n\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n\n    input {\n\n\n        border-color: #F00;\n\n\n    }\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n    width: 100%;\n\n\n    padding: 1.2rem ", " 1.2rem 1.6rem;\n\n\n    border: 2px solid ", ";\n\n\n    border-radius: 0.8rem;\n\n\n    font-size: 1.8rem;\n\n\n    line-height: 3rem;\n\n\n    height: 5.4rem;\n\n\n    box-sizing: border-box;\n\n\n    -webkit-appearance: none;\n\n\n\n\n\n    &:focus{\n\n\n        outline: none;\n\n\n        border-color: ", "\n\n\n    }\n\n\n\n\n\n    &::placeholder {\n\n\n        font-style: italic;\n\n\n    }\n\n\n    &::-ms-clear{\n\n\n        display:none;\n\n\n        width: 0;\n\n\n        height: 0; \n\n\n    }\n\n\n    &::-webkit-search-cancel-button{\n\n\n        appearance: none;   \n\n\n    }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputStyle = function InputStyle(hasInnerContent) {
  return (0, _css["default"])(_templateObject(), hasInnerContent ? '4.5rem' : '1.6rem', _Colors.colors.theme3.midLight, _Colors.colors.theme1.mid);
};

exports.InputStyle = InputStyle;
var invalidStyle = (0, _css["default"])(_templateObject2());
exports.invalidStyle = invalidStyle;
var InputWrapperStyle = (0, _css["default"])(_templateObject3());
exports.InputWrapperStyle = InputWrapperStyle;
var ClearInput = (0, _css["default"])(_templateObject4(), _Colors.colors.theme1.mid);
exports.ClearInput = ClearInput;
var LoadingStyle = (0, _css["default"])(_templateObject5());
exports.LoadingStyle = LoadingStyle;
var Label = (0, _css["default"])(_templateObject6());
exports.Label = Label;

//# sourceMappingURL=InputText.css.js.map