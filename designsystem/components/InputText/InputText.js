/** @jsx jsx */
import { jsx } from '@emotion/core'
import { InputStyle } from "./InputText.css"


export const InputText = ({style, placeholder}) => {

    return <input css={[InputStyle,style]} placeholder={placeholder} type="text"  />
}