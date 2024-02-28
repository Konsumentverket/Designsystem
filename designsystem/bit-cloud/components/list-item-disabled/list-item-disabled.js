/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./list-item-disabled.css.js"
import { DateFormat } from '@frojd/designsystem-scope.utils'

export const ListItemDisabled = ({
  children,
  headline,
  preamble,
  bottomText,
  type,
  reviewedDate,
  href,
  headlineLevel,
  headlineStyleLevel,
  style,
  invertedLinkStyle,
  disabled
}) => (
  <div css={[css.wrapper, invertedLinkStyle && css.invertedLink, css.disabled, style]}>
    {type && <p css={css.news}>{type.toUpperCase()}
      {reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true} /></>}</p>}
    <p
      css={[css.headlineDisabled, css.headline]}
      className="listItemHeadline">
      {headline}
    </p>
    {children}
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </div>
)
