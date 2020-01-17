import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';

export const tagBlockItem = css`
    background-color:${colors.natural['isabelline']};    
    display:flex;
    flex-direction:column;
    height:100%;
    min-height:16rem;
    border-radius:.8rem;
    overflow:hidden;

`;

export const invertedTag = css`
    background-color:#fff;
`;

export const tagLink = css`
    background-color: ${colors.profile['blue-mid']};    
    min-height: 7.2rem;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content:center;
    flex-direction:column;

    &:hover {
        background-color: ${colors.profile['blue-mid-dark']};
           .tagHeading{
                text-decoration:underline;
            }
    }
    &:active 
    {   
        background-color: ${colors.profile['blue-dark']};
        border-color:${colors.profile['blue-dark']};
        span{
            color:#fff;
        }
        svg {
            fill:#fff;
        }
    }
`;

export const tagHeading = css`
        width:100%;
        height:100%;
        padding: .8rem 4rem .8rem 1.6rem;
        display: flex;
        flex-direction:column;
        box-sizing:border-box;
        justify-content:center;
        margin:0;
        color: #fff;
        line-height: 2.4rem;
        font-size: 2.1rem;
        font-weight: 500;
        word-wrap:break-word;

`;

export const tagIconHeading = css`     
        padding: .8rem 4rem .8rem 6.4rem;
`;

export const tagsArea = css`
     position: relative;
    min-height:6.9rem;
    box-sizing:border-box;
    overflow: auto;
    padding: .8rem 1.6rem 0 1.6rem;
`;

export const tagsList = css`
    margin:0;
    padding:0;
    align-items: center;
    align-content: center;
    display: flex;
    flex-flow: wrap;
`;

export const tagsListItem = css`
    margin:0 1.6rem .8rem 0;
    list-style-type:none;
    &:before{
        content:none !important;
    }
    &:last-child{
        margin-right:0;
    }
`;

export const tagItem = css`
    
`;

export const tagItemText = css`
    font-size:1.4rem;
    line-height:2.4rem;
    padding: 0 0 .8rem 0;
`;

export const iconStyle = css`
    position:absolute;
    top: 2rem;
    left: 1.6rem;
    height: 3.2rem;
    width: 3.2rem;
    fill: #fff;
`;

export const arrowStyle = css`
        position: absolute;
    top: 2rem;
    right: .5rem;
    vertical-align: middle;
    transform: rotate(270deg);
    height: 3.2rem;
    width: 3.2rem;
    fill: #fff;
`;




