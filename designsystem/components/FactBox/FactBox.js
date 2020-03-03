/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { wrapper, secondaryColorStyle } from './FactBox.css'

export const FactBox = ({ content, secondaryColor }) => {

    if (content == null) return null;

    return <div css={[wrapper, secondaryColor && secondaryColorStyle]}>
        {content}
    </div>
}