/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { searchWrapperStyle, searchFieldInputStyle,searchFiledButtonStyle,   } from './FormSearchField.css';
import { Button } from '../Button/Button';



export const FormSearchField = ({ className, icon, reference, fieldtext, onClick, buttontext, style, disabled, type, inputtype, ...other }) => {

    var styles = [searchWrapperStyle];
    style && styles.push(style)

    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    return <div 
            css={[styles]} 
            className={className} >
            <input 
            {...other} 
            ref={reference} 
            type={inputtype || "search"} 
            placeholder={fieldtext}
            disabled={disabled} 
            css={searchFieldInputStyle} />
            <Button
                style={searchFiledButtonStyle} 
                disabled={disabled}
                onClick={onClick}
                ref={reference}
                iconLeft = {icon}
                text={buttontext}
                {...ariaAttrs}
                 />
    </div>

}

