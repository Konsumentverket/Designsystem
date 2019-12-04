import { css } from '@emotion/core'
import { colors } from '../Colors/Colors'
import { medium } from '../GlobalStyles/globalStyles'

export const flex = css`
  display: flex;
  flex-direction: column;
`

export const focusWrapper = css`
  display: flex;
  flex: 1;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: #b50255;
  color: #fff;
  margin-bottom: 2.4rem;
  flex-flow: column;
  min-height: 28.8rem;
`

export const CampaignfocusWrapper = css`
 
    flex-flow: column;
    height: 48rem;
    ${medium} {
      flex-flow: row;
      height: 28.8rem;
      overflow: hidden;
    }
`


export const focusHeadline = css`
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin: 0;
`

export const focusText = css`
  font-size: 1.8rem;
  line-height: 3.2rem;
`

export const textArea = isCampaign => css`
  ${medium} {
    ${isCampaign && 'max-width:32.8rem;'}
  }
  margin: 2.4rem;
`

export const pictureWrapper = css`
  overflow: hidden;
  height: 12rem;
`

export const campaignPictureWrapper = css`
  width: 100%;
    height: 24rem;
    ${medium} {
      min-height: 28.8rem;
      width: 29.8rem;
    }
`



export const picElement = css`
  /* this is to make the "isIntersecting" have something to interrsect with */
  display: block;
  width: 100%;
  height: 100%;
`

export const picture = isCampaign => css`
  border-radius: 0.7rem;
  ${isCampaign ? `
    height: auto;
    width: 100%;
    ${medium} {
      min-height: 28.8rem;
      margin: auto;
      width: auto;
    }
    ` : `
    height: auto;
    width: 100%;
  `}
`

export const iconBackground = css`
  border-radius: 0.7rem;
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