import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox.js';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = "Checkbox";
storiesOf('Digitala Produkter|Komponenter/Valalternativ', module)
    .add(name, () =>
        <>
            <Checkbox name="name" label={text("label", "Jag godkänner avtalet")} value={text("value","Yes")} />
        </>
    , { notes: NotesLoader(name) }
    );