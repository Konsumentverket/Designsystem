import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const tagStyle = css`
    border: 1px solid #48A5DF;
    border-radius: 35px;
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

    h3, h4, h5 {
        margin: 0px 10px 0 10px;
        font-size: 16px;
        font-weight: bold;
    }
`;