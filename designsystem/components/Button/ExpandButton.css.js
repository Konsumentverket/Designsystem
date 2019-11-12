import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const expandButton = css`
    background-color: ${colors.natural.isabelline};
    border-radius: 28px;
    width: 100%;
    display:block;
    text-align: center;
    min-height:57px;
    padding-right:10px;
    padding-left:10px;
    cursor:pointer;
    span {
        font-size: 19px;
        font-weight: 500;
        color: ${colors.profile['blue-mid']};
        display:inline-block;
        padding-right:10px;
    }
`;

export const expandArrow = css`
    vertical-align: middle;
    height: auto;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
    margin-top:-2px;
`;

export const showLessArrow = css`
    vertical-align: middle;
    height: auto;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
    margin-top:-2px;
    transform: rotate(180deg);
`;

export const buttonContent = css`
position: relative;
top: 50%;
transform: translateY(-50%);
`;