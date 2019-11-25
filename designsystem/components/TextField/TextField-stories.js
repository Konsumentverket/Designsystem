import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './TextField';
import { text,select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Textfält';

storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <TextField
            type={select("Fält typ", ['text', 'password', 'email', 'number', 'search', 'url'])}
            id={text("Id", "firstName")}
            placeholder={text("Placeholder", "Im the placeholder")}
            name={text("Name", "firstName")}
            value={text("Värde", "")}
            labelText={text("Text","Förnamn")}
        />
    , { notes: NotesLoader(name) }
    );