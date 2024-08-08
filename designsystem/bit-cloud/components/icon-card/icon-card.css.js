import { css } from '@emotion/core';
import { newColors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const chevronStyle = css`
    flex-shrink: 0;
    padding-right: .4rem;
    height: 24px;
    width: 24px;
    fill: ${newColors.shades.fullBlue};

    [dir='rtl'] &{
        left: .5rem;
        right: auto;
        transform: rotate(180deg);
    }
`

export const iconStyle = css`
    flex-shrink: 0;
    height: 24px;
    width: 24px;
    fill: ${newColors.shades.fullBlue};
`;

export const iconCardStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${newColors.shades.fullBlue};
    background-color: ${newColors.kovWhite};
    text-decoration: none;
    gap: ${spacing.s};
    padding: ${spacing.m} ${spacing.m};
    width: 100%;
    position: relative;
    border-radius: 16px;
    border: 1px solid ${newColors.shades.fullBlue};
    box-shadow: 0px 2px 12px 8px rgba(22, 34, 89, 0.10);
    height: 72px;

    span {
      line-height: 1.4;
    }

    &:hover {
        background-color: ${newColors.primaries.lightBlue};
        border: 1px solid ${newColors.shades.fullBlue};
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-thickness: 1px;

        span {
            text-decoration:underline;
        }
    }

    &:active
    {
        background-color: ${newColors.shades.fullBlue};
        box-shadow: none;

        span {
            color:#fff;
        }

        svg path,
        svg {
            fill: #fff;
        }
    }

    ${medium} {
        padding: 20px ${spacing.m};
    }
`;

export const altIconCardStyle = css`
    background-color: ${newColors.primaries.lightBlue};
    border: 1px solid ${newColors.primaries.mediumBlue};
`;

export const altLightIconCardStyle = css`
    background-color: ${newColors.shades.lightBlue50};
    border: 1px solid ${newColors.primaries.mediumBlue};
`;

export const iconTextStyle = css`
    width:100%;
    color: ${newColors.shades.fullBlue};
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: 500;
    word-wrap:break-word;


    ${medium} {
        font-size: 1.8rem;
    }
`;

