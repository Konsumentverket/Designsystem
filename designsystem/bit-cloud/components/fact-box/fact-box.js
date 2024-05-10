/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
// import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';
import { wrapperStyling, titleStyling } from './fact-box.css.js'

export const FactBox = ({
  children,
  headline,
  content,
}) => {

  if (!content && !children) {
    return null;
  }

  return (
    <div css={wrapperStyling}>
      {headline && (
        <h3 css={titleStyling}>{headline}</h3> // Use the SubHeading component instead?
      )}
      {children}
      {content}
    </div>
  )
}