/** @jsx jsx */
import React, { useRef, useEffect } from 'react';
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
import useOnClickOutside from "./useOnClickOutside";

const CheckboxOption = ({ text, value, onChange, stateValue }) => (
    <div css={itemOptionWrapperStyle}>
        <FormCheckbox
            id={value}
            labelText={text}
            name={value}
            value={value}
            onChange={(event) => onChange(event, value)}
            usePrimaryColor={true}
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
            onChange={(event) => onChange(event, value)}
            usePrimaryColor={true}
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
  type = 'link',
  onEnter = () => {},
  onChange = () => {},
  value = [],
  isExpanded = false,
  setIsExpanded = () => {},
}) => {
  const Component = componentMap[type];
  if (!Component) return null;

    const closeDropdown = () => setIsExpanded(false)

    const dropdownRef = useRef();
    useOnClickOutside(dropdownRef, () => closeDropdown());

    useEffect(() => {
      const handleKeyDown = (event) => {

        if (event.key === 'Enter') {
          onEnter(value, event);
        }

        if (event.key === 'Escape' || event.key === 'Esc') {
          closeDropdown();
        }
      };

      if (isExpanded) {
        document.addEventListener('keydown', handleKeyDown);
      } else {
        document.removeEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isExpanded, value, onEnter]);

    const handleOptionChange = (newValue, event) => {
        let updatedValue;

        if (type === "radio" || type === "select") {
          updatedValue = [newValue];
        } else {
          updatedValue = value.includes(newValue)
            ? value.filter(item => item !== newValue)
            : [...value, newValue];
        }

        onChange(updatedValue, event);
    };

    return (
        <div
            data-comp="drop-down"
            css={[wrapperStyle, isExpanded && wrapperExpandedStyle]}
            ref={dropdownRef}
        >
            <div css={innerWrapperStyle}>
                {label && (
                    <button
                        css={buttonStyle}
                        aria-controls={`dropdown-${id}`}
                        aria-expanded={isExpanded}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <span>
                          {label}
                        </span>
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
