import React from 'react';
import 'date-fns';
import {Heading} from './heading.js';
import {CompositionFonts, globalStyles as GlobalStyles} from "@konsumentverket-sverige/designsystem.utils";

export const BasicHeadings = () => {
  return (
    <>
      <div style={{width: '500px', padding: '0 24px'}}>
        <CompositionFonts>
          <GlobalStyles/>
          <Heading level={1} text="h1 Default" />
          <Heading level={1} text="h1 with styleLevel 4" styleLevel={4} />
          <Heading level={2} text="h2 Default" />
          <Heading level={3} text="h3 Default" />
          <Heading level={4} text="h4 Default" />
          <Heading level={5} text="h5 Default" />
          <Heading level={6} text="h6 Default" />
          <Heading level={1} text="h1 with line" headingLine />
          <Heading level={2} text="h2 with line" headingLine />
          <Heading level={3} text="h3 with line" headingLine />
          <Heading level={4} text="h4 with line" headingLine />
          <Heading level={5} text="h5 with line" headingLine />
          <Heading level={6} text="h6 with line" headingLine />
        </CompositionFonts>
      </div>
    </>
  );
}
