/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import {
    itemsWrapperStyle,
    itemsWrapperExpandedStyle,
    wrapperStyle,
    innerWrapperStyle,
    wrapperExpandedStyle,
    buttonStyle,
    chevronStyle,
    chevronExpandedStyle,
    itemsListStyle,
    itemLinkStyle,
    itemOptionWrapperStyle,
} from './drop-down.css.js';
import { FormCheckbox } from '@konsumentverket-sverige/designsystem.form-checkbox';
import { FormRadiobutton } from '@konsumentverket-sverige/designsystem.form-radiobutton';
import { ChevronRight } from '@konsumentverket-sverige/designsystem.utils';
import { useState } from 'react';

const CheckboxOption = ({ text, value, onChange, stateValue }) => (
    <div css={itemOptionWrapperStyle}>
        <FormCheckbox
            id={value}
            labelText={text}
            name={value}
            value={value}
            onChange={onChange}
            checked={stateValue.includes(value)}
        />
    </div>
)

const RadioOption = ({ text, value, id, onChange, stateValue }) => (
    <div css={itemOptionWrapperStyle}>
        <FormRadiobutton
            id={value}
            labelText={text}
            name={id}
            value={value}
            onChange={onChange}
            checked={stateValue.includes(value)}
        />
    </div>
)

const LinkOption = ({ href, text }) => (
    <a className="noStyle" css={itemLinkStyle} href={href}>{text}</a>
)

const componentMap = {
    checkbox: CheckboxOption,
    radio: RadioOption,
    link: LinkOption,
};

export const Dropdown = ({
    label,
    id,
    data,
    type = 'link'
}) => {
    const Component = componentMap[type];
    if (!Component)
        return null;

    const [value, setValue] = useState([]);
    const [isExpanded, setIsExpanded] = useState(true);

    const handleOptionChange = (newValue) => {
        setValue(prevValue => {
            if (prevValue.includes(newValue)) {
                return prevValue.filter(item => item !== newValue);
            } else {
                return [...prevValue, newValue];
            }
        });
    };

    return (
        <div
            data-comp="dropdown"
            css={[wrapperStyle, isExpanded && wrapperExpandedStyle]}
        >
            <div css={innerWrapperStyle}>
                {label && (
                    <button
                        css={buttonStyle}
                        aria-controls={`dropdown-${id}`}
                        aria-expanded={isExpanded}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {label}
                        <ChevronRight
                            aria-hidden="true"
                            style={[chevronStyle, isExpanded && chevronExpandedStyle]}
                        />
                    </button>
                )}
                <div
                    aria-hidden={!isExpanded}
                    id={`dropdown-${id}`}
                    css={[itemsWrapperStyle, isExpanded && itemsWrapperExpandedStyle]}
                >
                    {data && (
                        <ul css={itemsListStyle}>
                            {data.map((item, index) => (
                                <li key={index}>
                                    <Component
                                        id={id}
                                        onChange={(checked) => handleOptionChange(item.value, checked)}
                                        stateValue={value}
                                        {...item}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
