/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import * as css from "./list-item.css.js"
import { Icon } from '@konsumentverket-sverige/designsystem.icon'

export const ListItem = ({
  headline,
  preamble,
  type,
  updatedAt, publishedAt,
  webbinairDateStart, webbinairDateEnd,
  href,
  onClick,
  linkComponent: LinkComponent = 'a',
}) => <LinkComponent
  css={[css.wrapper]}
  className='noStyle'
  href={href}
  onClick={onClick}
  data-comp="listitem"
  injected={true}
>
    <p
      css={css.headline}
      className="listItemHeadline">
      {headline} <Icon icon="MonoArrowRightSmall" />
    </p>
    {preamble && <p css={css.preambleStyle}>{preamble}</p>}

    <div css={css.dateWrapper}>
      {type && <p css={css.typeStyle}>{type}</p>}
      {updatedAt && <p css={css.dateStyle}> Uppdaterad den {updatedAt}</p>}
      {!updatedAt && publishedAt && <p css={css.dateStyle}>{publishedAt}</p>}

      { webbinairDateStart && webbinairDateEnd && <p css={css.dateStyle}>Kommande: {webbinairDateStart} - kl {webbinairDateEnd}</p>}
      { webbinairDateStart && !webbinairDateEnd && <p css={css.dateStyle}>Genomfört: {webbinairDateStart}</p>}
    </div>
  </LinkComponent>
