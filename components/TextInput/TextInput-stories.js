import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';
import { text, select } from '@storybook/addon-knobs';

var notes = `## When to use this component
Use this component to make users write stuff

`;

storiesOf('Digitala Produkter|Komponenter/Atomer', module)
    .add('Textinput', () =>
        <TextInput
            type={select("Fält typ", ['text', 'password', 'email', 'number', 'search', 'url'])}
            id={text("Id", "firstName")}
            placeholder={text("Placeholder", "Im the placeholder")}
            name={text("Name", "firstName")}
            value={text("Värde", "")}
        />
        , { notes: notes }
    );