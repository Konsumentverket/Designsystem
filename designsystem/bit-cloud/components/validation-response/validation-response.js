/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { wrapperStyle } from './validation-response.css.js'
import { Check, Clear } from "@konsumentverket-sverige/designsystem.utils"; // TODO: Update icons

const ValidationResponse = ({
    success = false,
    text = '',
    children
}) => {
    return (
        <div css={wrapperStyle(success)}>
            {success ? <Check /> : <Clear />}
            <p>{text}</p>
            {children && (
                { children }
            )}
        </div>
    )
}

export { ValidationResponse }