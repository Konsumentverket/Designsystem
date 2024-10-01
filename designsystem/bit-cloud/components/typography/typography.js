/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";
import {
  typographyContainerStyle,
  smallTypographyContainerStyle,
  processStepStyling,
} from './Typography.css.js';


export const Typography = ({ children, small = false, processStep = false }) => {
  return (
    <div
      css={[
        typographyContainerStyle,
        small ? smallTypographyContainerStyle : null,
        processStep ? processStepStyling : null,
      ]}
      data-comp="typography"
    >
      {children}
    </div>
  );
};
