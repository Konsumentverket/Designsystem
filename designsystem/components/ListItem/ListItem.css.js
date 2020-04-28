import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'

export const wrapper = css`
  display: block;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: ${colors.theme2.midLight};
  }
  &:active {
    background-color: #dadbd9;
  }
  h3 {
    text-decoration: underline;
    color: ${colors.theme1.mid};
  }
  margin-top: 1.6rem;
  border-bottom: 1px solid ${colors.theme3.light};
`
export const news = css`
  font-size: 1.4rem;
  padding-bottom: 0.8rem;
`

export const preambleStyle = css`
  margin-bottom: 2.4rem;
  font-size: 1.8rem;
`
export const bottomText = css`
  color: ${colors.theme3.mid};
  font-size: 1.4rem;
`