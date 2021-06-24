"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidStyle = exports.Label = exports.TextAreaWrapperStyle = exports.TextAreaStyle = void 0;

var _css = _interopRequireDefault(require("@emotion/css"));

var _Colors = require("../Colors/Colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    textarea {\n        border-color: #F00;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #4D4D4D;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  margin-bottom: .8rem;\n  display: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 1.2rem 1.6rem;\n    box-sizing: border-box;\n    border: 2px solid #d0d0d0;\n    font-family: Arial;\n    border-radius: 0.8rem;\n    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */\n    font-size: 1.8rem;\n    line-height: 3rem;\n    -webkit-appearance: textfield; /* safari fix */\n    margin-bottom: 2.4rem;\n    max-width: 100%;\n    min-width: 100%;\n\n    &:focus{\n        outline: none;\n        border-color: ", "\n    }\n\n    &::-webkit-search-cancel-button{\n        appearance: none;\n    }\n    &::placeholder, &::-webkit-input-placeholder {\n        font-style:italic;\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextAreaStyle = (0, _css["default"])(_templateObject(), _Colors.colors.theme1.mid, _Colors.colors.theme3.mid);
exports.TextAreaStyle = TextAreaStyle;
var TextAreaWrapperStyle = (0, _css["default"])(_templateObject2());
exports.TextAreaWrapperStyle = TextAreaWrapperStyle;
var Label = (0, _css["default"])(_templateObject3());
exports.Label = Label;
var invalidStyle = (0, _css["default"])(_templateObject4());
exports.invalidStyle = invalidStyle;

//# sourceMappingURL=TextArea.css.js.map