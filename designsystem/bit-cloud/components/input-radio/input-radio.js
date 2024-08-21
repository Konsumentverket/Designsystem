/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useRef } from 'react'
import {
  fieldWrapper,
  fieldInput,
  fieldLabel,
  disabledStyle,
  colorThemeWhite,
  colorThemeGrey,
} from './input-radio.css.js'

export const InputRadio = ({
  name,
  id,
  labelText,
  onChange,
  value,
  checked,
  disabled,
  className,
  tabIndex,
  dataQuestion,
  dataAnswer,
  colorTheme = 'white',
}) => {
  const inputRef = useRef(null);
  return <div
    data-comp="input-radio"
    css={[fieldWrapper, disabled && disabledStyle]}
    className={`${checked ? "inputHasValue" : ""} ${className}`}
  >
    <label
      className="radiolabel"
      css={[
        fieldLabel,
        colorTheme === 'white' ? colorThemeWhite : colorThemeGrey,
      ]}
      htmlFor={id}>
      <input
        ref={inputRef}
        css={[fieldInput]}
        id={id}
        name={name}
        type="radio"
        tabIndex={tabIndex}
        onChange={(e) => {
          if (onChange && !document.body.classList.contains('tabnav')) {
            onChange(e)
          }
        }}
        value={value}
        checked={checked}
        disabled={disabled}
        onKeyUp={(e) => {
          //32 == space
          if (e.which === 32 || e.key == 'Enter') {
            onChange(e)
          }
        }}
        data-question={dataQuestion}
        data-answer={dataAnswer}
      >
      </input>
      {labelText}
    </label>
  </div>
}
