import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';

export const wrapperStyle = css` 
    position:relative;
    display:inline-block;

`;

export const labelStyle = css` 
    font-size:2.1rem;
    line-height:3.2rem;
    padding:.8rem .8rem .8rem 5.6rem;
    border-radius:.8rem;
    display:inline-block;
    &:hover {
        background-color:${colors.theme1.light};
        text-decoration:underline;
    }
`;

export const fieldStyle = css`
    position: absolute;
    top:.8rem;
    left:.8rem;
    appearance: none;
    height:3.2rem;
    width:3.2rem;
    border:solid 1px ${colors.theme1.mid};
    border-radius:.2rem;
    background-color:${colors.common.white};
    margin:0;

    &:checked {
        background-color: ${colors.theme1.xDark};
        border-color:${colors.theme1.xDark};
    }
    &::before{
        content: '\\2713';
        display: block;
        text-align: center;
        color: ${colors.common.white};
        position: absolute;
        height:3.2rem;
        width:3.2rem;
        font-size:2.2rem;
        font-weight: 700;
        line-height:3.2rem;
        left: 0;
        top: 0;
   }
   &:hover + label{
    background-color:${colors.theme1.light};
    text-decoration:underline;
   }
   &:checked + label {
    background-color:${colors.theme1.light};
    color:${colors.theme1.xDark};
    text-decoration:underline;
   }
`;

export const invertedLabelStyle = css`
    &:hover {
        background-color:${colors.common.white};
    }
`;

export const invertedfieldStyle = css`
    &:hover + label {
        background-color:${colors.common.white};
        color: ${colors.theme1.xDark};
    }
    &:checked + label {
        background-color:${colors.common.white};
    }
    
`;


