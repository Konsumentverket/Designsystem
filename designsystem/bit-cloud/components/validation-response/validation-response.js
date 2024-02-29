/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as css from './validation-response.css.js'
import { Check, Clear } from "@konsumentverket-sverige/designsystem.utils";

const ValidationResponse = ({
    success = false,
    text = '',
    children
}) =>
    <div css={css.wrapper(success)}>
        {success ? <Check /> : <Clear />}
        {text}
        {children}
    </div>

export { ValidationResponse }