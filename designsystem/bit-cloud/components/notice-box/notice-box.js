/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import {wrapperStyling, tagMargin, titleStyling, iconWrapper, iconColor, articleEntryMarginStyling} from './notice-box.css.js'
import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';


export const NoticeBox = ({
  children,
  headline,
  content,
  tag = true,
  contentfulId,
  contentfulName,
  articleEntryMargin = false,
}) => {

  if (!content && !children) {
    return null;
  }

  return (
    <div css={[
      wrapperStyling,
      tag ? tagMargin : null,
      articleEntryMargin ? articleEntryMarginStyling : null,
    ]}
     data-comp="notice-box"
     data-contentful-field-id={contentfulName ?? "noticeBox"}
     data-contentful-entry-id={contentfulId}
    >
      {tag && (
          <div css={iconWrapper}>
            <Icon
              icon="MonoCheck"
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
