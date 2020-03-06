import { css } from "@emotion/core";
import { colors } from '../Colors/Colors';

export const sourceStyle = css`
    padding: 2.8rem 3.2rem 2.4rem 3.2rem;
    background-color: ${colors.theme1.midLight};
    p > a {
        margin-bottom: 0;
        margin-left: 1.6rem;
    }
    p > a:first-of-type {
        margin-left: 0;
    }
    margin-bottom: 1.6rem;
    border-radius: .8rem;
`;

export const firstRow = css`
    padding-bottom: 2.4rem;
    border-bottom: .1rem solid ${colors.theme3.light};
    display: flex;
`;

export const secondRow = css`
    padding-top: 2.4rem;
    display: flex;
`;

export const buttonStyle = css`
    margin-left: 2.4rem;
    margin-top: -.4rem;
`;

export const rightAlign = css`
    display: inline-block;
    flex-grow: 1;
    text-align: right;
    font-size: 1.8rem;
`;