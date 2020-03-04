/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { searchWrapperStyle, searchFieldInputStyle, searchFieldButtonStyle, invertedBackgroundStyle } from './FormSearchField.css';
import { Button } from '../Button/Button';

export const FormSearchField = React.forwardRef(({ className, icon, fieldtext, onClick, onChange, invertedBackgroundColor = false, buttontext, style, disabled, type, inputtype, ...other }, ref) => {

    var styles = [searchWrapperStyle];
    style && styles.push(style)

    var searchFieldInputStyles = [searchFieldInputStyle];
    invertedBackgroundColor && searchFieldInputStyles.push(invertedBackgroundStyle);

    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    return <div
        css={[styles]}
        className={className} >
        <input
            {...other}
            onChange={onChange}
            ref={ref}
            type={inputtype || "search"}
            placeholder={fieldtext}
            disabled={disabled}
            css={[searchFieldInputStyles]} />
        <Button
            style={searchFieldButtonStyle}
            disabled={disabled}
            onClick={onClick}
            iconLeft={icon}
            text={buttontext}
            {...ariaAttrs}
        />
    </div>

})

