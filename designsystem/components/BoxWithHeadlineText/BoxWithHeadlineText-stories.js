import React from 'react';
import { storiesOf } from '@storybook/react';
import { BoxWithHeadlineText } from './BoxWithHeadlineText';
import NotesLoader from '../NotesLoader';
import { select } from '@storybook/addon-knobs';
import { iconDefinitions } from '../Icon/Icon';

let name = 'Platta med rubrik och text';

storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <BoxWithHeadlineText
            headline="Rubrik"
            text="Text"
            color={select("Bakgrundsfärg", ["gray", "blue", "white"])}
            backgroundWidth={select("Bredd", ["Kolumnbredd", "Helbredd"])}
        />
        , { notes: NotesLoader(name) }
    );