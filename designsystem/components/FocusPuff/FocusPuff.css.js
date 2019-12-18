import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { medium } from '../GlobalStyles/globalStyles'

export const flex = css`
  display: flex;
  flex-direction: column;
`

export const focusLink  = css`
`

export const focusWrapper = (isCampaign, isLink) => css`
  display: flex;
  flex: 1;
  border-radius: 0.8rem;
  background-color: #b50255;
  color: #fff;
  flex-flow: column;
  min-height: 28.8rem;
  margin-top:.8rem;
  box-sizing:content-box;

  ${isCampaign}{
    height: 48rem;
    ${medium} {
      flex-flow: row;
      height: 28.8rem;
    }
  }

  ${isLink}{
    &:hover{
      margin:-.4rem;
      padding-top:.8rem;
      border:solid .4rem ${colors.profile["blue-mid"]};
      overflow:hidden; 

      img {
          border-radius:0;
        }

       .iconBackground {
          border-radius:0;
       }
    }
  }
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
`

export const textArea = isCampaign => css`
  ${medium} {
    ${isCampaign}{
      max-width:32.8rem;
    }
  }
  margin: 2.4rem;
`

export const pictureWrapper = isCampaign => css`
  overflow: hidden;
  margin-top:-.8rem;

  ${isCampaign}{
    width: 100%;
    /*height: 24rem;*/
    ${medium} {
    }
  }

  picture {
    display:block;
  
  }
  img {
    display:block;
    width:100%;
    border-top-left-radius:.8rem;
    border-top-right-radius:.8rem;
  }

`

export const picElement = css`
  /* this is to make the "isIntersecting" have something to interrsect with */
  display: block;
  width: 100%;
  height: 100%;
`

export const picture = isCampaign => css`
  border-radius: 0.8rem;
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