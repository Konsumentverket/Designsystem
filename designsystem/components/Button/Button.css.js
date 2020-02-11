import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';

const disabled = css` 
        color:${colors.common.grayDark};
        background-color: ${colors.theme3.midLight};
        text-decoration:none;
        box-shadow:none;
        cursor:inherit;
`;

export const buttonStyle = css`
    font-size:2.1rem;
      line-height:2.4rem;
      font-weight:500;
      padding:1.6rem 2.4rem;
      color: ${colors.common.white};
      border-radius:.8rem;
      cursor:pointer;
      background-color:${colors.theme1.mid};
      &:hover {
        background-color:${colors.theme1.midDark};
        text-decoration:underline;
      }
      &:active{
        background-color:${colors.theme1.xDark};
        text-decoration:underline;
      }
      &:disabled{
        ${disabled}
      }
`;

export const secondaryStyle = css`
    background-color:transparent;
    color:${colors.theme1.mid};
    box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};

    &:hover {
        background-color:${colors.theme1.midLight};
        text-decoration:underline;
        border-color:${colors.theme1.xDark};
        color:${colors.theme1.mid};
    }
    &:active {
        color:${colors.common.white};
        background-color:${colors.theme1.xDark};
        box-shadow:none;
    }
    &:disabled{
        ${disabled}
    }
`;

export const invertedBackgroundStyle = css`
    &:hover, &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
`;

export const invertedSecondaryBackgroundStyle = css`
    box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    color: ${colors.common.white};
    &:hover, &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:hover {
        background-color:${colors.theme1.midDark};
        color:${colors.common.white};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
    &:disabled {
        ${disabled}
    }
`;

export const buttonIconLeft = css`
        position:relative;
        padding-left:4.8rem;
        svg{
            left:1.6rem;
        }
`

export const buttonIconRight = css`
        position:relative;
        padding-right:4.8rem;
        svg {
            right:1.6rem;
        }
`


export const iconStyle = css`
    position:absolute; 
    fill:${colors.common.white};
    width: 2.4rem;
    height: 2.4rem;
    top: calc(50% - 1.2rem);
    vertical-align: top;
`


/*
export const mediumStyle = css`
    padding: 1.3rem 5.8rem;
    font-size: 2.1rem;
    line-height: 18px;
    svg{
        width: 18px;
        height: 18px;
    }
`;

export const largeStyle = css`
    padding: 1.1rem 5.8rem;
    font-size: 2.4rem;
    line-height: 24px;
    svg{
        width: 24px;
        height: 24px;
    }
`

export const secondaryStyle = css`
    background-color: ${colors.common.white};
    color: ${colors.theme1.mid};
    &:active{
        text-decoration: underline;
        background-color: ${colors.theme1.xDark};
        color: #fff;
    }
    &:hover{
        border-color: ${colors.common.black};
        background-color: ${colors.theme1.light};
        color: ${colors.theme1.mid};
    }
`


export const selectedStyle = css`
    background-color: ${colors.theme1.mid};
    color: ${colors.common.white};
`
export const iconStyle = (position) => css`
    
    fill:#fff;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin: ${position == "right" ? '0 0 0 0.8rem ' : '0 0.8rem 0 0'};

`

export default css`
    padding: 1.0rem 4.8rem;
    background-color: ${colors.theme1.mid};
    border: 2px solid ${colors.theme1.mid};
    border-radius: 0.8rem;
    color: ${colors.common.white}; 
    line-height: 1.6rem;
    font-size: 16px;
    user-select: none;


    &:hover{
        border-color: ${colors.common.black};
        background-color: ${colors.theme1.mid};
        color: ${colors.common.white};
        text-decoration: underline;
    }
    &:active{
        text-decoration: underline;
        background-color: ${colors.theme1.xDark};
    }
    &:focus{
        border-color: ${colors.common.black};
        text-decoration: underline;
    }
    &[disabled]{
        background-color:  ${colors.common.grayLight};
        border-color: ${colors.common.grayLight};
        color: ${colors.common.black}
        svg{
            fill: ${colors.common.black};
        }
    }

`

*/




