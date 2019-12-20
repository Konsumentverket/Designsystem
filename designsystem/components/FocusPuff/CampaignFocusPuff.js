/** @jsx jsx */
import { jsx } from '@emotion/core'
import {focusWrapper, pictureWrapper, textArea, focusHeadline, externalIcon, focusText, iconBackground, picture, focusLink} from './CampaignFocusPuff.css'
import React from 'react';
import { Icon } from '../Icon/Icon'

export const FocusPuff = ({ headline,text,url,
  isCampaign, isExternalLink,
  image, imageAlt,
  icon,
  imageComponent
}) => {

  let imageArea = imageComponent;
  if(imageArea == null){
    if(image != null)
      imageArea = <picture><img src={image} alt={imageAlt} /></picture>     
    else{
      imageArea = <div className={'iconBackground'} css={iconBackground}>
                    <Icon icon={icon || ""} style={icon} />
                  </div>
    }
  }

  const puffMarkup = () => {
    return <div css={focusWrapper}>
    <div css={pictureWrapper}>
      {imageArea}
    </div>
    <div css={textArea}>
            <h2 css={focusHeadline}>
              {headline}
              {isExternalLink && <Icon title="Extern länk" icon='External' style={externalIcon} />}
            </h2>
            <p css={focusText}>{text}</p>
          </div>
  </div>
  }

  return url !== null ? <a href={url}>{puffMarkup(FocusPuff)}</a> : puffMarkup(FocusPuff)
  
  
}