/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  h1Style, h2Style, h3Style, h4Style, h5Style, h6Style,
  headingLineStyle, richTextHeadingBig, richTextHeadingMedium, richTextHeadingSmall
} from './sub-heading.css.js';

export const SubHeading = ({
  children = null,
  text = '',
  level = 2,
  styleLevel = null,
  headingLine = false,
  richText = true,
  contentfulId = null,
  contentfulName = ''
}) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  // Richtext headings:
  // level 1 - 2: richtextHeadingBig
  // level 3: richtextHeadingMedium,
  // level 4 - 6: richtextHeadingSmall
  const richTextHeadingStyling = [
    richTextHeadingBig,
    richTextHeadingBig,
    richTextHeadingMedium,
    richTextHeadingSmall,
    richTextHeadingSmall,
    richTextHeadingSmall
  ];

  const regularHeadingStyling = [h1Style, h2Style, h3Style, h4Style, h5Style, h6Style];

  const styling = richText ? richTextHeadingStyling : regularHeadingStyling;

  const SelectedHeading = headings[level - 1] || 'h2';
  const selectedStyling = styling[styleLevel ? styleLevel - 1 : level - 1];

  return (
    <SelectedHeading css={[selectedStyling, headingLine ? headingLineStyle : null]} data-contentful-field-id={contentfulName} data-contentful-entry-id={contentfulId}>
      {children}
      {text}
    </SelectedHeading>
  );
};
