/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./ListItem.css"
import { SubHeading } from "../../components/Headings/SubHeading"

export const ListItem = ({ headline, preamble, source, type, reviewedDate, link, style }) => {
    console.log(headline);
    return <a css={css.wrapper} className='noStyle' href={link}>
    {type && <p css={css.news}> {type.toUpperCase()}: {reviewedDate}</p>}
    <SubHeading level={3}>{headline}</SubHeading>
    {preamble && <Preamble text={preamble} style={css.preambleStyle} />}
    {source && <p>{source}</p>}
  </a>
}