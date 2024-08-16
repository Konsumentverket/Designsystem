import { css } from "@emotion/core";
import { newColors, spacing, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  width: 100%;
  border-radius: ${spacing.s};
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  overflow: hidden;
`;

export const containerLightBlueAlternativeStyle = css`
  box-shadow: none;
`;

export const containerAlternativeStyle = css`
    box-shadow: inset 0 0 0 1px ${newColors.secondaries.lightGrey};
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
  flex-shrink: 0;

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

export const titleAlternativeStyle = css`
  @media (min-width: ${breakpoints.m}) {
    font-size: 1.8rem;
  }
`;

export const titleLightBlueAlternativeStyle = css`
  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
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

export const linkAlternativeStyle = css`
  border-radius: ${spacing.s};
  background-color: ${newColors.shades.lightGrey25};
  border-top: 1px solid ${newColors.secondaries.mediumGrey};
  border-right: 1px solid ${newColors.secondaries.mediumGrey};
  border-bottom: 1px solid ${newColors.secondaries.mediumGrey};
  border-left: 1px solid ${newColors.secondaries.mediumGrey};

  &:hover {
    background-color: ${newColors.shades.lightGrey50};
    box-shadow: none;
  }
`

export const linkLightBlueAlternativeStyle = css`
  background-color: ${newColors.primaries.lightBlue};

    &:hover {
    background-color: ${newColors.shades.lightBlue};
    box-shadow: none;
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

export const linkStyleAlternativeExpanded = css`
  border-radius: ${spacing.s} ${spacing.s} 0 0 !important;
  border-bottom: 0 !important;

  &:after {
    background-color: ${newColors.secondaries.mediumGrey};
  }

  &:hover {
    &:after {
      left: 0;
      width: 100%;
    }
  }
`;

export const linkStyleLightBlueAlternativeExpanded = css`
  background-color: ${newColors.primaries.lightBlue};
  border-radius: ${spacing.s} ${spacing.s} 0 0 !important;
  border-bottom: 0 !important;

  &:after {
    background-color: ${newColors.primaries.mediumBlue};
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

export const expandedAreaAlternativeStyle = css`
  background-color: ${newColors.shades.lightGrey25};
  border: 1px solid ${newColors.secondaries.mediumGrey};
  border-top: 0;
`;

export const expandedAreaLightBlueAlternativeStyle = css`
  background-color: ${newColors.primaries.lightBlue};
  border: 0;
  border-top: 0;
`;

export const expandedAreaExpandedStyle = css`
  padding: ${spacing.s} ${spacing.s} ${spacing.l} ${spacing.s};
  height: auto;
  border-radius: 0 0 ${spacing.s} ${spacing.s};

  @media (min-width: ${breakpoints.m}) {
    padding: ${spacing.m} ${spacing.m} ${spacing.l} ${spacing.m};
  }
`;
