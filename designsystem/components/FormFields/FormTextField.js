/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { fieldStyle, invertedBackgroundStyle } from './FormTextField.css';



export const FormTextField = ({ reference, fieldtext, style, invertedBackgroundColor=false, disabled, inputType, ...other }) => {

    var styles = [fieldStyle];
    invertedBackgroundColor && styles.push(invertedBackgroundStyle);
    style && styles.push(style)

    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    return <input 
    type={inputType || "text"} 
    ref={reference}
    placeholder={fieldtext}
    disabled={disabled} 
    css={[styles]} 
    {...ariaAttrs} 
    />
}

