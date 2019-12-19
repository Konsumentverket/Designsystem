/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle } from "./InputText.css"


export const InputText = ({style, placeholder, id, onChange, name, disabled}) => {

    return <input css={[InputStyle,style]} name={name} disabled={disabled} placeholder={placeholder} id={id} onChange={onChange} type="text"  />
}