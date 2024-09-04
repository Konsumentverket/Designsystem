import { css } from '@emotion/core';
import { newColors, colors, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const tagStyle = css`
    box-shadow:inset 0px 0px 0px 1px ${newColors.shades.fullBlue};
    border-radius: ${spacing.l};
    color: ${newColors.shades.fullBlue};
    padding: ${spacing.xs} ${spacing.s};
    font-size: 1.6rem;
    line-height: 1.5;
    display: inline-block;
    text-decoration: none;

    &:hover {
        background-color: ${newColors.shades.lightBlue};
        box-shadow:inset 0px 0px 0px 1px ${newColors.shades.fullBlue};
    }

    &:active {
        background-color: ${newColors.shades.mediumBlue50};
    }
`;
