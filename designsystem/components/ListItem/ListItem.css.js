import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'

export const wrapper = css`
  width: 100%;
  display: block;
  text-decoration: none;
  p {
    color: ${colors.theme3.dark};
  }
  font-weight: 500;
  &:hover {
    background-color: ${colors.theme1.midLight};
  }
  &:active {
    background-color: #dadbd9;
  }
  h3 {
    text-decoration: underline;
    color: ${colors.theme1.mid};
  }
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${colors.theme3.light};
`
export const news = css`
  font-size: 1.4rem;
  padding-bottom: 0.8rem;
  line-height: 2.4rem;
`

export const preambleStyle = css`
  padding-bottom: .8rem;
  font-size: 1.8rem;
  font-weight: 400;
`
export const bottomText = css`
  color: ${colors.theme3.mid};
  font-size: 1.4rem;
  padding-bottom: 0;
`

export const invertedLink = css`
  &:hover {
    background-color: ${colors.common.white};
  }
  &:active {
    background-color: ${colors.common.white};
    h3 {
      color: ${colors.theme1.xDark};
    }
  }
`