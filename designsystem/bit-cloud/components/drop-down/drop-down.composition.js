import React from 'react';
import 'date-fns';
import { Dropdown } from './drop-down.js';

import {
  small,
  medium,
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicLinksDropDown = () => {
  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem"
          label="Lorem ipsum dolor sit amet"
          type="link"
          data={[{
            text: 'Vivamus non feugiat justo, id ullamcorper est',
            href: '#1'
          },
          {
            text: 'Integer vehicula luctus',
            href: '#2'
          },
          {
            text: 'Mauris mattis est sapien nec accumsan est',
            href: '#3'
          },
          {
            text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
            href: '#4'
          }]}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicCheckboxDropDown = () => {
  return (
    <div style={{ minHeight: '400px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem-check"
          label="Lorem ipsum dolor sit amet"
          type="checkbox"
          data={[{
            text: 'Vivamus non feugiat justo, id ullamcorper est',
            value: 'vivamus-non-feugiat-justo-id-ullamcorper-est-check'
          },
          {
            text: 'Integer vehicula luctus',
            value: 'integer-vehicula-luctus-check'
          },
          {
            text: 'Mauris mattis est sapien nec accumsan est',
            value: 'mauris-mattis-est-sapien-nec-accumsan-est-check'
          },
          {
            text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
            value: 'proin-sit-amet-tempor-lorem-ut-sed-dignissim-velit-semper-tristique-check'
          }]}
        />
      </CompositionFonts>
    </div>
  );
}

export const BasicRadioDropDown = () => {
  return (
    <div style={{ minHeight: '600px' }}>
      <CompositionFonts>
        <GlobalStyles />
        <Dropdown
          id="lorem-radio"
          label="Lorem ipsum dolor sit amet"
          type="radio"
          data={[{
            text: 'Vivamus non feugiat justo, id ullamcorper est',
            value: 'vivamus-non-feugiat-justo-id-ullamcorper-est-radio'
          },
          {
            text: 'Integer vehicula luctus',
            value: 'integer-vehicula-luctus-radio'
          },
          {
            text: 'Mauris mattis est sapien nec accumsan est',
            value: 'mauris-mattis-est-sapien-nec-accumsan-est-radio'
          },
          {
            text: 'Proin sit amet tempor lorem ut sed dignissim velit, semper tristique',
            value: 'proin-sit-amet-tempor-lorem-ut-sed-dignissim-velit-semper-tristique-radio'
          }]}
        />
      </CompositionFonts>
    </div>
  )
}