/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagStyle } from './Tag.css';
import { SubHeading } from '../Headings/SubHeading';

const Tag = ({ id, url, text, style, headingLevel = 4, onClick }) => {
    return <div key={id} css={[tagStyle, style]} onClick={onClick}>
        <a href={url} >
            <SubHeading level={headingLevel}>{text}</SubHeading>
        </a>
    </div>
}

export { Tag };