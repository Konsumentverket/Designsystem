/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./ListItem.css"
import { SubHeading } from "../../components/Headings/SubHeading"
import { DateFormat } from '../DateFormat/DateFormat'

export const ListItem = ({ headline, preamble, bottomText, type, reviewedDate, href, style }) => {
    return <a css={css.wrapper} className='noStyle' href={href}>
    {type && <p css={css.news}> {type.toUpperCase()} {reviewedDate && <>: <DateFormat date={reviewedDate} showDate={true} /></>}</p>}
    <SubHeading level={3}>{headline}</SubHeading>
    {preamble && <Preamble text={preamble} style={css.preambleStyle} />}
    {bottomText && <p css={css.bottomText}>{bottomText}</p>}
  </a>
}