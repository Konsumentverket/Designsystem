/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import HeadingStyle from './Heading.css'

export const Heading = ({ text, style, ...otherAttr }) => <h1 css={[HeadingStyle, style]} {...otherAttr}>{text}</h1>