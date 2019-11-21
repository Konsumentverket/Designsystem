import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { Breadcrumb } from './Breadcrumb'

let name = 'Brödsmulor';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <Breadcrumb />
    , { notes: NotesLoader(name) }
    );