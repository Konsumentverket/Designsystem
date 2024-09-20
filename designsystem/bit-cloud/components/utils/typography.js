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
  margin-bottom: 16px;
`;

export const h1 = css`
  ${baseHeading};

  font-size: 3.2rem;
  line-height: 120%;
  margin-top: 24px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 5rem;
    margin-top: 40px;
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
    left: -16px; // 4px stroke and 12px space

    @media (min-width: ${breakpoints.ml}) {
      left: -20px; // 4px stroke and 16px space
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
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.8rem;
    line-height: 140%;
    margin-top: 32px;
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
  margin-top: 16px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    line-height: 150%;
    margin-top: 24px;
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
  margin-top: 14px;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 16px;
  }
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
  word-break: normal;
  max-width: 744px;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
    margin-bottom: 32px;
  }
`;

export const paragraph = css`
  color: ${newColors.kovBlack};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  word-break: normal;
  margin-bottom: 14px;

  b, strong {
    font-weight: 500;
  }

  @media (min-width: ${breakpoints.m}) {
    font-size: 2rem;
    line-height: 145%;
    margin-bottom: 16px;
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
  word-break: normal;

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
  word-break: normal;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.4rem;
  }
`;

export const textMiniAlt = css`
  ${textMini};
  font-weight: 500;
`;

export const blockquoteText = css`
    ${paragraph};

    @media (min-width: ${breakpoints.m}) {
      ${textSmall};
    }
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
  outline: 4px solid ${newColors.secondaries.fullGreen};
`;

export const link = css`
  ${paragraph};
  color: ${newColors.primaries.fullBlue};
  text-decoration: underline;
  border-radius: 3px;

  &:not(.noStyle):active,
  &:not(.noStyle):hover {
    ${linkHover};
  }

  &:not(.noStyle):focus {
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
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`;

export const linkBodyMedium = css`
  ${link};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 32px;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
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
  outline: 4px solid ${newColors.secondaries.fullGreen};
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
  word-break: normal;

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
  margin-bottom: 8px;
`;

export const subHeadingAltBig = css`
  ${baseSubHeadingAlt};
  font-size: 2.8rem;
  line-height: 120%; /* 33.6px */
  margin-top: 32px;
`;

export const subHeadingAltMedium = css`
  ${baseSubHeadingAlt};
  font-size: 2.4rem;
  line-height: 150%; /* 36px */
  margin-top: 24px;
`;

export const subHeadingAltSmall = css`
  ${baseSubHeadingAlt};
  font-size: 2rem;
  line-height: 140%; /* 28px */
  margin-top: 16px;
`;

export const subHeadingAltMini = css`
  ${baseSubHeadingAlt};
  font-size: 1.6rem;
  line-height: 130%; /* 20.8px */
  margin-top: 8px;
`;

export const richTextHeadingBig = css`
  ${subHeadingAltMedium};

  @media (min-width: ${breakpoints.m}) {
    ${subHeadingAltBig};
  }
`;

export const richTextHeadingMedium = css`
  ${subHeadingAltSmall};

  @media (min-width: ${breakpoints.m}) {
    ${subHeadingAltMedium};
  }
`;

export const richTextHeadingSmall = css`
  ${subHeadingAltMini};

  @media (min-width: ${breakpoints.m}) {
    ${subHeadingAltSmall};
  }
`;

export const ulListSpacing = css`
  margin: 32px 0;
  padding: 0 0 0 8px;

  @media(min-width: ${breakpoints.m}){
    padding: 0 0 0 16px;
  }
`;

export const ulSmallListSpacing = css`
  margin: 16px 0;
  padding: 0 0 0 8px;

  @media(min-width: ${breakpoints.m}){
    margin: 24px 0;
    padding: 0 0 0 16px;
  }
`;

export const ulStyling = css`
  ${ulListSpacing};

  > :last-child {
    margin-bottom: 0;
  }

  li {
    display: flex;
    align-items: baseline;
    flex-shrink: 0;
    ${paragraph};
    margin-bottom: 16px;

    @media(min-width: ${breakpoints.m}){
      margin-bottom: 24px;
    }

    &:before {
      position: relative;
      top: -1px;
      content: " ";
      flex-shrink: 0;
      background-color: ${newColors.shades.fullGrey};
      border-radius: 50%;
      display: inline-block;
      width: 9px;
      height: 9px;
      margin-right: 16px;
    }
  }
`;

export const ulSmallStyling = css`
  ${ulStyling};
  ${ulSmallListSpacing};

  li {
    ${paragraph};

    @media (min-width: ${breakpoints.m}) {
      ${textSmall};
    }
  }
`;

export const olListSpacing = css`
  margin: 32px 27px; // 8px + 19px

  @media(min-width: ${breakpoints.m}){
    margin: 32px 37px; // 16px + 21px
  }
`;

export const olSmallListSpacing = css`
  margin: 16px 27px; // 8px + 19px

  @media(min-width: ${breakpoints.m}){
    margin: 24px 37px; // 16px + 21px
  }
`;

export const olStyling = css`
  ${olListSpacing};

  li {
    ${paragraph};
    padding-left: 16px;
    margin-bottom: 16px;

    @media(min-width: ${breakpoints.m}){
      margin-bottom: 24px;
    }
  }
`;

export const olSmallStyling = css`
  ${olListSpacing};
  ${olSmallListSpacing};

  li {
    ${paragraph};

    @media (min-width: ${breakpoints.m}) {
      ${textSmall};
    }
  }
`;

