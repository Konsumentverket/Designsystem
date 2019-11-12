/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Icon } from '../Icon/Icon.js';
import { expandButton, showLessArrow, expandArrow, buttonContent } from './ExpandButton.css';

const ExpandButton = ({onClick, text, style, expanded}) => {
    return <a css={[expandButton, style]} onClick={onClick}>
        <div css={buttonContent}>
        <span>{text}</span>
        <Icon icon="Arrow" style={expanded ? showLessArrow : expandArrow} />
        </div>
    </a>
}

export { ExpandButton };