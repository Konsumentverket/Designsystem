/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import {fieldWrapper, fieldInput, fieldLabel} from './InputRadio.css'


export const InputRadio = ({name,id,labelText}) => {

    return <div css={fieldWrapper}>
                <input css={fieldInput} id={id} name={name} type="radio"></input>
                <label css={fieldLabel} htmlFor={id}>{labelText}</label>
            </div>

} 