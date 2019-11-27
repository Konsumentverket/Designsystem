import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { InputText } from './InputText';



let name = 'Input text';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => <InputText placeholder="lorem ipsum dolor sit amet" />
        , { notes: NotesLoader(name) }
    );