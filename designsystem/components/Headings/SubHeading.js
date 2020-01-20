/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {h1Style, h2Style, h3Style,h4Style, commonSubHeadingStyle, h5Style, h6Style} from './SubHeading.css'

export const SubHeading = ({ children, text, style, level = 2,styleLevel, ...otherAttr }) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    const stylings = [h1Style,h2Style,h3Style,h4Style,h5Style,h6Style];
    const SelectedHeading = headings[level - 1] || 'h2'
    const SelectedStyling = stylings[styleLevel ? styleLevel -1 : level - 1]

    return <SelectedHeading css={[commonSubHeadingStyle, SelectedStyling, style]} {...otherAttr}> {children}{text}</SelectedHeading>
}