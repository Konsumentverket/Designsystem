import 'react';
import 'date-fns';
import { DisplayAlphabet } from './display-alphabet.js';

export const BasicDisplayAlphabet = () => {
  return (
    <DisplayAlphabet
      activeLetter="L"
      visibleLetters={["L", "O", "R", "E", "M"]}
    />
  );
}
