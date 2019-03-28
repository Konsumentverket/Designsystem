import React from 'react';
import { storiesOf } from '@storybook/react';
import Logotype from './Logotype';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Logotyp';


storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <Logotype
            src={text("Bild", "https://www.hallakonsument.se/Static/img/logo.svg")}
            href={text("Href", "http://konsumentverket.se")}
            alt={text("Bildens alt text","")}
            slogan={text("Slogan", "Oberoende vägledning genom Konsumentverket")}
        />
    , { notes: NotesLoader(name) }
    );