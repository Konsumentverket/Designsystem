import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { HelpText } from './HelpText';

let name = 'Hjälptext';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <HelpText />
    , { notes: NotesLoader(name) }
    );