import { css } from '@emotion/core'
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

const disabled = css`
    color: ${newColors.secondaries.fullGrey};
    background-color: ${newColors.secondaries.lightGrey};
    text-decoration:none;
    box-shadow:none;
    cursor:inherit;
    svg {
        fill:${newColors.secondaries.fullGrey};
    }
`;

export const buttonStyle = css`
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 500;
    padding: 1.6rem 2.4rem;
    color: ${newColors.kovWhite};
    border-radius: 1.6rem;
    width:100%;
    box-sizing: border-box;
    cursor:pointer;
    background-color: ${newColors.primaries.fullBlue};

    svg {
        fill: ${newColors.kovWhite};
        flex-shrink: 0;
    }

    &:hover, &.selectedButtonStyle {
        background-color: ${newColors.shades.kovBlue50};
        text-decoration:underline;
    }
    &:active{
        background-color: ${newColors.shades.kovBlue75};
        text-decoration:underline;
    }
    &:disabled{
        ${disabled}
    }
`;

export const secondaryStyle = css`
    background-color: transparent;
    color: ${newColors.primaries.fullBlue};
    box-shadow: inset 0px 0px 0px 1px ${newColors.primaries.fullBlue};

    svg {
        fill: ${newColors.primaries.fullBlue};
    }
    &:hover, &.selectedButtonStyle {
        background-color: ${newColors.shades.lightBlue50};
        text-decoration: underline;
        border-color: ${newColors.primaries.fullBlue};
        box-shadow: inset 0 0 0 2px ${newColors.primaries.fullBlue};
    }
    &:active {
        color: ${newColors.kovWhite};
        background-color: ${newColors.shades.lightBlue};
        box-shadow: none;
        svg {
            fill: ${newColors.kovWhite};
        }
    }
    &:disabled{
        ${disabled}
    }
`;



export const smallStyle = css`
    padding: 0.8rem 2.4rem;
`;


export const linkStyles = css`
   border: none !important;
   padding: 0;
   background: none;
   text-decoration: underline;
   color: ${newColors.primaries.fullBlue};

   svg {
    fill: ${newColors.kovBlack};
   }

   &:hover {
    background: none;
   }
`;

export const linkStylesSmall = css`
  ${linkStyles}
  font-size: 1.6rem !important;
  svg {
        width: 1.8rem !important;
        height: auto;
        margin-left: .8rem !important;
        margin-right: .8rem !important;
     }
`;



export const buttonIconLeft = css`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2.4rem;
        height: auto;
        margin-right: 1.6rem;
     }
`

export const buttonIconRight = css`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 8px;
        height: auto;
        margin-left: 1.6rem;
    }
`

export const buttonIconOnly = css`
    svg {
        margin: 0 !important;
    }
`
