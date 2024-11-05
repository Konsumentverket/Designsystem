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

const CheckboxOption = ({ text, value, onChange, stateValue, disabled }) => (
    <div css={itemOptionWrapperStyle}>
        <FormCheckbox
            id={value}
            labelText={text}
            name={value}
            value={value}
            onChange={(event) => onChange(event, value)}
            usePrimaryColor={true}
            checked={stateValue.includes(value)}
            disabled={disabled}
        />
    </div>
)

const RadioOption = ({ text, value, id, onChange, stateValue, disabled }) => (
    <div css={itemOptionWrapperStyle}>
        <FormRadiobutton
            id={value}
            labelText={text}
            name={id}
            value={value}
            onChange={onChange}
            usePrimaryColor={true}
            checked={stateValue.includes(value)}
            disabled={disabled}
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
  onChange = () => {},
  value = [],
  isExpanded = false,
  setIsExpanded = () => {},
}) => {
  const Component = componentMap[type];
  if (!Component) return null;

  const dropdownRef = useRef();
  const listRef = useRef();

  const closeDropdown = () => setIsExpanded(false)
  useOnClickOutside(dropdownRef, () => closeDropdown());

  useEffect(() => {
    const handleKeyDown = (event) => {
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
  }, [isExpanded, value]);

  useEffect(() => {
    if (type !== 'radio') return;

    if (isExpanded && listRef.current) {
      // Focus on the first radio input that isn't disabled
      const firstEnabledRadio = Array.from(listRef.current.querySelectorAll('input[type="radio"]'))
        .find((radio) => !radio.disabled);

      if (firstEnabledRadio) {
        firstEnabledRadio.focus();
      }
    }
  }, [isExpanded]);

  const handleOptionChange = (newValue, event) => {
    let updatedValue;

    if (type === "radio") {
      updatedValue = [newValue];
    } else {
      updatedValue = value.includes(newValue)
        ? value.filter(item => item !== newValue)
        : [...value, newValue];
    }

    onChange(updatedValue, event);
  };

  const handleBlur = (e) => {
    // Close dropdown when focusing outside of it
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      closeDropdown();
    }
  };

  return (
    <div
      data-comp="drop-down"
      css={[wrapperStyle, isExpanded && wrapperExpandedStyle]}
      ref={dropdownRef}
      tabIndex="-1"
      onBlur={handleBlur}
    >
      <div
        css={innerWrapperStyle}
        aria-labelledby={`legend-${id}`}
      >
        {label && (
          <button
            css={buttonStyle}
            aria-controls={`dropdown-${id}`}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span id={`legend-${id}`}>
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
            <ul
              ref={listRef}
              css={itemsListStyle}
              role={
                type === "radio" ? "radiogroup" : "group"
              }
            >
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
