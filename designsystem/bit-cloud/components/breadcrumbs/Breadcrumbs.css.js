import { css } from '@emotion/core'
import {spacing, newColors, medium, large, containerStyles} from '@konsumentverket-sverige/designsystem.utils';

export const breadcrumbStyle = css`
  ${containerStyles};

  svg {
    width: 1.2rem;
    margin: 0px calc(0.4rem);
    vertical-align: middle;

  }

  p {
    padding: 0 ${spacing.s};

    ${medium} {
      padding: 0 ${spacing.m} 0;
      margin-top: ${spacing.l};
    }

    ${large} {
      padding: 0;
    }
  }
`;

const breadcrumbItemStyle = css`
  font-size: 1.4rem;
  line-height: ${spacing.m};
  font-weight: 400 !important;
  color: ${newColors.primaries.fullBlue};
  text-decoration: none;
`;

export const breadcrumbTextStyle = css`
  ${breadcrumbItemStyle}
  text-decoration:none;
  color: ${newColors.kovBlack};
`;

export const breadcrumbLinkStyle = css`
  ${breadcrumbItemStyle}
  color: ${newColors.primaries.fullBlue};
  text-decoration: underline;

  &:hover {
    background-color: ${newColors.primaries.lightBlue};
    -webkit-text-decoration: none;
    text-decoration: none;
  }
  &:visited {
    color: ${newColors.primaries.fullBlue} !important;
  }
`;

export const arrowStyle = css`
  transform: rotate(270deg);
  width: 1.2rem;
  margin: 0 ${spacing.xs};
  vertical-align: middle;
  fill: ${newColors.kovBlack};
`;

