import { css } from "@emotion/core";
import { newColors, spacing } from '@konsumentverket-sverige/designsystem.utils';

export const wrapper = css`
  background-color: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 16px 24px 24px 24px;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  position: relative;

  & > * {
    z-index: 1;
  }
`


export const linkTextMainLinkStyle = css`
    padding: 2.4rem 1.6rem;

    &:hover {
    }

    .tabnav &:focus {

        > *{
            outline: none;
        }
    }
`

export const mainLinkStyle = css`
    padding: 1.6rem 0;
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
        width: 24px;
        height: 24px;
        right: unset !important;
        margin-right: ${spacing.s};
        fill: ${newColors.shades.fullBlue};

        .noLinkChildren & {
          margin-left: ${spacing.xs};
        }

        &:last-child {
          width: 18px;
          height: 18px;
          margin-left: 16px;
        }
      }
    }

    &:hover {
      background-color: ${newColors.primaries.lightBlue};
      border-radius: 0 !important;
      box-shadow: none !important;

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
    svg{
        flex-shrink: 0;
        height: 3.2rem;
        width: 3.2rem;
        position: relative;
        right: -1.4rem;
    }

`
export const rotateArrow = css`
    transform: rotate(0deg)!important;
`

export const childrenWrapper = css`
    display: inline-flex;
    flex-direction:column;
    padding: 0 0 1.6rem 0;

    a {
        font-weight: normal !important;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        font-size: 1.6rem !important;
        color: ${newColors.shades.fullBlue};
        padding: 8px 0px;

        &:hover {
            border-radius: 0 !important;
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

export const linkTextCardContentStyle = css`
    width: 100%;
    font-size: 1.8rem;
    line-height: 3.2rem;
    padding-right: 20%;
    font-weight: 400;
    margin-top: 1.6rem;
    display:block;
    [dir='rtl'] & {
        padding-left: 20%;
        padding-right: 0%;
    }
`

export const customFontSize = css`
    font-size: 2.1rem;
    line-height: 2.4rem;
    font-weight: 500;
    z-index: 1;
`
