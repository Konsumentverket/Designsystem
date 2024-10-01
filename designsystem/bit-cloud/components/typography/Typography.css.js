import {css} from '@emotion/core'
import {
  typography,
  breakpoints,
  newColors,
} from '@konsumentverket-sverige/designsystem.utils';

export const typographyHeadingMargin = css`
  margin-top: 32px;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.m}) {
    margin-top: 40px;
  }
`;

export const typographyListMargin = css`
  margin-bottom: 48px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 64px;
  }
`;

export const typographyContainerStyle = css`
  & > :first-child {
    margin-top: 0 !important;
  }

  & > :last-child {
    margin-bottom: 0 !important;
  }

  h2:not(.noStyleComponent h2, .noStyle) {
    ${typography.h2}
    ${typographyHeadingMargin}
  }

  h3:not(.noStyleComponent h3, .noStyle) {
    ${typography.h3}
    ${typographyHeadingMargin}
  }

  h4:not(.noStyleComponent h4, .noStyle) {
    ${typography.h4}
    ${typographyHeadingMargin}
  }

  h5:not(.noStyleComponent h5, .noStyle) {
    ${typography.h5}
    ${typographyHeadingMargin}
  }

  h6:not(.noStyleComponent h6, .noStyle) {
    ${typography.h6}
    ${typographyHeadingMargin}
  }

  p:not(.noStyleComponent p, .noStyle) {
    ${typography.paragraph}
    strong, b {
      ${typography.paragraphStrong}
    }
  }

  a:not(.noStyleComponent a, .noStyle) {
    ${typography.link}
    &:hover {
      ${typography.linkHover}
    }

    &:focus {
      ${typography.linkFocus}
    }
  }

  ul:not(.noStyleComponent ul, .noStyle) {
    ${typography.ulStyling};
    ${typographyListMargin};
  }

  ol:not(.noStyleComponent ol, .noStyle) {
    ${typography.olStyling};
    ${typographyListMargin};
  }

  blockquote:not(.noStyleComponent blockquote, .noStyle) {
    p, a, li {
      ${typography.blockquoteText};
    }
  }
`;

export const smallTypographyContainerStyle = css`
  p:not(.noStyleComponent p, .noStyle) {
    ${typography.paragraph};

    strong {
      ${typography.paragraph};
    }

    @media (min-width: ${breakpoints.m}) {
      ${typography.textSmall};

      strong {
        ${typography.textSmall};
        font-weight: 700;
      }
    }
  }

  a:not(.noStyleComponent a, .noStyle) {
    ${typography.linkBodyMedium}
  }

  ul:not(.noStyleComponent ul, .noStyle) {
    ${typography.ulSmallStyling}
  }

  ol:not(.noStyleComponent ol, .noStyle) {
    ${typography.olSmallStyling}
  }
`;


export const processStepStyling = css`
  > h2:not(.noStyleComponent h2),
  > h3:not(.noStyleComponent h3),
  > h4:not(.noStyleComponent h4),
  > h5:not(.noStyleComponent h5),
  > h6:not(.noStyleComponent h6) {
    color: ${newColors.kovBlack};
  }

  > p:not(.noStyleComponent p, .noStyle) {
    color: ${newColors.shades.kovBlack50};
  }
`;

