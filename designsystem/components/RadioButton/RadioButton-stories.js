import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioButton } from './RadioButton';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Radioknapp';


storiesOf('Digitala Produkter|React komponenter/Valalternativ', module)
    .add(name, () =>
        <>
            <RadioButton
                name={text("Input name", "namn")}
                labelText={text("Text i fält 1", "Banan")}
                value={text("Värde på fält 1", "value1")}
            />
            <RadioButton
                name={text("Input name", "namn")}
                labelText={text("Text i fält 2", "Äpple")}
                value={text("Värde på fält 2", "value2")}
            />
            <RadioButton
                name={text("Input name", "namn")}
                labelText={text("Text i fält 3", "Korv")}
                value={text("Värde på fält 3", "value3")}
            />
        </>
    , { notes: NotesLoader(name) }
    );