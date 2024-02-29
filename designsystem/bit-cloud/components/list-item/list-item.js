/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./list-item.css.js"
import { DateFormat } from '@konsumentverket-sverige/designsystem.utils'

export const ListItem = ({
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
  onClick,
}) => <a
  css={[css.wrapper, invertedLinkStyle && css.invertedLink, style]}
  className='noStyle'
  href={href}
  onClick={onClick}
>
    {type && <p css={css.news}>{type.toUpperCase()}
      {reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true} /></>}</p>}
    <p
      css={css.headline}
      className="listItemHeadline">
      {headline}
    </p>
    {children}
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </a>
