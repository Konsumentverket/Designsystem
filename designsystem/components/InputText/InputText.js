/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle,InputWrapperStyle, ClearInput, Label } from "./InputText.css"
import {Icon} from '../Icon/Icon';
import { useRef, useState } from 'react';


export const InputText = ({style,wrapperStyle, placeholder, id, onChange, onClear,
    name, disabled, type="text", ...other}) => {
    
    const { label } = other

    let inputRef = useRef(null);
    let [text,setText] = useState(null)

    return <div css={[InputWrapperStyle,wrapperStyle]}>

            { label && <label css={Label} htmlFor={id}>{label}</label> }

            <input ref={inputRef} {...other} css={[InputStyle,style]} name={name} disabled={disabled} 
                    placeholder={placeholder} id={id} 
                    onChange={(e) =>{
                            onChange(e);
                            setText(e.target.value);
                        }
                    } 
                    type={type}  />

            {type == "search" && text != null && text != "" ?     
                <button tabIndex="-1" css={ClearInput} className="noState" onClick={(e) =>{
                    e.preventDefault();
                    if(inputRef == null || inputRef.current == null) return;
                    inputRef.current.value = "";
                    setText("");
                    inputRef.current.dispatchEvent(new Event('change'));
                    if(onClear){
                        onClear(e);
                    }
                }}>
                    <Icon icon="Clear" /></button> : 
                null}
        </div> 
}