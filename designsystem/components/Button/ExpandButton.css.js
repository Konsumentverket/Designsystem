import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const expandButton = css`
    background-color: ${colors.natural.isabelline};
    border-radius: 28px;
    width: 100%;
    display:flex;
    text-align: center;
    padding-right:10px;
    padding-left:10px;
    min-height: 56px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-width: 0;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`;

export const arrow = css`
    display: flex;
    vertical-align: middle;
    height: 30px;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
`;

export const showLessArrow = css`
    transform: rotate(180deg);
`;

export const buttonContent = css`
    font-size: 19px;
    font-weight: 500;
    color: ${colors.profile['blue-mid']};
    display: flex;
    vertical-align: middle; 
    text-align: center;
`;