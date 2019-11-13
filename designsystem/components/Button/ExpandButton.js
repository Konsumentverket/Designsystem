/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Icon } from '../Icon/Icon.js';
import { expandButton, showLessArrow, buttonContent, arrow } from './ExpandButton.css';

const ExpandButton = ({onClick, text, style, expanded}) => {
    return <a css={[expandButton, style]} onClick={onClick} href="">
        <div css={buttonContent}>
            <span>{text}</span>
            <Icon icon="Arrow" style={[arrow, expanded && showLessArrow]} />
        </div>
    </a>
}

export { ExpandButton };