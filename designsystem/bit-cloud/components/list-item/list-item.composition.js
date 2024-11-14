import React from 'react';;

import { ListItem } from './list-item.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicListItem = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
          <ListItem
            type="Nyhet"
            updatedAt={null}
            publishedAt={new Date().toISOString()}
            href="#"
            headline="Trafikskolor glömmer ångerrätten"
            preamble="Kort ingress som förklarar webbinariet!" />
      </CompositionFonts>
    </>
  );
}

export const UpdatedListItem = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Nyhet"
          updatedAt={new Date().toISOString()}
          publishedAt={new Date().toISOString()}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!" />
      </CompositionFonts>
    </>
  );
}

export const WebbinairListItemComing = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Webbinarium"
          webbinairDateStart={"2025-03-05"}
          webbinairDateEnd={"17:00 - 19:00"}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!" />
      </CompositionFonts>
    </>
  );
}

export const WebbinairListItemOld = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <ListItem
          type="Webbinarium"
          webbinairDateStart={"2024-01-05"}
          webbinairDateEnd={null}
          href="#"
          headline="Trafikskolor glömmer ångerrätten"
          preamble="Kort ingress som förklarar webbinariet!" />
      </CompositionFonts>
    </>
  );
}
