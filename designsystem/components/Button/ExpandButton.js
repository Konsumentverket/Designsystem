/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Icon } from '../Icon/Icon.js';
import { expandButton, showLessArrow, expandArrow } from './ExpandButton.css';

const ExpandButton = ({onClick, text, style, expanded}) => {
    return <a css={[expandButton, style]} onClick={onClick}>
        <span>{text}</span>
        <Icon icon="Arrow" style={expanded ? showLessArrow : expandArrow} />
    </a>
}

export { ExpandButton };