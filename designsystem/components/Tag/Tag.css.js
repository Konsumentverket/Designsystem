import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const tagStyle = css`
    box-shadow:inset 0px 0px 0px 1px ${colors.profile['blue-mid']};
    border-radius:1.6rem;
    text-align: center;
    color: ${colors.profile['blue-mid']};
    padding: .4rem 1.6rem;
    display: table;
    min-height: 3rem;
    text-decoration: none;
    font-size:1.6rem;
    line-height:2.4rem;
    display:inline-block;
    vertical-align:middle;
    box-sizing:border-box;
    &:hover {
        background-color: ${colors.profile['blue-light']};
        box-shadow:inset 0px 0px 0px 1px ${colors.profile['blue-dark']};
        text-decoration:underline;
    }
    &:active {
        color:#fff;
        background-color: ${colors.profile['blue-dark']};
        box-shadow:none;
    }
`;

