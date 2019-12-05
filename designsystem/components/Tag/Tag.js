/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagStyle } from './Tag.css';
import { SubHeading } from '../Headings/SubHeading';

const Tag = ({ id, url, text, style, headingLevel = 4 }) => {
    return <div key={id} css={[tagStyle, style]}>
        <a href={url} >
            {text}
        </a>
    </div>
}

export { Tag };