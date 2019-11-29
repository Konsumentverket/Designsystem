import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';


export const fieldWrapper = css`

    width: 100%;
    padding: 18px 0;
    position: relative;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    display:flex;
    &:hover{
        border: 2px solid ${colors.profile["blue-mid"]};
    }

`

export const fieldInput = css`

    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: middle;
    border-radius: 50%;
    border: 2px solid ${colors.profile["blue-mid"]};
    background: #fff;
    margin: 0;
    margin-left: 2.4rem;
    flex-shrink: 0;
    

    &:checked{
        outline: none;
        border: 4px solid ${colors.profile["blue-mid"]};
        background-color: ${colors.profile["blue-mid"]};
        position: relative;
        
        &:before{
            content: "";
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            display:block;
            border: 2px solid #fff;
            background: transparent;
            position: absolute;
            top:-2px;
            left:-2px;
        }

    }

`

export const fieldLabel = css`
    vertical-align: middle;
    color: #464646;
    font-size: 21px;
    line-height: 28px;
    padding-left: 16px;
`