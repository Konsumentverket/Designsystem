import { css } from '@emotion/core'
import {newColors, breakpoints} from '@konsumentverket-sverige/designsystem.utils';

const displayAlphabetFont = css`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  line-height: calc(27px + 4px + 4px);
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
  width: 20px;
  height: 35px;
  text-align: center;
  display: block;
  ${displayAlphabetFont};
`

export const validLetter = css`
  color: ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};

  &:focus,
  &:hover {
    color: ${newColors.shades.kovBlue50};
    background: ${newColors.shades.mediumBlue50};
    border-bottom: 2px solid ${newColors.shades.kovBlue50};
  }
`;

export const invalidLetter = css`
  color: ${newColors.shades.fullGrey};
`

export const activeLetter = css`
  color: ${newColors.shades.kovBlue};
  border-bottom: 2px solid ${newColors.shades.kovBlue};
`

export const linkShowAllWrapper = css`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: 32px;
  height: 35px;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 39px;
  }
`

export const linkShowAll = css`
  display: flex;
  ${displayAlphabetFont};
  text-decoration: none;
  color: ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};
  padding: 0 4px;

  &:focus,
  &:hover {
    color: ${newColors.shades.kovBlue50};
    background: ${newColors.shades.mediumBlue50};
    border-bottom: 2px solid ${newColors.shades.kovBlue50};
  }

`
