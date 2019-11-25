import React from 'react';
import { storiesOf } from '@storybook/react';
import {Divider} from './Divider';
import NotesLoader from '../NotesLoader';

let name = 'Divider';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <Divider />
    , { notes: NotesLoader(name) }
    );