import React from 'react';;
import 'date-fns';
import { FormRadiobutton } from './form-radiobutton.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio"
        name="lorem-radio"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicCheckedFormRadiobutton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormRadiobutton
        id="Lorem-radio"
        name="lorem-radio"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}