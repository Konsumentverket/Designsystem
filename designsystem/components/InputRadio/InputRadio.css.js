import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';


export const fieldWrapper = css`

    width: 100%;
    position: relative;
    border-radius: 0.8rem;
    border: 2px solid transparent;
    display:flex;
    align-items: center;
    background-color: ${colors.common.isabelline};
    &.inputHasValue{
        border: 2px solid ${colors.theme1.xDark};
    }

    &:hover{
        border: 2px solid ${colors.theme1.mid};
        .radiolabel {
            text-decoration: underline;
        }
    }
    
    &:focus-within{
        outline-offset: 2px;
        outline: 3px solid #F59C00;
    }
    

`

export const fieldInput = css`

    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: middle;
    border-radius: 50%;
    border: 2px solid ${colors.theme1.mid};
    background: #fff;
    margin: 0;
    margin-left: 2.4rem;
    margin-right: 1.6rem;
    flex-shrink: 0;
    

    &:checked{
        outline: none;
        border: 4px solid ${colors.theme1.xDark};
        background-color: ${colors.theme1.xDark};
        position: relative;
        
        &+label{ 
            text-decoration: underline;
            font-weight: 500;
            color: ${colors.theme1.xDark};
        } 

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
    color: #464646;
    width: 100%;
    font-size: 21px;
    line-height: 28px;
    padding: 18px 0; 
    display: flex;
`