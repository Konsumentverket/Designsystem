import {css} from '@emotion/core'
import {
  typography,
  breakpoints,
} from '@konsumentverket-sverige/designsystem.utils';

export const typographyContainerStyle = css`
  & > :first-child {
    margin-top: 0 !important;
  }

  & > :last-child {
    margin-bottom: 0 !important;
  }

  h2:not(.noStyleComponent h2, .noStyle) {
    ${typography.h2}
  }

  h3:not(.noStyleComponent h3, .noStyle) {
    ${typography.h3}
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
    ${typography.ulStyling}
  }

  ol:not(.noStyleComponent ol, .noStyle) {
    ${typography.olStyling}
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


