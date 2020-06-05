/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as css from './VaildationResponse.css'
import { Icon } from '../Icon/Icon'

const ValidationResponse = ({ success = false, text = '',children }) =>
<div css={css.wrapper(success)}><Icon icon={success ? "Check" : "Clear"} />{text}{children}</div>

export { ValidationResponse }