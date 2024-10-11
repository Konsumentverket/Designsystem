import { css } from '@emotion/core'
import { newColors, breakpoints } from '@konsumentverket-sverige/designsystem.utils';

export const eventBoxWrapper = css`
  display: flex;
  width: 100%;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  background-color: ${newColors.primaries.lightBlue};
`

export const eventBoxInfo = css`
  font-size: 1.6rem;
  line-height: 1.45;
  color: ${newColors.readingBlack};

  @media (min-width: ${breakpoints.m}) {
     font-size: 2rem;
  }

  span {
    font-weight: bold;
    display: block;
    @media (min-width: ${breakpoints.m}) {
      display: inline;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 12px;
    padding-top: 6px;
  }
  li {
    margin-bottom: 8px;
  }
`

export const eventBoxInfoContainer = css`
  margin-bottom: 10px;

  p:last-of-type {
    margin-bottom: 0;
  }
`
export const eventBoxDisclaimer = css`
  margin-top: 8px;
  font-size: 1.4rem;
  font-weight: 700;

  @media (min-width: ${breakpoints.m}) {
    font-size: 1.6rem;
  }
`
export const eventBoxApply = css`
  margin-top: 16px;

  &:empty {
    display: none;
  }
`

export const eventBoxOverdue = css`
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  margin-top: 16px;

  @media (min-width: ${breakpoints.s}) {
    align-items: center;
  }

  @media (min-width: ${breakpoints.m}) {
    font-size: 2.4rem;
  }

  svg {
    fill: ${newColors.readingBlack};
    margin-right: 8px;
    min-width: 24px;
    margin-top: -3px;

    @media (min-width: ${breakpoints.s}) {
      min-width: 30px;
      margin-top: 0;
    }
  }
`
