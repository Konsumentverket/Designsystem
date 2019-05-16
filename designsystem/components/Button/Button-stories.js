import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from './Button';
import { text, select, boolean  } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Knapp';
storiesOf('Digitala Produkter|Komponenter', module)
.addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blue-dark', value: '#162259' },
      { name: 'blue-mid', value: '#0074CC' },
    ],
  })
    .add(name, () =>
        <Button 
            text={text("text","Gå till konsumentverket.se")}
            disabled={boolean("disabled",false)}
            darkmode={boolean("darkmode",false)}
            buttontype={select("buttontype",["primary","secondary","cta"])}
            type={select("type",["button","submit"])}
            size={select("size",["small","medium","large"])}
        />
    , { notes: NotesLoader(name) }
    );