import { css } from '@emotion/core';
import { newColors, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  width: 100%;
  display: block;
  text-decoration: none;
  font-weight: 500;
  padding: 24px 16px;
  border-top: 1px solid ${newColors.shades.mediumBlue50};
  border-bottom: 1px solid ${newColors.shades.mediumBlue50};
  font-family: "Roboto";


  p.listItemHeadline {
      color: ${newColors.shades.fullBlue};
  }

  &:hover {
    p {
      text-decoration: none;
    }
  }
  &:active {

    p {
      text-decoration: none;
    }
  }
`
export const disabled = css`
  pointer-events: none;
  cursor: default;
  text-decoration: none !important;
`
export const headline = css`
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.4;
  display: block;
  margin-bottom: 8px;
  color: ${newColors.shades.fullBlue};
  display: flex;
  align-items: center;

  svg {
    margin-left: 8px;
    fill: ${newColors.shades.fullBlue};
  }
`



export const preambleStyle = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const dateWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
`

export const typeStyle = css`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${newColors.shades.kovBlack50};
  padding-right: 16px;
  margin-bottom: 0;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 16px;
    background-color: ${newColors.shades.kovBlack50};
    margin-left: 16px;
  }
`

export const dateStyle = css`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${newColors.shades.kovBlack50};
  margin-bottom: 0;
`
