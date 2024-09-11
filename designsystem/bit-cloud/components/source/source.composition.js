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
        bottomContent={<div>{"BottomContent - komponent, vanligtvis " + "<" + "ECCAsSource" + " \/>"}</div>}
      />
    </CompositionFonts>
  );
}
