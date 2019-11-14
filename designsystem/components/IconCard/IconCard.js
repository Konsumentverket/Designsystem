/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { iconCardStyle, arrowStyle, iconStyle, topAreaIcon } from './IconCard.css';
import { Icon } from '../Icon/Icon.js';

const IconCard = ({ icon, text, url, style, isH2 }) => {
    return <a href={url} css={[iconCardStyle, icon && topAreaIcon, style]} >
        {icon && <Icon icon={icon} style={iconStyle}>Ikon</Icon>}
        {isH2 ? <h2>{text}</h2> : <h3>{text}</h3>}
        <Icon aria-hidden="true" icon="Arrow" style={arrowStyle} />
    </a>
}

export { IconCard };