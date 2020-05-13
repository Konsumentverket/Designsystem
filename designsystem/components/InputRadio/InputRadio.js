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
                >
                <label className="radiolabel" css={[fieldLabel, fieldLabelStyle]} htmlFor={id}>
                    <input ref={inputRef} css={[fieldInput,fieldInputStyle]} id={id} name={name} type="radio" 
                        onChange={(e) => {
                            if (onChange && !document.body.classList.contains('tabnav')) {
                                onChange(e)
                            }
                        }} 
                        value={value} 
                        checked={checked}
                        onKeyUp={(e) => {
                            //32 == space
                            if(e.which === 32 || e.key == 'Enter'){
                                onChange(e)
                            }
                        }}
                    >
                    </input>
                    {labelText}
                </label>
            </div>

} 