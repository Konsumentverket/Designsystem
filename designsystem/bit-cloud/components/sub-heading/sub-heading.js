/** @jsx jsx */
import { jsx } from '@emotion/core'
import { h1Style, h2Style, h3Style, h4Style, commonSubHeadingStyle, h5Style, h6Style } from './sub-heading.css.js'
import PropTypes from "prop-types";

export const SubHeading = ({
  children,
  text,
  level,
  styleLevel,
}) => {
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const stylings = [h1Style, h2Style, h3Style, h4Style, h5Style, h6Style];
  const SelectedHeading = headings[level - 1] || 'h2';
  const SelectedStyling = stylings[styleLevel ? styleLevel - 1 : level - 1];

  return (
    <SelectedHeading css={[commonSubHeadingStyle, SelectedStyling]} >
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
}

SubHeading.defaultProps = {
  children: null,
  text: '',
  level: 2,
  styleLevel: null,
};
