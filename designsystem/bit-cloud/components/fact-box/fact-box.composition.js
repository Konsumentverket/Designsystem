import React from 'react';;
import 'date-fns';
import { FactBox } from './fact-box.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFactBox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FactBox
        headline="Minska klimatpåverkan"
      >
        <ul>
          <li>En rad i punktlista</li>
          <li>En rad i punktlista som har längre text.</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit, sed do eiusmod tempor</li>
          <li>Incididunt ut labore et dolore magna aliqua</li>
        </ul>
      </FactBox>
    </CompositionFonts>
  );
}

export const BasicFactBoxWithoutTag = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FactBox
        headline="Minska klimatpåverkan"
        tag={false}
      >
        <ul>
          <li>En rad i punktlista</li>
          <li>En rad i punktlista som har längre text.</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit, sed do eiusmod tempor</li>
          <li>Incididunt ut labore et dolore magna aliqua</li>
        </ul>
      </FactBox>
    </CompositionFonts>
  );
}

export const BasicFactBoxWithText = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FactBox
        headline="Minska klimatpåverkan"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </FactBox>
    </CompositionFonts>
  );
}
