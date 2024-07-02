/** @jsx jsx */
import { jsx } from '@emotion/core'
import { h1Style, h2Style, h3Style, h4Style, h5Style, h6Style, headingLineStyle, richTextHeadingBig, richTextHeadingMedium, richTextHeadingSmall} from './sub-heading.css.js'
import PropTypes from "prop-types";

export const SubHeading = ({
  children,
  text,
  level,
  styleLevel,
  headingLine,
  richText,
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
  ]

  const regularHeadingStyling = [h1Style, h2Style, h3Style, h4Style, h5Style, h6Style];

  const styling = richText ? richTextHeadingStyling : regularHeadingStyling;

  const SelectedHeading = headings[level - 1] || 'h2';
  const selectedStyling = styling[styleLevel ? styleLevel - 1 : level - 1];
  const testStyleLevel = styleLevel ? true : false;
  console.log("testStyleLevel: ", testStyleLevel)
  if(styleLevel){
    console.log("text: ", text)
    console.log("styleLevel: ", styleLevel)
    console.log("richtext: ", richText)
  }

  return (
    <SelectedHeading css={[selectedStyling, headingLine ? headingLineStyle : null]} >
      {children}
      {text}
    </SelectedHeading>
  )
}

SubHeading.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  styleLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6, null]),
  headingLine: PropTypes.bool,
  richText: PropTypes.bool,
}

SubHeading.defaultProps = {
  children: null,
  text: '',
  level: 2,
  styleLevel: null,
  headingLine: false,
  richText: true,
};
