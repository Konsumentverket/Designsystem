import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { medium, large } from '../GlobalStyles/globalStyles'


export const focusWrapper = css`
  min-height: 25.6rem;
  display:flex;
  height:100%;
  width:100%;
  flex-direction:column;
  background-color: #fff;
  /*margin-top:.8rem;*/
  border-bottom-right-radius:.8rem;
  border-bottom-left-radius:.8rem;
  ${medium}{
    flex-direction:row;
    margin-top:-.8rem;
    margin-left:.8rem;
    border-top-right-radius:.8rem;
  }
`

export const linkWrapper = css`
  text-decoration:none;
  padding-bottom:.8rem;
  display:flex;

  h2 {
    color: ${colors.profile['blue-mid']};
  }

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
  color:#000;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 .8rem 0;
`

export const focusText = css`
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin:0;
  padding:0;
  color:${colors.natural['gray']};
`

export const textArea = css`
  padding:1.6rem 2.4rem 2.4rem 2.4rem;
  box-sizing:border-box;
  ${medium} {   
      max-width:50.89%;  
      display:flex;
      justify-content:center;
      flex-direction:column;
      width:100%;
  }
  ${large} {   
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

  ${medium}{
    max-width:49.11%;
    margin-top:0;
    margin-left:-.8rem;
    img {
      border-top-right-radius: 0;
      border-bottom-left-radius:.8rem;
    }
  }

  ${large}{
    max-width:30.4rem;
  }
`

export const iconBackground = css`
  border-top-right-radius:.8rem;
  border-top-left-radius:.8rem;
  border-bottom-right-radius:0;
  background-color: ${colors.profile['pink-light']};
  position:relative;
  padding-top:36.84%;

  ${medium}{
    height:100%;
    padding-top:0;
    border-top-right-radius:0;
    border-bottom-left-radius: .8rem;
    border-bottom-right-radius:0;
  }
`


export const externalIcon = css`
  position: relative;
  top: 0.2rem;
  margin-left: 0.8rem;
  fill: ${colors.profile['blue-mid']};
  width:2rem;
`

export const puffIcon = css`
  position:absolute;
  fill: #b50255;
  width:6.4rem;
  height:6.4rem;
  left:calc(50% - 3.2rem);
  top:calc(50% - 3.2rem);
`;