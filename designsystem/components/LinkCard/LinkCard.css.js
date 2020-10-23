import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";
import { spacing } from "../Spacing/Spacing";

export const wrapper = css`
    background-color: #fff;
    border-radius: 0.8rem;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`

export const linkTextWrapper = css`
    overflow: visible;
`

export const linkTextMainLinkStyle = css`
    .tabnav &:focus {
        outline: 4px solid ${colors.states.focus};
        
        > *{
            outline: none;
        }
    }
    padding: 2.4rem 1.6rem;
`

export const mainLinkStyle = css`
    padding: 1.6rem;
    box-sizing:border-box;
    text-decoration: none !important;
    
    &:hover{
        border-radius: .8rem .8rem 0 0 !important;
        box-shadow: none !important;
        h2 {
            text-decoration: underline!important;
        }
    }
    &:visited {
        color: ${colors.theme1.mid}!important;
        svg{
            fill: ${colors.theme1.mid}!important;
        }
    }
    &:active {
        background-color: ${colors.theme1.xDark}!important;
        color: ${colors.common.white}!important;
        h2, span {
            color: ${colors.common.white}!important;
        }
        svg{
            fill: ${colors.common.white}!important;
        }
    }

    .tabnav &:focus {
        outline: none;

        > *{
            outline: 4px solid ${colors.states.focus};
            outline-offset: 6px;
        }
    }



    width: 100%;
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
        transform: rotate(-90deg);
    }

`
export const rotateArrow = css`
    transform: rotate(0deg)!important;
`

export const childrenWrapper = css`

    display: inline-flex;
    flex-direction:column;
    padding: 0 0 1.6rem 0;
    a{
        font-weight: normal !important;
        &:hover{
            border-radius: 0 !important;
        }
    }

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
    a{
        font-weight: 500 !important;
    }
    
`

export const innerTextWrapperStyle = css`
    line-height: 2.4rem!important;
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 2.1rem;
    display: flex;
    font-weight: 500 !important;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: ${colors.theme1.mid};

`

export const linkTextCardContentStyle = css`

    width: 100%;
    font-size: 1.8rem;
    line-height: 3.2rem;
    padding-right: 20%;
    color: ${colors.theme3.dark};
    font-weight: 400;
    margin-top: 1.6rem;
    display:block;
    [dir='rtl'] & {
        padding-left: 20%;
        padding-right: 0%;
    }

`

export const customFontSize = css` 
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 500;

`