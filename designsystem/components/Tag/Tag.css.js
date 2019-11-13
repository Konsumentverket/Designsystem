import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const tagStyle = css`
    border: 1px solid #48A5DF;
    border-radius: 16px;
    min-height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    color: ${colors.profile['blue-mid']};

    padding: 0 5px;
    background-color: transparent;
    background-color: rgba(#000000, 0.6);

    a, a:visited {
        text-decoration: none;
        color: ${colors.profile['blue-mid']};
    }

    h4 {
        margin: 0px 10px 0 10px;
        font-size: 16px;
        font-weight: bold;
    }
`;

export const tagStyle2 = css`
    border: 1px solid #48A5DF;
    border-radius: 16px;
    text-align: center;
    color: ${colors.profile['blue-mid']};
    padding: 0 5px;
    background-color: transparent;
    background-color: rgba(#000000, 0.6);
    display: table;
    min-height: 30px;

    a, a:visited {
        text-decoration: none;
        color: ${colors.profile['blue-mid']};
        display: table-cell;
        vertical-align: middle;
    }

    h4 {
        margin: 0px 10px 0 10px;
        font-size: 16px;
        font-weight: bold;
    }
`;