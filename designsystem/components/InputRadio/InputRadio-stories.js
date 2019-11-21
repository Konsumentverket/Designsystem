import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import {InputRadio} from './InputRadio'
import { text } from '@storybook/addon-knobs';

let name = 'Input radio';
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <>
            <InputRadio name={text("name","radio")} id="radio1" labelText={text("labelText","Im the radiobutton")} />
            <br />
            
            <InputRadio name={text("name","radio")} id="radio2" labelText={text("labelText","Im the radiobutton")} />
        </>
        , { notes: NotesLoader(name) }
    );