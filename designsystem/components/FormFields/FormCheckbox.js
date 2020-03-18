/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useRef, useState } from 'react'
import { wrapperStyle, labelStyle, fieldStyle, invertedLabelStyle, invertedfieldStyle } from './FormCheckbox.css';



export const FormCheckbox = ({ 
  name,
  id,
  labelText, 
  value,  
  invertedBackgroundColor=false, 
  checked = false, 
  onChange,  
  style }) => {

  var fieldStyles = [fieldStyle];
  var labelStyles = [labelStyle];

  let inputRef = useRef(null);
  let [checkValue,setChecked] = useState(false)

  if (invertedBackgroundColor){
      labelStyles.push(invertedLabelStyle);
      fieldStyles.push(invertedfieldStyle)
  }
  style && labelStyles.push(style)


  return (
    <>
      <div css={wrapperStyle}>
        <input 
          id={id}
          name={name}
          type="checkbox" css={[fieldStyles]}
          value={value}
          onChange={() =>{
            setChecked(!checkValue);
          }} 
          checked={checkValue}
          />
        <label htmlFor={id} css={[labelStyles]}>{labelText}</label>
      </div>
    </>         
  )
}

