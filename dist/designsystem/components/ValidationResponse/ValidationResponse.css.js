"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapper = void 0;

var _css = _interopRequireDefault(require("@emotion/css"));

var _Colors = require("../Colors/Colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 1.4rem;\n  svg {\n    align-content: center;\n    flex-shrink: 0;\n    margin-right: 0.4rem;\n    fill: ", ";\n  }\n  p {\n    line-height: 2.4rem;\n    padding-bottom: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = function wrapper(success) {
  return (0, _css["default"])(_templateObject(), success ? _Colors.colors.common.success : _Colors.colors.common.warning, success ? _Colors.colors.common.success : _Colors.colors.common.warning);
};

exports.wrapper = wrapper;

//# sourceMappingURL=ValidationResponse.css.js.map