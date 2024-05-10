import { css } from "@emotion/core";
import { newColors, colors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
  width: 100%;
  background-color: ${newColors.shades.lightGrey25};
  border-radius: 8px;
  padding: ${spacing.s} ${spacing.m};

  p {
    font-size: 1.6rem;
    line-height: 1.5;

    &:last-of-type {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`

export const titleStyling = css`
  font-size: 1.6rem;
  line-height: 1.3;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
`
