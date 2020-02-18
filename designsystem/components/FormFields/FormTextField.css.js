import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';

const disabled = css` 
        background-color: ${colors.theme3.xLight};
        text-decoration:none;
        box-shadow:inset 0px 0px 0px 1px ${colors.theme3.midLight};
        cursor:inherit;
        &::placeholder {
            color: ${colors.theme3.midLight};
        }
`;

export const fieldStyle = css`
    border-radius:.8rem;
    border:none;
    box-shadow:inset 0px 0px 0px 1px ${colors.theme3.mid};
    font-size:1.8rem;
    line-height:2.4rem;
    display:flex;
    flex-grow:1;
    padding: 1.6rem;
    color: ${colors.theme1.xDark};
    font-style:normal;
    font-weight:500;
    &::placeholder {
        font-style:italic;
        font-weight:400;
        color: ${colors.theme3.dark};
    }
    &:hover {
        box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};
    }
    &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.theme1.xDark};
    }
    &:disabled{
        ${disabled}
    }
`;


