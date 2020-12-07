"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusPuff = void 0;

var _core = require("@emotion/core");

var _FocusPuff = require("./FocusPuff.css");

var _react = _interopRequireDefault(require("react"));

var _External = _interopRequireDefault(require("../Icons/SystemIcons/External/External"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    if (image != null) imageArea = (0, _core.jsx)("img", {
      src: image,
      alt: imageAlt
    });else {
      imageArea = (0, _core.jsx)("div", {
        className: 'iconBackground',
        css: _FocusPuff.iconBackground
      }, icon && _react["default"].cloneElement(icon, {
        style: _FocusPuff.puffIcon
      }));
    }
  }

  var puffMarkup = function puffMarkup() {
    return (0, _core.jsx)("div", {
      css: _FocusPuff.focusWrapper,
      className: 'focusWrapper'
    }, (0, _core.jsx)("div", {
      css: _FocusPuff.pictureWrapper,
      className: imageComponent ? 'image' : null
    }, imageArea), (0, _core.jsx)("div", {
      css: _FocusPuff.textArea
    }, (0, _core.jsx)("h3", {
      css: _FocusPuff.focusHeadline
    }, headline, isExternalLink && (0, _core.jsx)(_External["default"], {
      title: "Extern l\xE4nk",
      style: _FocusPuff.externalIcon
    })), (0, _core.jsx)("p", {
      css: _FocusPuff.focusText
    }, text)));
  };

  return url !== null ? (0, _core.jsx)("a", {
    css: _FocusPuff.linkWrapper,
    onClick: onClick,
    href: url,
    className: "noStyle"
  }, puffMarkup(FocusPuff)) : puffMarkup(FocusPuff);
};

exports.FocusPuff = FocusPuff;

//# sourceMappingURL=FocusPuff.js.map