/** @jsx jsx */
import { jsx } from '@emotion/core'
import {focusWrapper, CampaignfocusWrapper, pictureWrapper, campaignPictureWrapper, textArea, focusHeadline, externalIcon, focusText, iconBackground, picture, icon} from './FocusPuff.css'
import React from 'react';
import { Icon } from '../Icon/Icon'

export const FocusPuff = ({ headline,text,
  isCampaign, isExternalLink,
  image, imageAlt,
  icon,
  imageComponent
}) => {
  
  let imageArea = imageComponent;
  if(imageArea == null){
    if(image != null)
      imageArea = <img src={image} alt={imageAlt} css={picture(isCampaign)}  />
    else{
      imageArea = <div css={iconBackground}>
                    <Icon icon={icon || ""} style={icon} />
                  </div>
    }
  }


  return (
        <div css={[focusWrapper, isCampaign ? CampaignfocusWrapper : null]}>
          <div css={[pictureWrapper, isCampaign ? campaignPictureWrapper : null ]}>
            {imageArea}
          </div>
          <div css={textArea(isCampaign)}>
            <h2 css={focusHeadline}>
              {headline}
              {isExternalLink && <Icon title="Extern länk" icon='External' style={externalIcon} />}
            </h2>
            <p css={focusText}>{text}</p>
          </div>
        </div>
  )
}