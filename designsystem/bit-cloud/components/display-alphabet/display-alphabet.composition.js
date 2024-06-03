import React from 'react';
import 'date-fns';
import {DisplayAlphabet} from './display-alphabet.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicDisplayAlphabet = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <DisplayAlphabet
        activeLetter="L"
        visibleLetters={["L", "O", "R", "E", "M"]}
        displayShowAllLink={true}
      />
    </CompositionFonts>
  );
}
