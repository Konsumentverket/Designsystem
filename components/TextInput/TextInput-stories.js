import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';
import { text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Textinput';

storiesOf('Digitala Produkter|Komponenter/', module)
    .add('Textinput', () =>
        <TextInput
            type={select("Fält typ", ['text', 'password', 'email', 'number', 'search', 'url'])}
            id={text("Id", "firstName")}
            placeholder={text("Placeholder", "Im the placeholder")}
            name={text("Name", "firstName")}
            value={text("Värde", "")}
        />
    , { notes: NotesLoader(name) }
    );