import React from 'react';
import { storiesOf } from '@storybook/react';
import Datum from './Date';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Datumformatering';
const defaultDateFormats = [
    "dd MMMM yyyy",
    "yyyy-MM-dd"
]
const defaultTimeFormats = [
    "HH:mm:ss",
    "kl. HH"
]

const stories = storiesOf('Digitala Produkter|React komponenter', module)
stories.addDecorator(withKnobs)
stories.add(name, () =>
    <div>
        <p>Generaliserad datumformatering</p>
        <p>Tillgängliga format:</p>
        <Datum 
            date={text('Datum', '2020-03-09 12:34:56')} 
            dateFormat={select("Datumformat", defaultDateFormats)} 
            timeFormat={select("Tidsformat", defaultTimeFormats)} 
        />
    </div>
);