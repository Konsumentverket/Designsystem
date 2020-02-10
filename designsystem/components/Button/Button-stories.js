import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, select, boolean } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Knapp';
storiesOf('Digitala Produkter|React komponenter|Knappar', module)
  .addParameters({
    backgrounds: [
      { name: 'white', value: '#fff', default: true },
      { name: 'blueExtraDark', value: '#162259' },
      { name: 'blueMid', value: '#006EC2' },
    ],
  })
  .add(name, () =>
    <Button
      text={text("text", "Gå till konsumentverket.se")}
      disabled={boolean("disabled", false)}
      selected={boolean("selected", false)}
      buttontype={select("buttontype", ["primary", "secondary", "cta"])}
      type={select("type", ["submit", "button"])}
      size={select("size", ["small", "medium", "large"])}
      icon={select("icon", ["", ...Object.keys(iconDefinitions)], "")}
      iconRight={boolean("iconRight", false)}
    />
    , { notes: NotesLoader(name) }
  );