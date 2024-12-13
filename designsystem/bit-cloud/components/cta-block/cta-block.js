/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import {
  ctaWrapper,
  whiteBackground,
  blueBackground,
  greyBackground,
  focusHeadline,
  focusText,
  textArea,
  buttonRightStyle,
  pictureWrapper,
  smallPaddingStyle,
  smallHeadlineStyle,
  paragraphStyling
} from './cta-block.css.js';

export const CtaBlock = ({
  headline,
  text,
  btn,
  image,
  imageAlt,
  icon,
  backgroundColor= "White",
  imageComponent,
  contentfulName,
  contentfulId,
  contactCta = false,
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

  const validBackgroundColors = {
    White: whiteBackground,
    Blue: blueBackground,
    Grey: greyBackground
  };

  const selectedBackgroundColor = validBackgroundColors[backgroundColor] || whiteBackground;

    return (
      <div css={[ctaWrapper, selectedBackgroundColor]} className={imageclass} data-comp="cta-block" data-contentful-field-id={contentfulName}
           data-contentful-entry-id={contentfulId}>
        <div css={pictureWrapper} className={imageComponent ? 'image' : null}>{imageArea}</div>
        <div css={[
          textArea,
          contactCta ? buttonRightStyle : null,
          contactCta ? smallPaddingStyle : null,
        ]} className='textarea'>
          <h2 css={[
            contactCta ? smallHeadlineStyle : focusHeadline
          ]}>
            {headline}
          </h2>
          <p css={[
           contactCta ? paragraphStyling : focusText
          ]}>
            {text}
          </p>
          {btn}
        </div>
      </div>
    );
};
