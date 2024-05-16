/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import {
  wrapperStyle,
  checkboxStyle,
  labelStyle,
} from './form-checkbox.css.js'

export const FormCheckbox = ({
  name,
  id,
  labelText,
  value,
  onChange,
  checked = false,
}) => (
  <div css={[wrapperStyle, checkboxStyle]} data-checked={checked}>
    <input
      id={id}
      name={name}
      type='checkbox'
      className='checkbox'
      css={checkboxStyle}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label
      htmlFor={id}
      css={labelStyle}
      className='checkbox-label'
    >
      {labelText}
    </label>
  </div>
)