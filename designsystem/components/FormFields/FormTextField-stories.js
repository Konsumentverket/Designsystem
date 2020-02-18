/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean, select } from '@storybook/addon-knobs';
import { FormSearchField } from './FormSearchField';
import { colors } from '../Colors/Colors';
import { iconDefinitions } from '../Icon/Icon';
import { FormTextField } from './FormTextField';

let name = 'Textfält';

storiesOf('Digitala Produkter|React komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () =>
        <FormTextField 
        fieldtext={text("Hjälptext", "Placeholder")}
        disabled={boolean("Inaktiverad", false)}
        />
    , { notes: NotesLoader(name) }
    );