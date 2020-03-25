/** @jsx jsx */
import { jsx } from '@emotion/core';
import {selectStyle,selectWrapperStyle} from './Dropdown.css';
import { Label } from '../TextArea/TextArea.css';
import { useState } from 'react';

export const Dropdown = ({label,id,onChange,validationError,children, ...other}) => {
    let [value,setValue] = useState(null)
    return (
    <div css={selectWrapperStyle}>
        { label && <label css={Label} htmlFor={id}>{label}</label> }
        {validationError}
        <select id={id} css={selectStyle} data-hasvalue={!!value} value={value || ""} onChange={(e) => {
            setValue(e.target.value)
            if(onChange){
                onChange(e)
            }
        }} {...other}>
            {children}
        </select>
    </div>)

} 