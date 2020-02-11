import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { ExpandButton } from './ExpandButton';

let name = 'Expanderbar knapp';
storiesOf('Digitala Produkter|React komponenter/Knappar', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' }
    ],
  })
    .add(name, () =>
        <ExpandButton 
        text={text("Text", "Expanderbar knapp")}
        secondaryButtonStyle={boolean("Sekundärknapp", false)}
        invertedBackgroundColor={boolean("States för mörk bakgrund", false)}
        expanded={boolean("Expanded", false)}
        disabled={boolean("Inaktiverad", false)}
        />
        , { notes: NotesLoader(name) }
    );