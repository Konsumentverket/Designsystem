import { css } from '@emotion/core';
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles';

const disabled = css` 
        color:${colors.common.grayDark};
        background-color: ${colors.theme3.midLight};
        text-decoration:none;
        box-shadow:none;
        cursor:inherit;
        svg {
            fill:${colors.common.grayDark};
        }
`;

export const expandButtonStyle = css`
    font-size:2.1rem;
    line-height:2.4rem;
    font-weight:500;
    padding:1.6rem 2.4rem;
    color: ${colors.common.white};
    border-radius:3.2rem;
    width:100%;
    cursor:pointer;
    background-color:${colors.theme1.mid};

    svg {
        fill: ${colors.common.white};
    }

    ${medium}{
        width:auto;
    }

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

    svg {
        fill:${colors.theme1.mid}; 
    }
    &:hover {
        background-color:${colors.theme1.midLight};
        text-decoration:underline;
        border-color:${colors.theme1.xDark};
    }
    &:active {
        color:${colors.common.white};
        background-color:${colors.theme1.xDark};
        box-shadow:none;
        svg {
            fill:${colors.common.white}; 
        }
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
    svg {
            fill:${colors.common.white}; 
        }
    &:hover, &:active {
        box-shadow:inset 0px 0px 0px 1px ${colors.common.white};
    }
    &:hover {
        background-color:${colors.theme1.midDark};
    }
    &:active {
        background-color: ${colors.theme1.dark};
    }
    &:disabled {
        ${disabled}
    }
`;

export const iconStyle = css`
    padding: 0 0 0 .8rem;
    width:2.4rem;
    height:2.4rem;
    vertical-align: top;
`;

export const expandedIconStyle = css`
transform: rotate(180deg);
padding: 0 .8rem 0 0;
`;

/*
export const expandButton = css`
    background-color: ${colors.common.isabelline};
    border-radius: 28px;
    width: 100%;
    display:flex;
    text-align: center;
    padding-right:10px;
    padding-left:10px;
    min-height: 56px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-width: 0;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`;

export const arrow = css`
    display: flex;
    vertical-align: middle;
    height: 30px;
    width: 30px;
    fill: ${colors.theme1.mid};
`;

export const showLessArrow = css`
    transform: rotate(180deg);
`;

export const buttonContent = css`
    font-size: 19px;
    font-weight: 500;
    color: ${colors.theme1.mid};
    display: flex;
    vertical-align: middle; 
    text-align: center;
`;*/