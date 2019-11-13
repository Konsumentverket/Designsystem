/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Icon } from '../Icon/Icon.js';
import { expandButton, showLessArrow, buttonContent, arrow } from './ExpandButton.css';

const ExpandButton = ({onClick, text, style, expanded}) => {
    return <button css={[expandButton, style]} onClick={onClick}>
                <span css={buttonContent}>{text} <Icon icon="Arrow" style={[arrow, expanded && showLessArrow]} /></span>
            </button>
}

export { ExpandButton };