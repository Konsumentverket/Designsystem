/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./ListItem.css"
import { SubHeading } from "../../components/Headings/SubHeading"
import { DateFormat } from '../DateFormat/DateFormat'

export const ListItem = ({ children, headline, preamble, bottomText, type, reviewedDate, href, headlineLevel, headlineStyleLevel, style, invertedLinkStyle }) => {
    return <a css={[css.wrapper, invertedLinkStyle && css.invertedLink, style]} className='noStyle' href={href}>
    {type && <p css={css.news}> {type.toUpperCase()}{reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true} /></>}</p>}
    <SubHeading level={headlineLevel || 3} styleLevel={headlineStyleLevel || 3}>{headline}</SubHeading>
    {children}
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </a>
}