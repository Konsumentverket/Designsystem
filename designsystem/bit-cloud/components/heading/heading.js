/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';

export const Heading = ({
  text,
  style,
  children,
  ...otherAttr
}) => <SubHeading data-nosnippet="true" data-addsearch="exclude" style={style} level={1} text={text} {...otherAttr}>{children}</SubHeading>
