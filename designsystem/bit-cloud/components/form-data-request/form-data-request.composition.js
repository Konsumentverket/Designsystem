import React from 'react';
import { FormDataRequest } from './form-data-request.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormDataRequest = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FormDataRequest
        title="Ange dina uppgifter"
        accordionTitle="Så behandlar vi dina personuppgifter"
        accordionContent="<p>När du skickar in en begäran om registerutdrag behöver du lämna ett antal personuppgifter till oss. Det handlar om ditt namn, personnummer, postadress och e-postadress. Konsumentverket behöver dessa personuppgifter för att kunna hantera din begäran. Den lagliga grunden för behandlingen är artikel 6. 1.c i dataskyddsförordningen, vilket innebär att behandlingen är nödvändig för att Konsumentverket ska kunna uppfylla de skyldigheter vi har enligt dataskyddsförordningen.</p><h3>Vad gör vi med dina personuppgifter?</h3><p>Konsumentverket använder dina personuppgifter enbart för att kunna uppfylla din begäran om registerutdrag. Uppgifterna sparas i två år.</p><h3>Lämna inte känsliga personuppgifter</h3><p>Tänk på att aldrig lämna känsliga personuppgifter om dig själv eller någon annan i det fritextfält som finns i formuläret. Känsliga personuppgifter är sådana som avslöjar ras eller etniskt ursprung, politiska åsikter, religiös eller filosofisk övertygelse, medlemskap i fackförening samt personuppgifter som rör hälsa.</p>"
      />
    </CompositionFonts>
  );
};

