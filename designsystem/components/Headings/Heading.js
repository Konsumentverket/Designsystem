﻿/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { SubHeading } from '../SubHeading/SubHeading';

export const Heading = ({text,style,children,...otherAttr}) => <SubHeading style={style} level={1} text={text} {...otherAttr}>{children}</SubHeading>
