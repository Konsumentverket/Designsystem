/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./ListItem.css"
import { SubHeading } from "../../components/Headings/SubHeading"
import { DateFormat } from '../DateFormat/DateFormat'

export const ListItem = ({ children, headline, preamble, bottomText, type, reviewedDate, href, style }) => {
    return <a css={[css.wrapper, style]} className='noStyle' href={href}>
    {type && <p css={css.news}> {type.toUpperCase()}{reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true} /></>}</p>}
    <SubHeading level={3}>{headline}</SubHeading>
    {children}
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </a>
}