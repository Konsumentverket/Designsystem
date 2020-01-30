/** @jsx jsx */
import { jsx } from '@emotion/core'
import {focusWrapper, pictureWrapper, textArea, focusHeadline, externalIcon, focusText, iconBackground, puffIcon, linkWrapper} from './FocusPuff.css'
import React from 'react';
import { EditorIcon } from '../Icon/EditorIcon'
import { Icon } from '../Icon/Icon'

export const FocusPuff = ({ headline,text,url,
  isExternalLink,
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
                    <EditorIcon icon={icon} style={puffIcon} />
                  </div>
    }
  }

  const puffMarkup = () => {
    return <div css={focusWrapper} className={'focusWrapper'}>
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

  return url !== null ? <a css={linkWrapper} href={url} className="noState">{puffMarkup(FocusPuff)}</a> : puffMarkup(FocusPuff)
  
  
}