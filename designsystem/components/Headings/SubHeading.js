/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import SubHeadingStyle from './SubHeading.css'

export const SubHeading = ({ children, text, style, level = 2 }) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']

    const SelectedHeading = headings[level - 1] || 'h2'

    return <SelectedHeading css={[SubHeadingStyle, style]} > {children}{text}</SelectedHeading>
}