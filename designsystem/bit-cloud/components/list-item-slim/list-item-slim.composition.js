import React from 'react';
import 'date-fns';
import { ListItemSlim } from './list-item-slim.js';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicListItemSlim = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ListItemSlim
        href="#"
        headline="Lorem ipsum"
      />
    </CompositionFonts>
  );
}
