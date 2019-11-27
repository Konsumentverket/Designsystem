/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../Icon/Icon.js';
import { expandButton, showLessArrow, buttonContent, arrow } from './ExpandButton.css';

const ExpandButton = ({ onClick, text, style, expanded }) => {
    return <button aria-expanded={expanded ? "true" : "false"} css={[expandButton, style]} onClick={onClick}>
        <span css={[buttonContent]}>{text}</span><Icon aria-hidden="true" icon="Arrow" style={[arrow, expanded && showLessArrow]} />
    </button>
}

export { ExpandButton };