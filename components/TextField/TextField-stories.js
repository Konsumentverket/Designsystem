import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';
import { text,select } from '@storybook/addon-knobs';

var notes = `## When to use this component
Use this component to make users write stuff

`;

storiesOf('Digitala Produkter|Komponenter/Molekyl', module)
    .add('Textfält', () =>
        <TextField
            type={select("Fält typ", ['text', 'password', 'email', 'number', 'search', 'url'])}
            id={text("Id", "firstName")}
            placeholder={text("Placeholder", "Im the placeholder")}
            name={text("Name", "firstName")}
            value={text("Värde", "")}
            labelText={text("Text","Förnamn")}
        />
        , { notes: notes }
    );