import { css } from "@emotion/core";
import { newColors, spacing, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  width: 100%;
  border-radius: ${spacing.s};
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
`;

export const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m};
  }
`;

export const innerHeaderStyle = css`
  display: flex;
  align-items: center;
`;

export const innerHeaderTextStyle = css`
  display: block;
  margin-right: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    margin-right: ${spacing.m};
  }
`;

export const iconStyle = css`
  fill: ${newColors.primaries.fullBlue};
  margin-right: ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    margin-right: ${spacing.m};
  }
`;

export const titleStyle = css`
  color: ${newColors.primaries.fullBlue};
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }
`;

export const preambleStyle = css`
  color: ${newColors.kovBlack};
  line-height: 1.25;
  font-size: 1.6rem;
  margin: 0;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const linkStyle = css`
  position: relative;
  display: block;
  text-decoration: none;
  background-color: ${newColors.kovWhite};
  border-radius: ${spacing.s};

  &:hover {
    background-color: ${newColors.shades.lightBlue};
    box-shadow: inset 0 0 0 1px ${newColors.shades.mediumBlue};
  }
`;

export const linkStyleExpanded = css`
  border-radius: 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${spacing.s};
    display: block;
    height: 1px;
    width: calc(100% - (${spacing.s} * 2));
    background-color: ${newColors.shades.mediumBlue};

    @media (min-width: ${breakpoints.m}) {
      left: ${spacing.m};
      width: calc(100% - (${spacing.m} * 2));
    }
  }

  &:hover {
    border-radius: ${spacing.s} ${spacing.s} 0 0;
    box-shadow: inset 0 0 0 1px ${newColors.shades.mediumBlue};
  }

`;

export const chevronStyle = css`
  fill: ${newColors.primaries.fullBlue};
  transform: rotate(90deg);
`;

export const chevronExpandedStyle = css`
  transform: rotate(-90deg);
`;

export const expandedAreaStyle = css`
  background-color: ${newColors.kovWhite};
  overflow: hidden;
  padding: 0;
  height: 0;
`;

export const expandedAreaExpandedStyle = css`
  padding: ${spacing.s};
  height: auto;

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m};
  }
`;