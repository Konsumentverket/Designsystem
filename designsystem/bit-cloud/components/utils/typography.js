/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {newColors} from "./colors";
import {breakpoints} from "./breakpoints";

const baseHeading = css`
  color: ${newColors.kovBlue};
  font-style: normal;
  font-weight: 700;
  position: relative;
  word-break: break-word;
  hyphens: auto;
  margin-bottom: 16px;
`;

export const h1 = css`
  ${baseHeading};

  font-size: 3.2rem;
  line-height: 120%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 5rem;
    margin-bottom: 24px;
  }
`;

export const headingLine = css`
  &::before {
    content: "";
    position: absolute;
    background: ${newColors.primaries.mediumOrange};
    top: 0;
    height: 100%;
    width: 4px;
    left: calc(-14px + -4px);

    @media (min-width: ${breakpoints.m}) {
      left: calc(-16px + -4px);
    }
  }
`;

export const h1Line = css`
  ${h1};
  ${headingLine};
`;

export const h2 = css`
  ${baseHeading};

  font-size: 2.6rem;
  line-height: 130%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.8rem;
    line-height: 140%;
  }
`;

export const h2Line = css`
  ${h2};
  ${headingLine};
`;

export const h3 = css`
  ${baseHeading};

  font-size: 2.2rem;
  line-height: 130%;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    line-height: 150%;
  }
`;

export const h3Line = css`
  ${h3};
  ${headingLine};
`;

export const subHeading = css`
  ${baseHeading};
  color: ${newColors.kovBlack};
  font-size: 2rem;
  line-height: 140%;
`;

export const subHeadingLine = css`
  ${subHeading};
  ${headingLine};
`;

export const preamble = css`
  color: ${newColors.readingBlack};
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: break-word;
  hyphens: auto;
  max-width: 744px;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    margin-bottom: 24px;
  }
`;

export const paragraph = css`
  color: ${newColors.readingBlack};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: break-word;
  hyphens: auto;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 145%;
  }
`;

export const paragraphStrong = css`
  ${paragraph};
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    line-height: 150%;
  }
`;

export const textSmall = css`
  color: ${newColors.kovBlack};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: break-word;
  hyphens: auto;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const textSmallAlt = css`
  ${textSmall};
  font-weight: 500;
`;

export const textMini = css`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: break-word;
  hyphens: auto;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const textMiniAlt = css`
  ${textMini};
  font-weight: 500;
`;

export const linkHover = css`
  text-decoration: none;
  background: ${newColors.primaries.mediumBlue};
  box-shadow: 0 0 0 2px ${newColors.primaries.mediumBlue};
`;

export const linkFocus = css`
  text-decoration: none;
  background: ${newColors.primaries.mediumBlue};
  box-shadow: 0 0 0 2px ${newColors.primaries.mediumBlue};
  outline: 2px solid ${newColors.secondaries.fullGreen};
`;

export const link = css`
  ${paragraph};
  color: ${newColors.primaries.fullBlue};
  text-decoration: underline;
  border-radius: 3px;

  &:active,
  &:hover {
    ${linkHover};
  }

  &:focus {
    ${linkFocus};
  }
`;

export const linkMini = css`
  ${link};
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const linkSmall = css`
  ${link};
  font-size: 1.4rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const linkLarge = css`
  ${link};
  font-size: 2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;

export const clickHover = css`
  text-decoration: underline;
`;

export const clickFocus = css`
  text-decoration: underline;
  outline: 2px solid ${newColors.secondaries.fullGreen};
`;

const baseClick = css`
  color: ${newColors.primaries.fullBlue};
  text-decoration: none;
  background: none;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  word-break: break-word;
  hyphens: auto;

  &:active,
  &:hover {
    ${clickHover};
  }

  &:focus {
    ${clickFocus};
  }
`;

export const clickMini = css`
  ${baseClick};
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const clickSmall = css`
  ${baseClick};
  font-size: 1.4rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const clickMedium = css`
  ${baseClick};
  font-size: 1.6rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const clickMediumAlt = css`
  ${clickMedium};
  font-weight: 400;
`;

export const clickLarge = css`
  ${baseClick};
  font-size: 2rem;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;


const baseHeadingAlt = css`
  color: ${newColors.kovBlue};
  font-style: normal;
  font-weight: 700;
`;

export const h1Alt2 = css`
  ${baseHeadingAlt};
  font-size: 2.8rem;
  line-height: 128.571% /* 36px */
`;

export const h1Alt3 = css`
  ${baseHeadingAlt};
  font-size: 2.4rem;
  line-height: 130% /* 31.2px */
`;

export const h2Alt2 = css`
  ${baseHeadingAlt};
  font-size: 2.4rem;
  line-height: 141.667% /* 34px */
`;

export const h2Alt3 = css`
  ${baseHeadingAlt};
  font-size: 2rem;
  line-height: 140% /* 28px */
`;

const baseSubHeadingAlt = css`
  color: ${newColors.kovBlack};
  font-style: normal;
  font-weight: 700;
`;

export const subHeadingAltBig = css`
  ${baseSubHeadingAlt};
  font-size: 2.8rem;
  line-height: 120% /* 33.6px */
`;

export const subHeadingAltMedium = css`
  ${baseSubHeadingAlt};
  font-size: 2.4rem;
  line-height: 150% /* 36px */
`;

export const subHeadingAltSmall = css`
  ${baseSubHeadingAlt};
  font-size: 2rem;
  line-height: 140% /* 28px */
`;

export const subHeadingAltMini = css`
  ${baseSubHeadingAlt};
  font-size: 1.6rem;
  line-height: 130% /* 20.8px */
`;
