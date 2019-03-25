import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox.js';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = "Checkbox";
storiesOf('Digitala Produkter|Komponenter/Atomer/Valalternativ', module)
    .add(name, () =>
        <>
            <Checkbox name="name" label={text("Text", "Jag godkänner avtalet")} value={text("Värde","Yes")} />
        </>
    , { notes: NotesLoader(name) }
    );