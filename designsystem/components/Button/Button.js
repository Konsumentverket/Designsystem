/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { buttonStyle, secondaryStyle, invertedBackgroundStyle, invertedSecondaryBackgroundStyle, iconStyle, buttonIconLeft, buttonIconRight } from './Button.css';
import { Icon } from '../Icon/Icon';


export const Button = ({ text, secondaryButtonStyle=false, invertedBackgroundColor=false, className, id, type = "submit",
    disabled, iconLeft, iconRight, style, reference, onClick, ...other }) => {

    var styles = [buttonStyle];

    secondaryButtonStyle && styles.push(secondaryStyle);   
    invertedBackgroundColor && styles.push(invertedBackgroundStyle);
    (invertedBackgroundColor && secondaryButtonStyle) && styles.push(invertedSecondaryBackgroundStyle);
    iconLeft && styles.push(buttonIconLeft)
    iconRight && styles.push(buttonIconRight)

    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    style && styles.push(style)

    return <button
        id={id}
        css={styles}
        className={className}
        disabled={disabled}
        onClick={onClick}
        ref={reference}
        {...ariaAttrs}
    >
    {iconLeft ? <Icon style={iconStyle} icon={iconLeft} /> : null}
    {text}
    {iconRight ? <Icon style={iconStyle} icon={iconRight} /> : null}
    </button>;
}
