/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  typographyContainerStyle,
  smallTypographyContainerStyle,
  processStepStyle,
  alternativeHeadingStyle,
} from './Typography.css.js';


export const Typography = ({
  children,
  small = false,
  processStep = false,
  alternativeHeadings = false,
}) => {
  return (
    <div
      css={[
        typographyContainerStyle,
        small ? smallTypographyContainerStyle : null,
        processStep ? processStepStyle : null,
        alternativeHeadings ? alternativeHeadingStyle : null,
      ]}
      data-comp="typography"
    >
      {children}
    </div>
  );
};
