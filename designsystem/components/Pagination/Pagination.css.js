import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";

export const paginationWrapperStyle = css`

    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const pageStyle = css`
    height: 5.6rem;
    width: 6.0rem;
    line-height: 5.6rem;
    border: 1px solid ${colors.theme1.mid};
    border-radius: 8px;
    display: inline-block;
    font-size: 2.1rem;
    text-align:center;
    text-decoration: none !important;
    margin: 0 1.2rem;

`

export const prevPageStyle = css`
    margin-right: auto;
    font-size: 1.8rem;
`

export const nextPageStyle = css`
    margin-left: auto;
    font-size: 1.8rem;
`

export const prevPageStyleHidden = css`
    visibility: hidden;
`

export const distanceIndicatorStyle = css`
    font-size: 2.1rem;
    color: ${colors.theme1.mid};
    font-weight: 500;

`

export const currentPageStyle = css`

    background-color:${colors.theme1.dark};
    color: #fff!important;

    &:hover{
        color: ${colors.theme1.mid}!important;
    }


`

