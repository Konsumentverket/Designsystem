/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";
import {
  typographyContainerStyle,
  smallTypographyContainerStyle
} from './Typography.css.js';


export const Typography = ({ children, small = false }) => {
  return (
    <div
      css={[
        typographyContainerStyle,
        small ? smallTypographyContainerStyle : null
      ]}
      data-comp="typography"
    >
      {children}
    </div>
  );
};