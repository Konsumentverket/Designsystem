/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../Colors/Colors';

export const searchWrapperStyle = css`
    position:relative;
    display:flex;
    flex-direction: row;
    align-items: stretch;
    
    overflow:hidden;
    border-radius:.8rem;
`;

export const searchFieldInputStyle = css`
    background-color: ${colors.common.white};
    box-shadow:inset 0px 0px 0px 1px ${colors.theme3.mid};
    border-radius: .8rem 0 0 .8rem;
    border:none;
    font-size:1.8rem;
    line-height:3.2rem;
    display:flex;
    flex-grow:1;
    padding: 1.2rem 3.2rem 1.2rem 1.6rem;
    color: ${colors.theme1.xDark};
    font-style: normal;
    font-weight: 500;

    &:hover {
        box-shadow:inset 0px 0px 0px 1px ${colors.theme1.mid};
    }
    &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.theme1.xDark};
    }
    &::placeholder {
        font-style:italic;
        color: ${colors.theme1.dark};
    }
`;

export const searchFieldButtonStyle = css`
    width:auto;
    display:flex;
    border-radius: 0 .8rem .8rem 0;
`;
