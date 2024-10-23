import { css } from '@emotion/core'
import {newColors, breakpoints} from '@konsumentverket-sverige/designsystem.utils';

const displayAlphabetFont = css`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 140%;
`;

export const alphabetWrapper = css`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: ${newColors.shades.lightBlue50};

  @media (min-width: ${breakpoints.m}) {
    padding: 24px;
    border-radius: 24px;
  }
`

export const letter = css`
  text-align: center;
  display: block;
  padding: 4px;
  border-radius: 2px;
  overflow: hidden;
  ${displayAlphabetFont};
`

export const validLetter = css`
  color: ${newColors.shades.fullBlue};

  &:hover {
    color: ${newColors.shades.kovBlue50};
    background: ${newColors.shades.mediumBlue50};
  }
`;

export const invalidLetter = css`
  color: ${newColors.shades.kovBlack50};
`

export const activeLetter = css`
  color: ${newColors.shades.kovBlue};
  background: ${newColors.shades.mediumBlue50};
  position: relative;

  &:hover {
    color: ${newColors.shades.kovBlue};
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${newColors.shades.kovBlue};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`
