/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagStyle } from './tag.css.js';

const Tag = ({
  id,
  url,
  text,
  onClick
}) => {
  return (
    <a
      key={id}
      href={url}
      css={[tagStyle]}
      onClick={onClick}
      className="noStyle"
    >
      {text}
    </a>)
}

export { Tag };