import React from 'react';
import 'date-fns';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';
import { InputAutocomplete } from './input-autocomplete';

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };

// Basic Example
export const InputAutocompleteBasicExample = () => {
  const element = <InputAutocomplete
    fetchUrl={'https://localhost:52535/api/contactsearch/place/?query='}
    placeholder="Skriv för att söka"
  />;

  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <div style={whiteBackground}>
          {element}
        </div>
      </CompositionFonts>
    </>
  );
}
