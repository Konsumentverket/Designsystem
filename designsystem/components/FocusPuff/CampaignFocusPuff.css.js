import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { medium } from '../GlobalStyles/globalStyles'


export const focusWrapper = css`
  color: #fff;
  min-height: 25.6rem;
  display:flex;
  height:100%;
  flex-direction:column;
  background-color: #b50255;
  margin-top:.8rem;
  border-bottom-right-radius:.8rem;
  border-bottom-left-radius:.8rem;
`

export const focusHeadline = css`
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0 0 .8rem 0;
`

export const focusText = css`
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

export const picElement = css`
  /* this is to make the "isIntersecting" have something to interrsect with */
  display: block;
  width: 100%;
  height: 100%;
`

export const picture = isCampaign => css`
  height: auto;
  width: 100%;
  ${isCampaign}{
    ${medium} {
      min-height: 28.8rem;
      margin: auto;
      width: auto;
    }
  }
`

export const iconBackground = css`
  border-top-right-radius: .8rem;
  border-top-left-radius:.8rem;
  display: flex;
  width: 100%;
  background-color: ${colors.profile['pink-light']};
  height: 16rem;
`

export const icon = css`
  padding-top: 2.9rem;
  margin: 0 auto;
  fill: #b50255;
  width: 6rem;
  height: 5.4rem;
`

export const externalIcon = css`
  position: relative;
  top: 0.2rem;
  margin-left: 0.4rem;
  fill: #fff;
`

export const link = css`
  display: block;
`;