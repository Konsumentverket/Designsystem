/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
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
}) => {

  return (
    <a className={"noStyle"} css={[focusCardStyle, dark && focusCardDarkStyle]} href={url} data-comp="focus-card">
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
    </a>
  );
};

FocusCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  dark: PropTypes.bool,
}

FocusCard.defaultProps = {
  dark: false,
};
