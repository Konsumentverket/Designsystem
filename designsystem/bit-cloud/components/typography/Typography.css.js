import {css} from '@emotion/core'
import {
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const typographyContainerStyle = css`
  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  h2:not(.noStyleComponent h2, .noStyle) {
    ${typography.h2}
    border: 1px solid red;
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

  :first-child {
    margin-top: 0 !important;
  }

  :last-child {
    margin-bottom: 0 !important;
  }
`;
