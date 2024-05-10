import { css } from "@emotion/core";
import { newColors, colors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
    width: 100%;
    background-color: ${newColors.primaries.lightOrange};
    border-radius: 8px;
    padding: ${spacing.m} ${spacing.s};

    ${medium} {
        padding: ${spacing.l} ${spacing.l};
    }

    
    li, p {
        margin-bottom: 24px;
        font-size: 2.0rem;
        line-height: 1.4;
        padding-bottom: 0;
    }

    li:last-of-type,
    p:last-of-type {
        margin-bottom: 0;
    }

    ul {
        padding-left: 0;
        margin: 0;
        list-style: none;

        li {
            position: relative;

            &:before {
                content: '';
                width: 9px;
                height: 9px;
                display: inline-block;
                margin: 0 16px 2px 8px;
                border-radius: 50%;
                background-color: ${newColors.secondaries.fullGrey};

                ${medium} {
                    margin: 0 16px 2px 16px;
                }
            }
        }
    }
`;

export const titleStyling = css`
    color: ${newColors.primaries.kovBlack};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 24px 0;
`;