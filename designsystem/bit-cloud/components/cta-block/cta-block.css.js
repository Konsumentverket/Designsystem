import { css } from '@emotion/core'
import { newColors } from '@konsumentverket-sverige/designsystem.utils';


export const ctaWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  background: ${newColors.kovWhite};
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
`

export const focusHeadline = css`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${newColors.kovBlue};
  margin-bottom: 1.6rem;

  @media (min-width: 650px) {
    font-size: 2.8rem;
    line-height: 1.5;
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
    padding: 1.6rem 3.2rem 1.6rem 2.4rem;
  }

  a {
    width: fit-content;
    text-decoration: none;
    justify-content: flex-start;
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
