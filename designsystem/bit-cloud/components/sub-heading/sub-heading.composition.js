import React from 'react';

;
import 'date-fns';
import {SubHeading} from './sub-heading.js';
import {globalStyles as GlobalStyles} from "@konsumentverket-sverige/designsystem.utils";

export const BasicSubHeading = () => {
  return (
    <CompositionFonts>
      <GlobalStyles/>
      <SubHeading text="Lorem ipsum"/>
    </CompositionFonts>
  );
}
