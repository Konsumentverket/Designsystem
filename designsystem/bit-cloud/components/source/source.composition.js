import React from 'react';

;
import 'date-fns';
import {Source} from './source.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicSource = () => {
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
            }
          ]
        }}
        markdownText={"Lorem ipsum"}
        reviewedDate={new Date()}
        style=""
        english={false}
        bottomContent={"Granskad"}
      />
    </CompositionFonts>
  );
}
