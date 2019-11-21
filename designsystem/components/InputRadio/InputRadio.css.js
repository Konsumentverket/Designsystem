import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';


export const fieldWrapper = css`

    width: 100%;
    background-color: ${colors.natural.isabelline};
    padding: 18px 0;
    position: relative;

`

export const fieldInput = css`

    appearance: none;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #999;
    background: #fff;
    margin: 0;
    margin-left: 24px;
    

    &:checked{
        outline: none;
        border: 4px solid #fff;
        background-color: #f59c00;        
    }

`

export const fieldLabel = css`
    vertical-align: middle;
    color: #464646;
    font-size: 21px;
    line-height: 24px;
    padding-left: 16px;
`