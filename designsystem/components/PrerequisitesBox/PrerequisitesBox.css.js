import { css } from '@emotion/core'
import { medium } from '../GlobalStyles/globalStyles'
import { colors } from '../Colors/Colors'

export const wrapper = css`
  position: relative;
  background-color: ${colors.profile["blue-light"]};
  border-radius: 0.7rem;
  padding: 4rem 1.6rem 2.4rem 1.6rem;
  line-height: 1.8rem;
  margin: 1rem 0 5.6rem 0;
  ${medium} {
    padding: 2.4rem 3.2rem 2.4rem 3.2rem;
    margin: .8rem 0 0 .8rem;
  }
`


export const exclamationMarkImage = css`
  position: absolute;
  top: -1.6rem;
  left: 50%;
  width:4rem;
  height:4rem;
  transform: translate(-50%, 0);
  ${medium} {
    left: 1.2rem;
    top:-.8rem; 
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
    margin-bottom:.8rem; 
  }
`

export const content = css`
    font-size:1.8rem;
    line-height:3.2rem;

  p {
    margin-bottom:1.6rem;
  }

  a {
    font-weight:700;
    display:block;
    margin-top:.8rem;
  }
`

