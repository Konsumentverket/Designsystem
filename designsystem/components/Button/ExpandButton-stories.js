import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { ExpandButton } from './ExpandButton';

let name = 'Knapp för att expandera innehåll';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <ExpandButton text="Knapp" expanded={false} />
        , { notes: NotesLoader(name) }
    );