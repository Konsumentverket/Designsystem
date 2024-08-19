import { css } from '@emotion/core'
import {
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const typographyContainerStyle = css`

  &:last-child {
    margin-bottom: 0;
  }

  h2:not(.noStyle) {
    ${typography.h2}
  }

  h3:not(.noStyle) {
    ${typography.h3}
  }

  p:not(.noStyle) {
    ${typography.paragraph}

    strong, b {
      ${typography.paragraphStrong}
    }
  }

  a:not(.noStyle) {
    ${typography.link}

    &:hover {
      ${typography.linkHover}
    }

    &:focus {
      ${typography.linkFocus}
    }
  }

  ul:not(.noStyle) {
    ${typography.ulStyling}
  }

  ol:not(.noStyle) {
    ${typography.olStyling}
  }
`;
