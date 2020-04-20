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

export const linkTextMainLinkStyle = css`
    padding: 2.4rem 1.6rem;
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
    flex-wrap: wrap;
    span{
        max-width: 84%;
    }
    [dir='rtl'] &{
        svg{
            right: 1.4rem;;
            transform: rotate(90deg);
        }
    }
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

export const linkTextCardContentStyle = css`

    width: 100%;
    font-size: 1.8rem;
    line-height: 3.2rem;
    padding-right: 20%;
    color: ${colors.theme3.dark};
    font-weight: 400;
    margin-top: 1.6rem;
    [dir='rtl'] & {
        padding-left: 20%;
        padding-right: 0%;
    }

`