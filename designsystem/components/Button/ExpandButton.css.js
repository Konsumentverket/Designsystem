import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const expandButton = css`
    background-color: ${colors.natural.isabelline};
    border-radius: 28px;
    width: 100%;
    display:table;
    text-align: center;
    padding-right:10px;
    padding-left:10px;
    min-height: 57px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-width: 0;
    cursor:pointer;
`;

export const arrow = css`
    vertical-align: middle;
    height: auto;
    width: 30px;
    fill: ${colors.profile['blue-mid']};
    margin-top:-2px;
`;

export const showLessArrow = css`
    transform: rotate(180deg);
`;

export const buttonContent = css`
    font-size: 19px;
    font-weight: 500;
    color: ${colors.profile['blue-mid']};
    display: table-cell; 
    vertical-align: middle; 
    text-align: center;
    display:inline-block;
    padding-right:10px;
`;