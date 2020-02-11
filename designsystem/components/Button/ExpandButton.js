/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon } from '../Icon/Icon.js';
import React from 'react';
import { expandButtonStyle, secondaryStyle, invertedBackgroundStyle, invertedSecondaryBackgroundStyle, iconStyle, expandedIconStyle } from './ExpandButton.css';

export const ExpandButton = ({ text, secondaryButtonStyle=false, invertedBackgroundColor=false, expanded=false, className, id, disabled, style, onClick }) => {

    var styles = [expandButtonStyle];

    secondaryButtonStyle && styles.push(secondaryStyle);   
    invertedBackgroundColor && styles.push(invertedBackgroundStyle);
    (invertedBackgroundColor && secondaryButtonStyle) && styles.push(invertedSecondaryBackgroundStyle);


    style && styles.push(style)

    return <button 
        id={id}
        css={styles}
        className={className}
        disabled={disabled}
        aria-expanded={expanded ? "true" : "false"} 
        onClick={onClick}>
        {text}
        <Icon aria-hidden="true" icon="Arrow" style={[iconStyle, expanded && expandedIconStyle]} />
    </button>;
}

