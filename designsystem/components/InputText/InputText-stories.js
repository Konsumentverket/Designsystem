import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { InputText } from './InputText';



let name = 'Input text';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => <InputText 
                        placeholder={text("placeholder","Skriv för att söka")} 
                        id={text("id","theid")}
                        onChange={(e) => console.log(e.target.value)}
                    />
        , { notes: NotesLoader(name) }
    );