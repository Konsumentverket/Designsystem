/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from "react"
import PropTypes from 'prop-types';
import * as styles from "./list-item-slim.css.js"
import {Icon} from '@konsumentverket-sverige/designsystem.icon';

export const ListItemSlim = ({
 headline,
 href,
 disabled,
 preamble,
}) => {

  if (!headline) {
    return;
  }

  return (
    disabled ? (
      <li css={[styles.listItemSlim, styles.disabled]}>
          <p
            className={'noStyle'}
            css={styles.headlineDisabled}
          >
            {headline}
          </p>
          <p
            css={styles.preamble}
            className={'noStyle'}
          >
            {preamble}
          </p>
      </li>
    ) : (
      <li css={styles.listItemSlim}>
        <a
          css={styles.link}
          className='noStyle'
          href={href}
          data-comp='list-item-slim'
        >
      <span css={styles.headline}>
        {headline}
      </span>
          <Icon icon={'ChevronRight'} css={styles.chevronStyle}/>
        </a>
      </li>
    )
  )
}

ListItemSlim.propTypes = {
  href: PropTypes.string,
  headLine: PropTypes.string,
  disabled: PropTypes.bool,
  preamble: PropTypes.string,
}

ListItemSlim.defaultProps = {
  href: '',
  headLine: '',
  disabled: false,
  preamble: '',
}
