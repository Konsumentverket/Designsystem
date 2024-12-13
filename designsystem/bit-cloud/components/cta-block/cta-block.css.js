import { css } from '@emotion/core'
import {newColors, typography} from '@konsumentverket-sverige/designsystem.utils';


export const ctaWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  overflow: hidden;

  @media (min-width: 650px) {
    min-width: 500px;
    max-width: 960px;
    flex-direction: row-reverse;
    align-items: stretch;
    gap: 24px;
  }

  .button--linkstyle {
    svg {
      fill: ${newColors.shades.fullBlue};
    }
  }

  a:not(.button--linkstyle) {
   @media (max-width: 450px) {
      width: 100%;
    }
  }
`

export const whiteBackground = css`
  background: ${newColors.kovWhite};
`

export const blueBackground = css`
  background: ${newColors.shades.lightBlue50};
`

export const greyBackground = css`
  background: ${newColors.shades.lightGrey25};
`

export const focusHeadline = css`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${newColors.kovBlue};
  margin-bottom: 1.6rem;

  @media (min-width: 650px) {
    font-size: 2.8rem;
    line-height: 1.4;
    margin-bottom: 3.2rem;
  }
`

export const focusText = css`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 16px;

  @media (min-width: 650px) {
    margin-bottom: 3.2rem;
  }
`

export const paragraphStyling = css`
  ${typography.paragraph};

  & {
    margin-bottom: 16px;
  }
`

export const textArea = css`
  padding: 24px;

  @media (min-width: 650px) {
    width: 50%;
    padding: 32px;

    .noimage & {
      width: 100%;
    }
  }

  button {
    width: auto;
    padding: 1.6rem 2.4rem;
  }

  a {
    width: fit-content;
    text-decoration: none;
    justify-content: flex-start;
  }
`

export const smallHeadlineStyle = css`
  ${typography.h3NoMargin};

  & {
    margin-bottom: 16px;
  }
`

export const smallPaddingStyle = css`
  padding: 24px 16px;

  @media (min-width: 650px) {
    padding: 24px;
  }
`

export const buttonRightStyle = css`
  a {
    width: auto;
    justify-content: center;

    @media (min-width: 650px) {
      width: fit-content;
      margin-left: auto;
    }
  }

  button {
    width: 100%;

    @media (min-width: 650px) {
      width: auto;
      margin-left: auto;
    }
  }
`

export const pictureWrapper = css`
  overflow: hidden;
  height: 280px;
  position: relative;
  width: 100%;

  .noimage & {
    display: none;
  }

  .hasicon & {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100px;
      height: 100px;
    }
  }

  img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
   }

  @media (min-width: 650px) {
    width: 50%;
    min-height: 100%;
    height: auto;
  }
`


export const externalIcon = css`

`
