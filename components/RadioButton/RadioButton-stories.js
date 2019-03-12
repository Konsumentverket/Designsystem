import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';
import { text } from '@storybook/addon-knobs';

var notes = `## When to use this component
Use this component when you want to force users to make an action

`;

storiesOf('Digitala Produkter|Komponenter/Atomer/Valalternativ', module)
    .add('Radioknapp', () =>
        <>
            <RadioButton
                name={text("Input name", "namn")}
                label={text("Text i fält 1", "Banan")}
                value={text("Värde på fält 1", "value1")}
            />
            <RadioButton
                name={text("Input name", "namn")}
                label={text("Text i fält 2", "Äpple")}
                value={text("Värde på fält 2", "value2")}
            />
            <RadioButton
                name={text("Input name", "namn")}
                label={text("Text i fält 3", "Korv")}
                value={text("Värde på fält 3", "value3")}
            />
        </>
        , { notes: notes }
    );