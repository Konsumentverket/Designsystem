/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { wrapperStyling, tagMargin, titleStyling, iconWrapper, iconColor } from './fact-box.css.js'
import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';


export const FactBox = ({
  children,
  headline,
  content,
  tag = true,
}) => {

  if (!content && !children) {
    return null;
  }

  return (
    <div css={[wrapperStyling, tag ? tagMargin : null]} data-comp="fact-box">
      {tag && (
          <div css={iconWrapper}>
            <Icon
              icon="MonoBookmark"
              style={iconColor}
            />
          </div>
        )
      }
      {headline && (
        <h2 css={titleStyling}>{headline}</h2>
      )}
      {children}
      {content}
    </div>
  )
}
