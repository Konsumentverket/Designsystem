/** @jsx jsx */
import {jsx} from '@emotion/core'
import {SubHeading} from '@konsumentverket-sverige/designsystem.sub-heading';
import PropTypes from "prop-types";

export const Heading = ({text, children, level, styleLevel, headingLine}) => (
  <SubHeading
    level={level}
    text={text}
    styleLevel={styleLevel}
    headingLine={headingLine}
  >
    {children}
  </SubHeading>
)


Heading.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  level: PropTypes.oneOf([1,2,3,4,5,6]),
  styleLevel: PropTypes.oneOf([1,2,3,4,5,6, null]),
  headingLine: PropTypes.bool,
}

Heading.defaultProps = {
  children: null,
  text: '',
  level: 1,
  styleLevel: null,
  headingLine: false,
};
