import { css } from '@emotion/core'
import { colors } from '../Colors/Colors.js'

export const arrowStyle = css`
    position: absolute;
    top: 2rem;
    right: .5rem;
    vertical-align: middle;
    transform: rotate(270deg);
    height: 3.2rem;
    width: 3.2rem;
    fill: ${colors.theme1.mid};
`

export const iconStyle = css`
    position:absolute;
    top: calc((100% - 32px) / 2);
    left: 1.6rem;
    height: 3.2rem;
    width: 3.2rem;
    fill: ${colors.theme1.mid};
`;

export const iconCardStyle = css`
    background-color: ${colors.common.white};    
    min-height: 7.2rem;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    height:100%;
    flex-direction:column;
    border-radius: .8rem;
    border: 1px solid ${colors.theme1.mid};
    &:hover {
        background-color: ${colors.theme1.midLight};
        border-color: ${colors.theme1.xDark};
        span {
            text-decoration:underline;
        }
    }
    &:active 
    {   
        background-color: ${colors.theme1.xDark};
        border-color:${colors.theme1.xDark};
        span{
            color:#fff;
        }
        svg {
            fill:#fff;
        }
    }
`;

export const iconText = css`
        width:100%;
        height:100%;
        padding: .8rem 4rem .8rem 6.4rem;
        display: flex;
        flex-direction:column;
        box-sizing:border-box;
        justify-content:center;
        margin:0;
        color: ${colors.theme1.mid};
        line-height: 2.4rem;
        font-size: 2.1rem;
        font-weight: 500;
        word-wrap:break-word;
`;

export const topAreaIcon = css`
    padding-left: 5.6rem;
`;