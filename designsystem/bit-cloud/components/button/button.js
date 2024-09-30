/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import {
  buttonStyle,
  smallStyle,
  linkStyles,
  linkStylesSmall,
  secondaryStyle,
  buttonIconLeft,
  buttonIconRight,
  buttonIconOnly
} from './Button.css.js';

export const Button = ({
  text,
  secondaryButtonStyle = false,
  smallButtonStyle = false,
  linkStyle = false,
  linkStyleSmall = false,
  className,
  id,
  type = "submit",
  selected,
  disabled,
  iconLeft,
  iconRight,
  reference,
  onClick,
  href,
  contentfulName,
  contentfulId,
  linkComponent: LinkComponent = 'a',
  ...other
}) => {

  const styles = [buttonStyle];
  const cssClass = [className];

  secondaryButtonStyle && styles.push(secondaryStyle);
  linkStyle && styles.push(linkStyles);
  linkStyleSmall && styles.push(linkStylesSmall);
  selected && cssClass.push("selectedButtonStyle");
  linkStyle && cssClass.push("button--linkstyle");
  (href && !linkStyle && !linkStyleSmall) && cssClass.push("noStyle");
  text === '' && (iconLeft || iconRight) && styles.push(buttonIconOnly)
  iconLeft && styles.push(buttonIconLeft)
  iconRight && styles.push(buttonIconRight)
  smallButtonStyle && styles.push(smallStyle);

  const ariaAttrs = {};''
  Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x]);

  const props = {
    id: id,
    css: styles,
    className: cssClass.join(" "),
    disabled: disabled,
    onClick: onClick,
    ref: reference,
    type: href ? null : type,
    href: href || null,
    ...ariaAttrs,
  };

  return href
    ? <LinkComponent
      data-comp="button"
      injected={true}
      data-contentful-field-id={contentfulName} data-contentful-entry-id={contentfulId}
      {...props}
    >
      {iconLeft}
      {text}
      {iconRight}
    </LinkComponent>
    :
    <button {...props} data-comp="button" data-contentful-field-id={contentfulName} data-contentful-entry-id={contentfulId}>
      {iconLeft}
      {text}
      {iconRight}
    </button>;
};
