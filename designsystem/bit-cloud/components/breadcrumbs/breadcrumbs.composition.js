import { css } from '@emotion/core';
import 'date-fns';
import {
  globalStyles as GlobalStyles,
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { Breadcrumbs } from './breadcrumbs';

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const blackBackground = { padding: "32px", backgroundColor: "#000000" };
const items = [
  {
    "title": "Start",
    "url": "/"
  },
  {
    "title": "Din ekonomi",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "En sida till",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "En mycket längre sidtitel har vi här",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  },
  {
    "title": "Nuvarande sida",
    "url": "/omrade/din-ekonomi/",
    "isRtl": false
  }
]

// Basic Example
export const BreadcrumbsExample = () => {
  const element = <Breadcrumbs
   items={items}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}
