/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../Icon/Icon.js';
import React from 'react';
import { expandButtonStyle, secondaryStyle, smallStyle, iconStyle, expandedIconStyle } from './ExpandButton.css';

export const ExpandButton = ({ text, secondaryButtonStyle=false, small = false, expanded=false, className, id, disabled, style, onClick }) => {

    var styles = [expandButtonStyle];

    secondaryButtonStyle && styles.push(secondaryStyle);
    small && styles.push(smallStyle)
    // invertedBackgroundColor && styles.push(invertedBackgroundStyle);
    // (invertedBackgroundColor && secondaryButtonStyle) && styles.push(invertedSecondaryBackgroundStyle);


    style && styles.push(style)

    return <button 
        id={id}
        css={styles}
        className={className}
        disabled={disabled}
        aria-expanded={expanded ? "true" : "false"} 
        onClick={onClick}
    >
        <span>{text}</span>
        <Icon aria-hidden="true" icon="Arrow" style={[iconStyle, expanded && expandedIconStyle]} />
    </button>;
}

