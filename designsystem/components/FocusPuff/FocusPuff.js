/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import {
	focusWrapper,
	pictureWrapper,
	textArea,
	focusHeadline,
	externalIcon,
	focusText,
	iconBackground,
	puffIcon,
	linkWrapper
} from './FocusPuff.css';
import External from '../Icons/SystemIcons/External/External';

const FocusPuff = React.forwardRef(({headline, text, url, isExternalLink, image, imageAlt, icon, imageComponent, onClick, style }, ref) => {

  let imageArea = imageComponent;

	if (!imageArea) {
		if (image)  {
      imageArea = <img src={image} alt={imageAlt} />
    } else {
      if(icon) {
        imageArea = React.isValidElement(icon) ? React.cloneElement(icon,{style:puffIcon}) : null
      }
		}
	}

  const puffMarkup = () => {
    return (
      <div css={[focusWrapper, style]} className={'focusWrapper'}>
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={textArea}>
          <h3 css={focusHeadline}>
            {headline}
            {isExternalLink && <External title="Extern länk" style={externalIcon} />}
          </h3>
          <p css={focusText}>{text}</p>
        </div>
      </div>
    )
  }

  return (
    <a css={linkWrapper} onClick={onClick} href={url} className="noStyle">
      {puffMarkup()}
    </a>
  )

});

FocusPuff.displayName = "FocusPuff"
export {FocusPuff}