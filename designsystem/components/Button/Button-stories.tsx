import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, boolean, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Knapp';

storiesOf('Digitala Produkter|React komponenter|Knappar', module)
  .addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blue-dark', value: '#162259' },
      { name: 'blue-mid', value: '#0074CC' },
    ],
  })
  .add(name, () => (
    <Button
      text={text("text", "Gå till konsumentverket.se")}
      disabled={boolean("disabled", false)}
      selected={boolean("selected", false)}
      buttontype={select("buttontype", ["primary", "secondary", "cta"], 'primary')}
      type={select("type", ["submit", "button"], 'submit')}
      size={select("size", ["small", "medium", "large"], 'medium')}
      icon={select("icon", ["", ...Object.keys(iconDefinitions)], "")}
      iconRight={boolean("iconRight", false)}
    />)
    , { notes: NotesLoader(name) }
  );