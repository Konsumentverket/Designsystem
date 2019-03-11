import React from 'react';
import { storiesOf } from '@storybook/react';
import Logotype from './Logotype';
import { text } from '@storybook/addon-knobs';

var notes = `## When to use this component
Use this component in the top of every application

`;

storiesOf('Digitala Produkter|Komponenter', module)
    .add('Logotyp', () =>
        <Logotype
            src={text("Bild", "https://www.hallakonsument.se/Static/img/logo.svg")}
            href={text("Href", "http://konsumentverket.se")}
            alt={text("Bildens alt text","")}
            slogan={text("Slogan", "Oberoende vägledning genom Konsumentverket")}
        />
        , { notes: notes }
    );