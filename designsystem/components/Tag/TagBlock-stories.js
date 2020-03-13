import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { TagBlock } from './TagBlock';
import { boolean, text, select } from '@storybook/addon-knobs';

let name = 'TagBlock';
storiesOf('Digitala Produkter|React komponenter', module)
  .add(name, () =>
    <TagBlock
      heading={text('Heading', 'En text')}
      // headingLevel={select('Heading', ['1', '2', '3', '4', '5'])}
      alternativeTagText={text('Alternativ tagtext', 'en tagg')}
      invertedColors={boolean('Inventerade färger', false)}
      secondaryArrowStyle={boolean('Alternativ pil', false)}
    />
    , { notes: NotesLoader(name) }
  )