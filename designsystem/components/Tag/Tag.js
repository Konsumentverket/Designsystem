/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagStyle, tagLinkStyle } from './Tag.css';
import { SubHeading } from '../Headings/SubHeading';

const Tag = ({ id, url, text, style, onClick }) => {
    return <a key={id} href={url} css={[tagStyle, style]} onClick={onClick} className="noState">
            {text}
        </a>
}

export { Tag };