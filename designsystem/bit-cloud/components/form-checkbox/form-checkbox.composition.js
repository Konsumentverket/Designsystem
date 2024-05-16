import React from 'react';;
import 'date-fns';
import { FormCheckbox } from './form-checkbox.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check"
        name="lorem-check"
        value="Lorem ipsum"
        labelText="Lorem ipsum"
        checked={false}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}

export const BasicCheckedFormCheckbox = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormCheckbox
        id="Lorem-check-checked"
        name="lorem-check-checked"
        value="Lorem ipsum-checked"
        labelText="Lorem ipsum"
        checked={true}
        onChange={(e) => console.log(e.target.value)}
      />
    </CompositionFonts>
  );
}
