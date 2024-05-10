/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { wrapper, title } from './fact-box.css.js'

export const FactBox = ({
  children,
  headline,
  content,
}) => {

  if (!content && !children) {
    return null;
  }

  return (
    <div css={wrapper}>
      {headline && (
        <h3 css={title}>{headline}</h3>
      )}
      {children}
      {content}
    </div>
  )
}