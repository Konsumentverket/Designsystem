import { css } from '@emotion/core'
import { spacing } from '../Spacing/Spacing';
import { colors } from '../Colors/Colors';


export const mediumStyle = css`
    padding: 1.3rem 5.8rem;
    font-size: 18px;
    line-height: 18px;
    svg{
        width: 18px;
        height: 18px;
    }
`;

export const largeStyle = css`
    padding: 1.1rem 5.8rem;
    font-size: 24px;
    line-height: 24px;
    svg{
        width: 24px;
        height: 24px;
    }
`

export const secondaryStyle = css`
    background-color: ${colors.profile.white};
    color: ${colors.profile["blue-mid"]};
    &:active{
        text-decoration: underline;
        background-color: ${colors.profile["blue-dark"]};
        color: #fff;
    }
`

export const ctaStyle = css`
    background-color: ${colors.ui.green};
    outline: none;
    border-color: ${colors.ui.green};
    &:hover,&:focus{
        border-color: ${colors.natural.black};
    }
    &:active{
        background-color: #004724;
    }
`

export const selectedStyle = css`
    background-color: ${colors.profile["blue-mid"]};
    color: ${colors.profile.white};
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
    background-color: ${colors.profile["blue-mid"]};
    border: 2px solid ${colors.profile["blue-mid"]};
    border-radius: 0.8rem;
    color: ${colors.profile.white}; 
    line-height: 1.6rem;
    font-size: 16px;
    user-select: none;


    &:hover{
        border-color: ${colors.natural.black};
        background-color: ${colors.profile["blue-mid"]};
        color: ${colors.profile.white};
    }
    &:active{
        text-decoration: underline;
        background-color: ${colors.profile["blue-dark"]};
    }
    &:focus{
        border-color: ${colors.natural.black};
        text-decoration: underline;
    }
    &[disabled]{
        background-color:  ${colors.natural["gray-light"]};
        border-color: ${colors.natural["gray-light"]};
        color: ${colors.natural.black}
        svg{
            fill: ${colors.natural.black};
        }
    }

`






