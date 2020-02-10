import { css } from '@emotion/core'
import { spacing } from '../Spacing/Spacing';
import { colors } from '../Colors/Colors';


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

export const ctaStyle = css`
    background-color: ${colors.common.darkGreen};
    outline: none;
    border-color: ${colors.common.darkGreen};
    &:hover,&:focus{
        border-color: ${colors.common.black};
    }
    &:active{
        background-color: #004724;
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






