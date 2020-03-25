/** @jsx jsx */
import { jsx } from '@emotion/core'
import { TextAreaStyle,TextAreaWrapperStyle, Label, invalidStyle } from "./TextArea.css"
import { useRef, useState } from 'react';


export const TextArea = ({style, wrapperStyle, placeholder, text, id, onChange, onClear,validationError,
  name, disabled, ...other}) => {
  
  const { label } = other

  let inputRef = useRef(null);
  let [addedText,setText] = useState(null)
  const invalid = validationError ? invalidStyle : null

  return (
    <div css={[TextAreaWrapperStyle, wrapperStyle, invalid]}>
      { label && <label css={Label} htmlFor={id}>{label}</label> }
      {validationError}
      <textarea 
        id={id} 
        ref={inputRef} 
        {...other} 
        css={[TextAreaStyle, style]} 
        name={name} 
        disabled={disabled} 
        placeholder={placeholder} 
        onChange={(e) => {
          onChange(e);
          setText(e.target.value);
        }}>
      {addedText}
      </textarea> 
    </div>
  )
}