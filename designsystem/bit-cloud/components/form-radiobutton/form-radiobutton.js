/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { wrapperStyle, labelStyle, fieldStyle } from './form-radiobutton.css.js';

export const FormRadiobutton = ({
  name,
  id,
  labelText,
  value,
  checked = false,
  onChange,
}) => (
  <div css={[wrapperStyle, fieldStyle]}>
    <input
      id={id}
      name={name}
      type="radio"
      className="radio"
      css={fieldStyle}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label
      className='radio-label'
      htmlFor={id}
      css={labelStyle}>
      {labelText}
    </label>
  </div>
)

