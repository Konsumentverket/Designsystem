import { css } from '@emotion/core'
import { medium } from '../GlobalStyles/globalStyles'
import { colors } from '../Colors/Colors'

export const wrapper = css`
  position: relative;
  background-color: ${colors.profile["blue-light"]};
  border-radius: 0.7rem;
  padding: 4.8rem 2.4rem .8rem 2.4rem;
  line-height: 1.8rem;
  margin: 1rem 0 5.6rem 0;
  ${medium} {
    padding: 2.4rem 3.2rem 1.6rem 3.2rem;
    margin: 1rem 1.7rem 4.8rem 1.7rem;
  }
`


export const exclamationMarkImage = css`
  position: absolute;
  top: -.8rem;
  left: 50%;
  width:4rem;
  height:4rem;
  transform: translate(-50%, 0);
  ${medium} {
    left: 0.4rem;
  }
`

export const heading = css`
  color: #000;
  display:inline-block;
  font-size: 2.1rem;
  line-height:3.2rem;
  margin-bottom:1.6rem;
  font-weight:700;
  ${medium} {
    font-size:1.8rem;
    line-height:2.4rem;
  }
`

export const content = css`
    font-size:1.8rem;
    line-height:3.2rem;
`

