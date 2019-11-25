import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { ExpandButton } from './ExpandButton';

let name = 'Expanderbar knapp';
storiesOf('Digitala Produkter|React komponenter|Knappar', module)
    .add(name, () =>
        <ExpandButton text="Expanderbar knapp" expanded={false} />
        , { notes: NotesLoader(name) }
    );