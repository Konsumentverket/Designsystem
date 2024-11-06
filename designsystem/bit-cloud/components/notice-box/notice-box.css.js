import { css } from "@emotion/core";
import { newColors, colors, spacing, medium, typography } from '@konsumentverket-sverige/designsystem.utils';

export const wrapperStyling = css`
    width: 100%;
    background-color: ${newColors.secondaries.lightGreen};
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

export const tagMargin = css`
  margin-top: 32px; // 24px + 8px

  ${medium} {
    margin-top: 45px; // 32px + 13px
  }
`;

export const articleEntryMarginStyling = css`
  margin-bottom: 32px;

  ${medium} {
    margin-bottom: 40px;
  }
`;

export const titleStyling = css`
    color: ${newColors.primaries.kovBlack};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 24px 0;
`;

export const iconWrapper = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc((28.51px / 2) * -1);
  left: calc((23.33px / 2) * -1);
  background-color: ${newColors.validation.success};
  border-radius: 100vmax;
  width: 32px;
  height: 32px;
`;

export const iconColor = css`
  fill: ${newColors.secondaries.lightGreen};
`;