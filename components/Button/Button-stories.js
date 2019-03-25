import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Knapp';

var notes = NotesLoader(name)



storiesOf('Digitala Produkter|Komponenter/Atomer/Knappar', module)
    .add(name, () =>
        <Button text={text('Text', 'Button')} className={select('Class', ["", "green", "red"])} />
    , { notes: notes }
    );