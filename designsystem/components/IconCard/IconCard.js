/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { iconCardStyle, arrowStyle, iconStyle, topAreaIcon } from './IconCard.css';
import { Icon } from '../Icon/Icon.js';

const IconCard = ({icon, text, url, style}) => {
    return <a href={url} css={[iconCardStyle, icon && topAreaIcon, style]} >
                    {icon && <Icon icon={icon} style={iconStyle}>Ikon</Icon>}
                    <h3>{text}</h3>
                    <Icon icon="Arrow" style={arrowStyle} />
                </a>
}

export { IconCard };