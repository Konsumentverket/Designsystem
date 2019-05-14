import React from 'react';
import { storiesOf } from '@storybook/react';
import {Accordion} from './Accordion';
import NotesLoader from '../NotesLoader';

let name = 'Accordion';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <Accordion />
    , { notes: NotesLoader(name) }
    );