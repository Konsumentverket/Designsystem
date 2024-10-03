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
    callbackOnClick={(e, item) => { console.log(e, item); }}
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

export const InputAutocompleteCustomized = () => {
  const element = <InputAutocomplete
    callbackOnClick={(e, item) => { console.log(e, item); }}
    fetchUrl={'https://api.addsearch.com/v1/suggest/cecae10a7a8fa96ae6ca84428bb77e0f?term='}
    placeholder="Skriv för att söka"
    formatResult={(data) => data.suggestions}
    suggestionKey={'value'}
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
