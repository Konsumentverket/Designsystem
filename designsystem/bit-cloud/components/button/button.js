/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import React from 'react';

import {
  buttonStyle,
  secondaryStyle,
  invertedBackgroundStyle,
  invertedSecondaryBackgroundStyle,
  buttonIconLeft,
  buttonIconRight
} from './Button.css.js';

export const Button = ({
  text,
  secondaryButtonStyle = false,
  invertedBackgroundColor = false,
  className,
  id,
  type = "submit",
  selected,
  disabled,
  iconLeft,
  iconRight,
  style,
  reference,
  onClick,
  href,
  ...other
}) => {

  const styles = [buttonStyle];
  const cssClass = [className];

  secondaryButtonStyle && styles.push(secondaryStyle);
  invertedBackgroundColor && styles.push(invertedBackgroundStyle);
  selected && cssClass.push("selectedButtonStyle");
  href && cssClass.push("noStyle");
  (invertedBackgroundColor && secondaryButtonStyle) && styles.push(invertedSecondaryBackgroundStyle);
  iconLeft && styles.push(buttonIconLeft)
  iconRight && styles.push(buttonIconRight)

  const ariaAttrs = {};
  Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

  style && styles.push(style)

  const props = {
    "id": id,
    "css": styles,
    "className": cssClass.join(" "),
    "disabled": disabled,
    "onClick": onClick,
    "ref": reference,
    "type": href !== null ? null : type,
    "href": href || null,
    ...ariaAttrs
  }

  return href
    ? <a {...props} >
      {iconLeft}
      {text}
      {iconRight}
    </a>
    :
    <button {...props} >
      {iconLeft}
      {text}
      {iconRight}
    </button>;
}

Button.propTypes = {
  text: PropTypes.string,
  secondaryButtonStyle: PropTypes.bool,
  invertedBackgroundColor: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  style: PropTypes.object,
  reference: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  other: PropTypes.object,
}

Button.defaultProps = {
  secondaryButtonStyle: false,
  invertedBackgroundColor: false,
  type: "submit",
};