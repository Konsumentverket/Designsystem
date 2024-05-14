import { css } from '@emotion/core'
import {spacing, newColors, medium, large, colors} from '@konsumentverket-sverige/designsystem.utils';

export const breadcrumbStyle = css`
  margin: ${spacing.s} auto;
  padding: 0;
  max-width: 96rem;

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
  font-weight: 500;
  color: ${newColors.primaries.fullBlue};
  text-decoration: none;
`;

export const breadcrumbTextStyle = css`
  ${breadcrumbItemStyle}
  text-decoration:none;
`;

export const breadcrumbLinkStyle = css`
  ${breadcrumbItemStyle}
  color: ${newColors.primaries.fullBlue};
  text-decoration: underline;
  font-weight: 500 !important;

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
  margin: 0 calc(${spacing.xs} / 2);
  vertical-align: middle;
  fill: ${colors.theme3.midDark};
`;

export const breadcrumbsInnerStyle = css`
  display: flex;
  justify-content: flex-start;

  a {
    color: ${colors.theme1.mid};
    text-decoration: none;
    &:visited {
      color: ${colors.theme1.mid};
    }
  }

  ol {
    display: inline-block;
    list-style: none;

    li {
      display: inline-block;
    }
  }

  ${medium} {
    justify-content: space-between;
    padding: 0;
  }

  ${large} {
    margin: 0 auto;
    max-width: 1120px;
  }
`;
