/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useRef } from 'react';
import { searchWrapperStyle, searchFieldInputStyle, searchFieldButtonStyle, invertedBackgroundStyle, clearInputStyle } from './FormSearchField.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

export const FormSearchField = React.forwardRef(({ className,
    icon,
    fieldtext,
    onClick,
    onClear,
    onChange,
    invertedBackgroundColor = false,
    buttontext,
    style,
    disabled,
    type,
    inputtype,
    value,
    ...other }, ref) => {

    var styles = [searchWrapperStyle];
    style && styles.push(style)

    var searchFieldInputStyles = [searchFieldInputStyle];
    invertedBackgroundColor && searchFieldInputStyles.push(invertedBackgroundStyle);
    const inputRef = useRef();
    const ariaAttrs = {};
    Object.keys(other).filter(x => x.startsWith("aria-")).forEach(x => ariaAttrs[x] = other[x])

    return <div
        css={[styles]}
        className={className} >
        <input
            {...other}
            onChange={onChange}
            ref={(el) => {
                inputRef.current = el
                return typeof ref === 'function' ? ref(el) : null
            }}
            type={inputtype || "search"}
            placeholder={fieldtext}
            disabled={disabled}
            css={[searchFieldInputStyles]} />
        {inputRef && inputRef.current && inputRef.current.value.length > 0 && <span
            tabIndex="-1"
            css={clearInputStyle}
            className="noState"
            onClick={e => {
                e.preventDefault()
                if (inputRef == null || inputRef.current == null) return
                inputRef.current.value = ""
                inputRef.current.dispatchEvent(new Event('change'))
                if (onClear) {
                    onClear(e)
                }
            }}>
            <Icon icon="Clear" />
        </span>
        }
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

