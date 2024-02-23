import { DisplayAlphabet } from './display-alphabet.js';
import React from 'react';

export const BasicDisplayAlphabet = () => {
  return (
    <DisplayAlphabet
      activeLetter="L"
      visibleLetters={["L", "O", "R", "E", "M"]}
    />
  );
}
