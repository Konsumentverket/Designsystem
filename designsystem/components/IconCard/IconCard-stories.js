import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { IconCard } from './IconCard';

let name = 'Ikonkort';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <IconCard icon="Furniture" text="texten" href="url/for/link" />
        , { notes: NotesLoader(name) }
    );