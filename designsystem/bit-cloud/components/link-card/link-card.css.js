import { css } from "@emotion/core";
import { newColors, spacing, medium } from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  position: relative;
  width: 100%;


  ${medium}{
     padding: 16px 24px 24px 24px;
  }

  & > * {
    z-index: 1;
  }

  p {
    font-size: 1.6rem;
    padding-bottom: 0;
  }
`


export const linkTextMainLinkStyle = css`
    padding: 2.4rem 1.6rem;

    .tabnav &:focus {

        > *{
            outline: none;
        }
    }
`

export const mainLinkStyle = css`
    box-sizing:border-box;
    text-decoration: none !important;
    border-bottom: 1px solid ${newColors.shades.mediumBlue};
    z-index: 1;

    & > * {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 16px 8px;
      line-height: 1.5;
      color: ${newColors.shades.fullBlue};
      font-size: 1.8rem !important;
      font-weight: 500;

      div {
        display: flex;
        align-items: center;
      }

      svg {
        width: 18px;
        height: 18px;
        right: unset !important;
        margin-right: ${spacing.s};
        fill: ${newColors.shades.fullBlue};
        z-index: 1;

        ${medium}{
          width: 24px;
          height: 24px;
        }

        .noLinkChildren & {
          margin-left: ${spacing.xs};
        }

        &:last-child {
          width: 18px;
          height: 18px;
          margin-left: 16px;
          margin-right: 0;
        }
      }
    }

    &:hover {
      background-color: ${newColors.primaries.lightBlue};
      border-radius: 0 !important;
      box-shadow: none !important;

      .noLinkChildren & {
          &:before {
            position: absolute;
            content: '';
            background-color: ${newColors.primaries.lightBlue};
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            cursor: pointer;
            border-radius: 16px;
            border: 1px solid ${newColors.primaries.fullBlue};
         }
      }


      h2 {
        text-decoration: underline!important;
      }
    }

    &:active {
        color: ${newColors.kovWhite}!important;

        h2, span {
            color: ${newColors.kovWhite}!important;
        }
        svg{
            fill: ${newColors.kovWhite}!important;
        }
    }

    .tabnav &:focus {
        outline: none;

        > * {
            outline: 4px solid ${newColors.shades.fullBlue};
            outline-offset: 6px;
        }
    }

    width: 100%;
    span{
        max-width: 84%;
    }
    [dir='rtl'] &{
        svg{
            right: 1.4rem;
        }
    }

`
export const rotateArrow = css`
    transform: rotate(0deg)!important;
`

export const childrenWrapper = css`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 0 1.6rem 0;
    max-height: 160px;
    overflow: hidden;

    a {
        display: inline-flex;
        align-self: stretch;
        font-weight: normal !important;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        font-size: 1.6rem !important;
        color: ${newColors.shades.fullBlue};
        padding: 8px 8px 8px 0;
        max-width: 100%;
        width: 27.2rem;
        margin-right: 24px;

        &:hover {
            border-radius: 2px !important;
            background-color: ${newColors.shades.lightBlue};
        }


        svg {
          margin-right: 8px;
          fill: ${newColors.shades.fullBlue};
        }
    }
`

export const showAllLink = css`
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    line-height: 2.4rem;
    align-self: flex-end;
`



export const customFontSize = css`
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    z-index: 1;
    color: ${newColors.shades.fullBlue};

    ${medium}{
      font-size: 1.8rem;
    }
`
