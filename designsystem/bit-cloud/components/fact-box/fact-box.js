/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { wrapper, secondaryColorStyle } from './fact-box.css.js'
import { SubHeading } from '@designsystem.sub-heading'
import { LinkWrapperInvertedColorStyle } from '@designsystem.utils';

export const FactBox = ({
  children,
  headline,
  headlineLevel = 2,
  content,
  secondaryColor,
  style
}) => {
  if (!content && !children) return null;

  return <div css={[wrapper, LinkWrapperInvertedColorStyle, secondaryColor && secondaryColorStyle, style]}>
    {headline && <SubHeading level={headlineLevel} text={headline} styleLevel={3} />}
    {children}
    {content}
  </div>
}