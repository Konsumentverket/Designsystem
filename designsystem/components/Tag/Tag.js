/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { tagStyle2 } from './Tag.css';

const Tag = ({ id, url, text, style }) => {
    return <div key={id} css={[tagStyle2, style]}>
        <a href={url} >
            <h4>{text}</h4>
        </a>
    </div>
}

export { Tag };