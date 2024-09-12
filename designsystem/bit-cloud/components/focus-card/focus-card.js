/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

import {
  focusCardStyle,
  focusCardDarkStyle,
  focusCardTextSectionStyle,
  focusCardTitleStyle,
  focusCardTextStyle,
  focusCardIconSectionStyle,
  focusCardIconDarkSectionStyle,
  focusCardChevronIconStyle,
} from './focus-card.css.js';

import { Icon } from '@konsumentverket-sverige/designsystem.icon';

export const FocusCard = ({
  title,
  headline,
  text,
  url,
  dark = false,
  linkComponent: LinkComponent = 'a',
}) => {

  return (
    <LinkComponent
      className={"noStyle"}
      css={[focusCardStyle, dark && focusCardDarkStyle]}
      href={url}
      data-comp="focus-card"
      injected={true}
    >
      <div css={focusCardTextSectionStyle}>
        {title && (<h3 css={focusCardTitleStyle} className="focusCardTitle">{title}</h3>)}
        {headline && (<h3 css={focusCardTitleStyle} className="focusCardTitle">{headline}</h3>)}
        {text && (<p css={focusCardTextStyle}>{text}</p>)}
      </div>
      <div css={[focusCardIconSectionStyle, !dark && focusCardIconDarkSectionStyle]} className="focusCardIconSection">
        <Icon
          title={"Pil till höger"}
          icon="MonoArrowRight"
          css={focusCardChevronIconStyle}
        />
      </div>
    </LinkComponent>
  );
};