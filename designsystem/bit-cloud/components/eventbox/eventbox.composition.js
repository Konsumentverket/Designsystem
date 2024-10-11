import 'date-fns';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { EventBox } from './eventbox';

// Basic Example
export const EventBoxExampleList = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <EventBox
        date={new Date().toISOString()}
        time={"14:00 - 16:00"}
        latestApplicationDate={new Date().toISOString()}
        datePassed={true}
        subject={"Konsumenträtt, Hållbarhet"}
        lecturers={["Föreläsare 1", "Föreläsare 2"]}
        listOption={true}
        text={"Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi"}
        url={'https://www.konsumentverket.se'}
      />
    </CompositionFonts>
  );
}

export const EventBoxExampleComma = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <EventBox
        date={new Date().toISOString()}
        time={"14:00 - 16:00"}
        latestApplicationDate={new Date().toISOString()}
        subject={"Konsumenträtt, Hållbarhet"}
        lecturers={["Föreläsare 1", "Föreläsare 2"]}
        listOption={false}
        text={"Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi"}
        url={'https://www.konsumentverket.se'}
      />
    </CompositionFonts>
  );
}

export const EventBoxExampleOutdated = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <EventBox
        date={new Date().toISOString()}
        time={"14:00 - 16:00"}
        latestApplicationDate={new Date().toISOString()}
        subject={"Konsumenträtt, Hållbarhet"}
        lecturers={["Föreläsare 1", "Föreläsare 2"]}
        listOption={true}
        text={"Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi"}
        url={'https://www.konsumentverket.se'}
      />
    </CompositionFonts>
  );
}


export const EventBoxExampleSingle = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <EventBox
        date={new Date().toISOString()}
        time={"14:00 - 16:00"}
        subject={"Konsumenträtt, Hållbarhet"}
        lecturers={["Namn Namnsson"]}
        listOption={false}
      />
    </CompositionFonts>
  );
}
