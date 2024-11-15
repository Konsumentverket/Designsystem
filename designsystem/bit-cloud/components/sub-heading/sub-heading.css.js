import {css} from '@emotion/core';
import { newColors, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const kovBlackStyle = css`
  color: ${newColors.kovBlack};
`;

export const kovBlueStyle = css`
  color: ${newColors.kovBlue};
`;

export const rightBorderStyle = css`
  @media (min-width: ${breakpoints.m}) {
    padding-right: 32px;
    border-right: 1px solid ${newColors.shades.lightGrey50};
  }
`;
