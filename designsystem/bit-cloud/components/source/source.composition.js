import React from 'react';

;

import {Source} from './source.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicSource = () => {
  // Usually microcopy
  const bottomText = `Innehållet på den här sidan är framtaget i samarbete med en eller flera andra myndigheter och konsumentbyråer. Konsumentverket samverkar med andra i vårt uppdrag att vägleda konsumenter.`;

  return (
    <CompositionFonts>
      <GlobalStyles/>
      <Source
        baseUrl={"Gå till konsumentverket.se"}
        sourcesCollection={{
          items: [
            {
              linkUrl: "/",
              linkText: "Konsumentverket",
              occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
            },
            {
              linkUrl: "/",
              linkText: "Polisen",
              occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
            },
            {
              linkUrl: "/",
              linkText: "Konsument Europa",
              occupationId: "fda16320-2da2-e411-9405-000d3a200e7c"
            }
          ]
        }}
        reviewedDate={new Date()}
        style=""
        english={false}
        bottomContent={bottomText}
      />
    </CompositionFonts>
  );
}
