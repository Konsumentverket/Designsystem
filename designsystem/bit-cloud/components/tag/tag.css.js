import { css } from '@emotion/core';
export const tagStyle = css`
    box-shadow:inset 0px 0px 0px 1px #0061C2;
    border-radius: 32px;
    color: #0061C2;
    padding: 8px 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    display: inline-block;
    text-decoration: none;

    &:hover {
        background-color: #DFF1FB;
        box-shadow:inset 0px 0px 0px 1px #0061C2;
    }

    &:active {
        background-color: #B9E1F6;
    }
`;
