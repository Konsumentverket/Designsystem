/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core'
import React, { FunctionComponent } from 'react';
import ButtonStyle, { selectedStyle, secondaryStyle, ctaStyle, mediumStyle, largeStyle, iconStyle } from './Button.css';
import { Icon } from '../Icon/Icon';

interface Props {
    text?: string,
    buttontype: string,
    className?: string,
    id?: string,
    type: any,
    disabled: boolean,
    selected: boolean,
    size: string,
    icon: string,
    iconRight: boolean,
    style?: SerializedStyles,
    reference?: string,
    onClick?: () => void
}

export const Button: FunctionComponent<Props> = ({ text, buttontype, className, id, type = "submit",
    disabled, selected, size, icon, iconRight, style, reference, onClick, ...other }) => {

    const styles = [ButtonStyle];

    switch (buttontype) {
        case "primary":
            //default
            break;
        case "secondary":
            styles.push(secondaryStyle);
            break;
        case "cta":
            styles.push(ctaStyle);
            break;
    }

    switch (size) {
        case "small":
            //default
            break;
        case "medium":
            styles.push(mediumStyle);
            break;
        case "large":
            styles.push(largeStyle);
            break;
    }

    if (selected) styles.push(selectedStyle);
    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    style && styles.push(style)

    return <button
        id={id}
        css={styles}
        className={className}
        disabled={disabled}
        type={type}
        onClick={onClick}
        ref={reference}
        {...ariaAttrs}
    >
        {icon && !iconRight ? <Icon style={iconStyle("left")} icon={icon} /> : null}
        {text}
        {icon && iconRight ? <Icon style={iconStyle("right")} icon={icon} /> : null}
    </button>
}
