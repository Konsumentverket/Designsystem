/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useRef} from 'react'
import {fieldWrapper, fieldInput, fieldLabel} from './InputRadio.css'

export const InputRadio = ({
    name, id, labelText,
    fieldWrapperStyle, fieldInputStyle, fieldLabelStyle,
    onChange, value, checked
    }) => {
        const inputRef = useRef(null);
        return <div css={[fieldWrapper, fieldWrapperStyle]} 
                    className={(inputRef != null && inputRef.current != null && inputRef.current.checked) || checked ? "inputHasValue" : ""} 
                    onClick={() => inputRef.current.click()}
                >
                    <input ref={inputRef} css={[fieldInput,fieldInputStyle]} id={id} name={name} type="radio" 
                        onChange={onChange} value={value} checked={checked}
                    >
                    </input>
                <label css={[fieldLabel, fieldLabelStyle]} htmlFor={id}>{labelText}</label>
            </div>

} 