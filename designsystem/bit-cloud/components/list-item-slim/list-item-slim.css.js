import { css } from '@emotion/core';
import { newColors, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const listItemSlim = css`
  width: 100%;
  text-decoration: none;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  color: ${newColors.shades.fullBlue};
  border-top: 1px solid ${newColors.shades.mediumBlue50};

  @media (min-width: ${breakpoints.m}) {
    padding: 24px 16px;
    justify-content: flex-start;
  }

  &:focus,
  &:hover {
    background: ${newColors.shades.lightBlue};
    text-decoration: underline;
  }
`;

export const headline = css`
  margin-right: 8px;
`;

export const chevronStyle = css`
  fill: ${newColors.shades.fullBlue};
  height: 18px;
  width: 18px;
  min-width: 18px;
`;
