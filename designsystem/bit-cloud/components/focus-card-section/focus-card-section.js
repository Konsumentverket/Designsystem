/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import React from "react";

import {
  focusCardSectionStyle,
  focusCardSectionGreyStyle,
  focusCardSectionBlueStyle,
  focusCardSectionContainerStyle,
  focusCardSectionHeaderStyle,
  focusCardSectionTextWrapperStyle,
  focusCardSectionIconWrapperStyle,
  focusCardSectionTitleStyle,
  focusCardSectionTextStyle,
  focusCardSectionItemsListStyle,
  focusCardSectionItemStyle,
} from './focus-card-section.css.js';

import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import { FocusCard } from '@konsumentverket-sverige/designsystem.focus-card';

export const FocusCardSection = ({
  title,
  text,
  icon,
  backgroundColor,
  items,
}) => {

  const backgroundColorMap = {
    blue: focusCardSectionBlueStyle,
    grey: focusCardSectionGreyStyle,
  };
  
  const modifierCssClass = backgroundColorMap[backgroundColor] || '';

  return (
    <div css={[focusCardSectionStyle, modifierCssClass && modifierCssClass]} data-comp="focus-card-section">
      <div css={focusCardSectionContainerStyle}>
        <div css={focusCardSectionHeaderStyle}>
          {icon && (<div css={focusCardSectionIconWrapperStyle}><Icon icon={icon} /></div>)}
          <div css={focusCardSectionTextWrapperStyle}>
            {title && (<h2 css={focusCardSectionTitleStyle}>{title}</h2>)}
            {text && (<p css={focusCardSectionTextStyle}>{text}</p>)}
          </div>
        </div>
        {items && (
          <div css={focusCardSectionItemsListStyle}>
            {items.map((item, index) => (
              <div key={index} css={focusCardSectionItemStyle}>
                <FocusCard {...item} dark={!modifierCssClass} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

FocusCardSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  items: PropTypes.array,
}

FocusCardSection.defaultProps = {
};
