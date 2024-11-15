/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';

export const Heading = ({
  text = '',
  children = null,
  level = 2,
  styleLevel = null,
  headingLine = false,
  richText = true,
  contentfulId = null,
  contentfulName = '',
  rightBorder = false,
  }) => (
  <SubHeading
    level={level}
    text={text}
    styleLevel={styleLevel}
    headingLine={headingLine}
    richText={richText}
    contentfulId={contentfulId}
    contentfulName={contentfulName}
    rightBorder={rightBorder}
  >
    {children}
  </SubHeading>
);
