import { css } from "@emotion/core";
import { colors, medium, spacing, typography } from '@konsumentverket-sverige/designsystem.utils';

export const sourceStyle = css`
  p {
    ${typography.textSmall};
  }
`;

export const secondRow = css`
    flex-direction: column;
    display: flex;
    padding: 16px 0;
    ${typography.textSmall};

    a {
        ${typography.linkSmall};
    }

    ${medium} {
        flex-direction: row;
    }
`;

export const rightAlign = css`
    margin-top: ${spacing.xs};

    ${medium} {
        margin-top: 0;
        display: inline-block;
        flex-grow: 1;
        text-align: right;
    }
`;

export const sourceLink = css`
    ${typography.linkSmall};

    svg {
        position: relative;
        top: 1px;
        left: 8px;
    }
`
