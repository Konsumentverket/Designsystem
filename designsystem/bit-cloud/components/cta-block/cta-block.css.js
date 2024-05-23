import { css } from '@emotion/core'
import { newColors, medium, large } from '@konsumentverket-sverige/designsystem.utils';


export const ctaWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-radius: 16px;
  background: ${newColors.kovWhite};
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
  overflow: hidden;

  ${medium} {
    max-width: 960px;
    flex-direction: row-reverse;
    align-items: stretch;
    gap: 24px;
  }
`

export const focusHeadline = css`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${newColors.kovBlue};
  margin-bottom: 1.6rem;

  ${medium} {
    font-size: 2.8rem;
    line-height: 1.5;
    margin-bottom: 3.2rem;
  }
`

export const focusText = css`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 16px;

  ${medium} {
    margin-bottom: 3.2rem;
  }

`

export const textArea = css`
  padding: 24px;

  ${medium} {
    width: 50%;
    padding: 32px;
  }

  button {
    width: auto;
    padding: 1.6rem 3.2rem 1.6rem 2.4rem;
  }

  a {
    text-decoration: none;
    justify-content: flex-start;

    svg {
      fill: ${newColors.shades.fullBlue};
    }
  }
`

export const pictureWrapper = css`
  overflow: hidden;

  ${medium} {
    width: 50%;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`


export const externalIcon = css`

`
