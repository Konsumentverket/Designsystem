/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import HeadingStyle from './Heading.css'

export const Heading = ({ text, style }) => <h1 css={[HeadingStyle, style]}>{text}</h1>