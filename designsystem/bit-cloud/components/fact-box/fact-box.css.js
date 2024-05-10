import { css } from "@emotion/core";
import { newColors, colors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
    width: 100%;
    background-color: ${newColors.primaries.lightOrange};
    border-radius: 8px;
    padding: ${spacing.m} ${spacing.s} ${spacing.m} ${spacing.s};

    ${medium} {
        padding: ${spacing.l} ${spacing.s} ${spacing.l} ${spacing.s};
    }

    ul {
        padding-left: 0;
        margin: 0;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 24px;
            font-size: 20px;
            line-height: 1.4;

            &:before {
                content: '';
                width: 9px;
                height: 9px;
                display: inline-block;
                margin: 0 16px 2px 0;
                border-radius: 50%;
                background-color: ${newColors.secondaries.fullGrey};
            }
        }
    }
`;

export const title = css`
    color: ${newColors.primaries.kovBlack};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 24px 0;
`;