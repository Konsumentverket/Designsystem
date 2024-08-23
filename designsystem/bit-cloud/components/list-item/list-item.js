/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./list-item.css.js"
import { DateFormat } from '@konsumentverket-sverige/designsystem.utils'
import { Icon } from '@konsumentverket-sverige/designsystem.icon'

export const ListItem = ({
  headline,
  preamble,
  type,
  updatedAt, publishedAt,
  href,
  onClick,
}) => <a
  css={[css.wrapper]}
  className='noStyle'
  href={href}
  onClick={onClick}
  data-comp="listitem"
>
    <p
      css={css.headline}
      className="listItemHeadline">
      {headline} <Icon icon="MonoArrowRightSmall" />
    </p>
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}

    <div css={css.dateWrapper}>
      { type && <p css={css.typeStyle}>{type}</p> }
      { updatedAt && <p css={css.dateStyle}> Uppdaterad den <DateFormat date={updatedAt} showDate={true} /></p>}
      { !updatedAt && publishedAt && <p css={css.dateStyle}><DateFormat date={publishedAt} showDate={true} /></p>}
    </div>
  </a>
