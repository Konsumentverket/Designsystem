import React from 'react';;
import 'date-fns';
import { FactBox } from './fact-box.js';
import {
  globalStyles as GlobalStyles, CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFactBox = () => {
  return (
    <>
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
    </>
  );
}
