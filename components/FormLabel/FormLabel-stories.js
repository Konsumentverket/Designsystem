import React from 'react';
import { storiesOf } from '@storybook/react';
import FormLabel from './FormLabel';
import { text } from '@storybook/addon-knobs';

var notes = `## When to use this component
Label for a FormField
`;

storiesOf('Digitala Produkter|Komponenter/Atomer', module)
    .add('Formulärfältstext', () =>
        <FormLabel
            for="id"
            labelText={text("Text", "Förnamn")}
        />
        , { notes: notes }
    );