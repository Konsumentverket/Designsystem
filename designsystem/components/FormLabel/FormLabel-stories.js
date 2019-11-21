﻿import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormLabel } from './FormLabel';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Formulärfältstext';

storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <FormLabel
            for="id"
            labelText={text("Text", "Förnamn")}
        />
    , { notes: NotesLoader(name) }
    );