/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean, select } from '@storybook/addon-knobs';
import { FormSearchField } from './FormSearchField';
import { colors } from '../Colors/Colors';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Sökfält';

storiesOf('Digitala Produkter|React komponenter/Formulärfält', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })    
.add(name, () =>
        <FormSearchField 
        fieldtext={text("Hjälptext", "Vad letar du efter?")}
        buttontext={text("Knapptext", "Sök")}
        icon={select("Ikon", ["", ...Object.keys(iconDefinitions)], "Search")}
        secondaryButtonStyle={boolean("Sekundärknapp", false)}
        disabled={boolean("Inaktiverad", false)}
        />
    , { notes: NotesLoader(name) }
    );