/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle } from "./InputText.css"


export const InputText = ({style, placeholder, id, onChange}) => {

    return <input css={[InputStyle,style]} placeholder={placeholder} id={id} onChange={onChange} type="text"  />
}