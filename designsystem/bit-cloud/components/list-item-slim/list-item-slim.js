/** @jsx jsx */
import {jsx} from '@emotion/core'
import React from "react"
import PropTypes from 'prop-types';
import * as styles from "./list-item-slim.css.js"
import {Icon} from '@konsumentverket-sverige/designsystem.icon';

const ListItemSlim = ({
 headline,
 href,
 onClick,
}) => {

  if (!headline) {
    return;
  }

  return (
    <a
      css={styles.listItemSlim}
      className='noStyle'
      href={href}
      data-comp='list-item-slim'
    >
      <span css={styles.headline}>
        {headline}
      </span>
      <Icon icon={'ChevronRight'} css={styles.chevronStyle} />
    </a>
  )
}

export default ListItemSlim

ListItemSlim.propTypes = {
  href: PropTypes.string,
  headLine: PropTypes.string,
}

ListItemSlim.defaultProps = {
  href: '',
  headLine: '',
}
