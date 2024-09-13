/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { ctaWrapper, focusHeadline, focusText, textArea, pictureWrapper } from './cta-block.css.js';

export const CtaBlock = ({
  headline,
  text,
  btn,
  image,
  imageAlt,
  icon,
  imageComponent,
  contentfulName,
  contentfulId
}) => {
  let imageclass = "";
  let imageArea = imageComponent;
  if (imageArea == null) {
    if (image != null) imageArea = <img src={image} alt={imageAlt} />;
    else if(icon != null) {
      imageArea = (
        <div>
          {icon}
        </div>
      );

      imageclass = "hasicon";
    }
  }

  if (imageArea == null) imageclass = "noimage";


    return (
      <div css={ctaWrapper} className={imageclass} data-comp="cta-block" data-contentful-field-id={contentfulName}
           data-contentful-entry-id={contentfulId}>
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={textArea} className='textarea'>
          <h3 css={focusHeadline}>
            {headline}
          </h3>
          <p css={focusText}>{text}</p>
          {btn}
        </div>
      </div>
    );
};
