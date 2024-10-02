import {css} from '@emotion/core'
import {
  typography,
  breakpoints,
  newColors,
} from '@konsumentverket-sverige/designsystem.utils';

export const typographyContainerStyle = css`
  & > :first-child {
    margin-top: 0 !important;
  }

  & > :last-child {
    margin-bottom: 0 !important;
  }

  h2:not(.noStyleComponent h2, .noStyle) {
    ${typography.richTextH2}
  }

  h3:not(.noStyleComponent h3, .noStyle) {
    ${typography.richTextH3}
  }

  h4:not(.noStyleComponent h4, .noStyle) {
    ${typography.richTextH4}
  }

  h5:not(.noStyleComponent h5, .noStyle) {
    ${typography.richTextH5}
  }

  h6:not(.noStyleComponent h6, .noStyle) {
    ${typography.richTextH6}
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
  }

  ol:not(.noStyleComponent ol, .noStyle) {
    ${typography.olStyling};
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
  h2:not(.noStyleComponent h2),
  h3:not(.noStyleComponent h3),
  h4:not(.noStyleComponent h4),
  h5:not(.noStyleComponent h5),
  h6:not(.noStyleComponent h6) {
    color: ${newColors.kovBlack};
  }

  p:not(.noStyleComponent p) {
    color: ${newColors.shades.kovBlack50};
  }
`;

