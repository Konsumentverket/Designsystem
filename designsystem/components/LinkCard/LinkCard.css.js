import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";

export const wrapper = css`
    background-color: #fff;
    border-radius: 0.8rem;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const mainLinkStyle = css`
    outline-offset: -2px;
    padding: 1.6rem ;
    box-sizing:border-box;
    box-shadow: none !important;
    text-decoration: none !important;
    min-height: 7.2rem;
    width: 100%;
    font-size: 2.1rem;
    display: flex;
    font-weight: 500 !important;
    justify-content: space-between;
    align-items: center;

    svg{
        flex-shrink: 0;
        height: 3.2rem;
        width: 3.2rem;
        position: relative;
        right: -1.4rem;
    }

`
export const rotateArrow = css`
    transform: rotate(270deg);
`

export const childrenWrapper = css`

    display: inline-flex;
    flex-direction:column;
    padding: 0 1.6rem 1.6rem 1.6rem;

`

export const showAllLink = css`
    font-size: 1.4rem;
    cursor: pointer;
    display: block;
    border-top: 1px solid ${colors.theme3.midLight};
    padding: .8rem 0 1.6rem 0;
    margin: 0 1.6rem;
    line-height: 2.4rem;
    margin-top: auto;
    
`

export const headingStyle = css`
    line-height: 2.4rem!important;
    margin-bottom: 0;

`