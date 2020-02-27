/** @jsx jsx */

import React, {useState} from 'react';
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import { FormCheckbox } from './FormCheckbox';

let name = 'Kryssruta';

storiesOf('Digitala Produkter|React komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () =>
<FormCheckbox 
name="checkboxlist"
id="checkbox1"
labelText={text("Ledtext", "Svarsalternativ1")}
checked={boolean("Markerad", false)}
invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
value="value1"
/>
    , { notes: NotesLoader(name) }
    );