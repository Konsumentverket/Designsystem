import { css } from '@emotion/core'
import { spacing, newColors, medium } from '@konsumentverket-sverige/designsystem.utils';

export const iconStyle = css`
    svg {
        width: 2.4rem;
        height: 2.4rem;
        position: relative;
        flex-shrink: 0;

        ${medium} {
          width: 5.6rem;
          height: 5.6rem;
        }
    }
`


export const buttonStyle = css`
    display: flex;
    width: 44.4rem;
    padding: ${spacing.s};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${newColors.kovWhite};
    box-sizing: border-box;
    cursor: pointer;
    background-color: ${newColors.primaries.kovBlue};
    border-bottom: 2px solid ${newColors.shades.kovBlue50};

    ${medium} {
      font-size: 1.8rem;
      padding: ${spacing.xs};
    }

    &:last-of-type {
      border-bottom: none;
    }

    ${ iconStyle }

    &:hover, &.selectedButtonStyle {
        background-color: ${newColors.shades.kovBlue75};
        text-decoration: underline;
    }
    &:active{
        background-color:${newColors.shades.kovBlue50};
        text-decoration:underline;
    }
`;

export const buttonIconLeft = css`
    svg {
       margin-right: ${spacing.xs};
     }
`

export const buttonIconRight = css`
    svg {
        margin-left: ${spacing.xs};
    }
`

