/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { buttonStyle, secondaryStyle, invertedBackgroundStyle, invertedSecondaryBackgroundStyle, iconStyle, buttonIconLeft, buttonIconRight } from './Button.css';
import { Icon } from '../Icon/Icon';


export const Button = ({ text, secondaryButtonStyle=false, invertedBackgroundColor=false, className, id, type = "submit",
    selected, disabled, iconLeft, iconRight, style, reference, onClick, href, ...other }) => {

    var styles = [buttonStyle];
    var cssClass = [className];

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

    const props={
        "id":id,
        "css":styles,
        "className":cssClass.join(" "),
        "disabled":disabled,
        "onClick":onClick,
        "ref":reference,
        "type":href !== null ? null : type,
        "href":href || null,
        ...ariaAttrs}

    const leftIcon = iconLeft ? (React.isValidElement(iconLeft) ? iconLeft : <Icon style={iconStyle} icon={iconLeft} />) : null;
    const rightIcon = iconRight ? (React.isValidElement(iconRight) ? iconRight : <Icon style={iconStyle} icon={iconRight} />) : null;

    return href ? <a {...props} > 
        {leftIcon}
        {text}
        {rightIcon}
    </a>
    :
    <button {...props} >
        {leftIcon}
        {text}
        {rightIcon}
    </button>;
}
