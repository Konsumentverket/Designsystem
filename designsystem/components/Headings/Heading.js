/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import HeadingStyle from './Heading.css'

export const Heading = ({ text, style }) => <h1 css={[HeadingStyle, style]}>{text}</h1>