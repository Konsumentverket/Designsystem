/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React from "react";
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import { buttonIconLeft, buttonIconRight, buttonStyle } from "./megamenu-button.css";

export const MegamenuButton = ({
                                 text,
                                 id,
                                 type = "submit",   // Default value assigned directly in the function signature
                                 iconLeft,
                                 iconRight,
                                 onClick,
                                 reference,
                                 href,
                                 className,
                                 ...other
                               }) => {
  const styles = [buttonStyle];
  const cssClass = [className];

  href && cssClass.push("noStyle");
  iconLeft && styles.push(buttonIconLeft);
  iconRight && styles.push(buttonIconRight);

  const ariaAttrs = {};
  Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x]);

  const props = {
    "id": id,
    "className": cssClass.join(" "),
    "onClick": onClick,
    "ref": reference,
    "css": styles,
    "type": href !== null ? null : type,
    "href": href || null,
    ...ariaAttrs,
  };

  return href ? (
    <a {...props}>
      {iconLeft}
      {text}
      {iconRight}
    </a>
  ) : (
    <button {...props}>
      {iconLeft}
      {text}
      {iconRight}
    </button>
  );
};

MegamenuButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  reference: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  other: PropTypes.object,
};
