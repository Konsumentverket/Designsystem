/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {h1Style, h2Style, h3Style, commonSubHeadingStyle} from './SubHeading.css'

export const SubHeading = ({ children, text, style, level = 2 }) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']

    
    const SelectedHeading = headings[level - 1] || 'h2'
    var headingCss = null;

    if (SelectedHeading == "h1"){
        headingCss = h1Style;
    }
    if (SelectedHeading == "h2"){
        headingCss = h2Style;
    }
    if (SelectedHeading == "h3"){
        headingCss = h3Style;
    }

    return <SelectedHeading css={[commonSubHeadingStyle, headingCss, style]} > {children}{text}</SelectedHeading>
}