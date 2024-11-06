import React from 'react';

import { FormSuccess } from './form-success.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormSuccess = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormSuccess
        formData={{
          Förnamn: 'Lorem',
          Efternamn: 'Ipsum',
          Personnummer: '123456-7890',
          'E-postadress': 'lorem@ipsum.com',
          Datum: '2024-01-01',
        }}
        headline="Konsumentverket har tagit emot din begäran om radering av information."
      >
        <p>Vi har tagit emot för din begäran om registerutdrag.</p>
        <p>
          Vi kommer att skicka dig registerutdraget kostnadsfritt inom en månad
          efter att vi har mottagit din begäran.
        </p>
      </FormSuccess>
    </CompositionFonts>
  );
};
