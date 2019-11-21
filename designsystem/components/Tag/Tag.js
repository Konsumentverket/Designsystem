/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { tagStyle } from './Tag.css';
import SubHeading from '../Headings/SubHeading';

const Tag = ({ id, url, text, style, headingLevel = 4 }) => {
    return <div key={id} css={[tagStyle, style]}>
        <a href={url} >
            <SubHeading level={headingLevel}>{text}</SubHeading>
        </a>
    </div>
}

export { Tag };