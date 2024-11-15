import { css } from "@emotion/core";
import { newColors, colors, spacing, medium, typography } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
    width: 100%;
    background-color: ${newColors.primaries.lightOrange};
    border-radius: 16px;
    padding: ${spacing.m} ${spacing.s};
    position: relative;
    margin-top: 24px;

    ${medium} {
        margin-top: 32px;
        padding: ${spacing.l} ${spacing.l};
    }


    li, p {
        ${typography.paragraphNoMargin};

        &:last-of-type {
            margin-bottom: 0;
        }
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
                border-radius: 50%;
                background-color: ${newColors.secondaries.fullGrey};
            }
        }
    }
`;

export const articleEntryMarginStyling = css`
  margin-bottom: 32px;

  ${medium} {
    margin-bottom: 40px;
  }
`;

export const titleStyling = css`
    color: ${newColors.primaries.kovBlue};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 24px 0;
`;

export const iconWrapper = css`
  position: absolute;
  top: calc((28.51px / 2) * -1);
  left: calc((23.33px / 2) * -1);
`;

export const iconColor = css`
  fill: ${newColors.primaries.fullBlue};
`;
