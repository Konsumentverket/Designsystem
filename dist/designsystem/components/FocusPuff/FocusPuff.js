"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusPuff = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _FocusPuff = require("./FocusPuff.css");

var _External = _interopRequireDefault(require("../Icons/SystemIcons/External/External"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var FocusPuff = _react["default"].forwardRef(function (_ref, ref) {
  var headline = _ref.headline,
      text = _ref.text,
      url = _ref.url,
      isExternalLink = _ref.isExternalLink,
      image = _ref.image,
      imageAlt = _ref.imageAlt,
      icon = _ref.icon,
      imageComponent = _ref.imageComponent,
      onClick = _ref.onClick,
      style = _ref.style;
  var imageArea = imageComponent;

  if (!imageArea) {
    if (image) {
      imageArea = (0, _core.jsx)("img", {
        src: image,
        alt: imageAlt
      });
    } else {
      if (icon) {
        imageArea = _react["default"].isValidElement(icon) ? _react["default"].cloneElement(icon, {
          style: _FocusPuff.puffIcon
        }) : null;
      }
    }
  }

  var puffMarkup = function puffMarkup() {
    return (0, _core.jsx)("div", {
      css: [_FocusPuff.focusWrapper, style],
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

  return (0, _core.jsx)("a", {
    css: _FocusPuff.linkWrapper,
    onClick: onClick,
    href: url,
    className: "noStyle"
  }, puffMarkup());
});

exports.FocusPuff = FocusPuff;
FocusPuff.displayName = "FocusPuff";

//# sourceMappingURL=FocusPuff.js.map