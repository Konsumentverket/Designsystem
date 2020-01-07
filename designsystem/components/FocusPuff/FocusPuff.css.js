import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { medium, large } from '../GlobalStyles/globalStyles'


export const focusWrapper = css`
  min-height: 25.6rem;
  display:flex;
  height: calc(100% - .8rem);
  width:100%;
  flex-direction:column;
  background-color: ${colors.profile['pink-dark']};
  /*margin-top:.8rem;*/
  border-bottom-right-radius:.8rem;
  border-bottom-left-radius:.8rem;

  /*${medium} {
    height:100%
  }*/
`

export const linkWrapper = css`
  text-decoration:none;
  padding-bottom:.8rem;
  display:flex;

  &:hover .focusWrapper {
      background-color: ${colors.states['pink-hover']};      
  }
  &:active .focusWrapper {
      background-color: ${colors.states['pink-active']};      
  }
  &:hover h2, &:active h2 {
    text-decoration:underline;
  }
  
  ${medium} {
    height:100%
  }

`

export const focusHeadline = css`
  color: #fff;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 .8rem 0;
`

export const focusText = css`
  color: #fff;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin:0;
  padding:0;
`

export const textArea = css`
  margin:1.6rem 2.4rem 2.4rem 2.4rem;
  ${medium} {
    
      max-width:32.8rem;
  }
`

export const pictureWrapper = css`
  margin-top:-.8rem;
  width:100%;
  min-height:11.2rem;

  picture {
    display:block;
    width:100%;
    min-height:5rem;
  }
  img {
    display:block;
    width:100%;
    height:auto;
    border-top-right-radius: .8rem;
    border-top-left-radius:.8rem;
  }

`

export const iconBackground = css`
  border-top-right-radius: .8rem;
  border-top-left-radius:.8rem;
  background-color: ${colors.profile['pink-light']};
  padding-top:36.84%;
  position:relative;
  
`


export const externalIcon = css`
  position: relative;
  top: 0.2rem;
  margin-left: 0.4rem;
  fill: #fff;
`

export const puffIcon = css`
  position:absolute;
  fill: #b50255;
  width:6.4rem;
  height:6.4rem;
  left:calc(50% - 3.2rem);
  top:calc(50% - 3.2rem);
`;