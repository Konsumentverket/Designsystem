import { css } from "@emotion/core";
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles';

export const sourceStyle = css`
    padding: 0rem 1.6rem 2.4rem 1.6rem;
    ${medium} {
        padding: 0rem 3.2rem 2.4rem 3.2rem;
    }

    a {
        font-size: 1.8rem;
        line-height: 3.2rem;
    }
    background-color: ${colors.theme1.light};
    ${medium} {
        p > a {
            margin-bottom: 0;
            margin-left: 1.6rem;
        }
        p > a:first-of-type {
            margin-left: 0;
        }
    }
    margin-bottom: 1.6rem;
    border-radius: .8rem;
`;

export const firstRow = css`
    p {
        padding-bottom: 0;
    }
    padding-bottom: 2rem;
    border-bottom: .1rem solid ${colors.theme3.light};
    display: flex;
    flex-direction: column;
    ${medium} {
        flex-direction: row;
    }
`;

export const secondRow = css`
    padding-top: 2.4rem;
    flex-direction: column;
    display: flex;
    ${medium} {
        flex-direction: row;
    }
`;

export const buttonStyle = css`
    font-size: 1.6rem;
    width: 7.2rem;
    height: 4rem;
    margin-left: 2.4rem;
    margin-bottom: 1.6rem;
    padding: 0 2.4rem;
    &:first-of-type {
        margin-left: 0;
    }
    ${medium} {
        font-size: 1.6rem;
        width: 7.2rem;
        padding: 0 2.4rem;
        &:first-of-type {
            margin-left: 2.4rem;
        }
        margin-left: 2.4rem;
        margin-bottom: 0;
        margin-top: -.4rem;
    }
`;

export const rightAlign = css`
    ${medium} {
        display: inline-block;
        flex-grow: 1;
        text-align: right;
        font-size: 1.8rem;
    }
`;