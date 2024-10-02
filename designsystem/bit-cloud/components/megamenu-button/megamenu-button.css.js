import { css } from '@emotion/core'
import { spacing, small, newColors, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const iconStyle = css`
    svg {
        width: 4.8rem;
        height: 4.8rem;
        position: relative;
        flex-shrink: 0;
        padding: 8px;

        @media (min-width: ${breakpoints.m}) {
          width: 5.6rem;
          height: 5.6rem;
        }

    }
`


export const buttonStyle = css`
    display: flex;
    width: 100%;
    max-width: 100%;
    padding: ${spacing.xs};
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
    border-bottom: 1px solid ${newColors.shades.kovBlue50};

    @media (min-width: ${breakpoints.m}) {
      padding: ${spacing.s};
      border-bottom: 2px solid ${newColors.shades.kovBlue50};
      width: 44.4rem;
      font-size: 1.8rem;
      padding: ${spacing.xs};
    }

    &:last-of-type {
      @media (min-width: ${breakpoints.m}) {
        border-bottom: none;
      }
    }

    &:first-of-type {
      ${small} {
        border-top: 1px solid ${newColors.shades.kovBlue50};
      }
    }

    ${ iconStyle }

    &:focus {
      outline-offset: -4px;
    }

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

