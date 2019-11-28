/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as css from './FocusPuff.css'
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
      imageArea = <img src={image} alt={imageAlt}  />
    else{
      imageArea = <div css={css.iconBackground}>
                    <Icon icon={icon || ""} style={css.icon} />
                  </div>
    }
  }


  return (
        <div css={css.innerContent(isCampaign)}>
          <div css={css.pictureWrapper(isCampaign)}>
            {imageArea}
          </div>
          <div css={css.textArea}>
            <h2 css={css.headline}>
              {headline}
              {isExternalLink && <Icon title="Extern länk" icon='External' style={css.externalIcon} />}
            </h2>
            <p css={css.text}>{text}</p>
          </div>
        </div>
  )
}