import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link.js';
import { text } from '@storybook/addon-knobs';
import './Link.scss'
import NotesLoader from '../NotesLoader';

let name = 'Länk';

storiesOf('Digitala Produkter|Komponenter/Atomer/', module)
    .add('Länk', () =>
        <Link text={text("Text","Gå till konsumentverket.se")} linkUrl={text("Url","http://www.konsumentverket.se")} />
    , { notes: NotesLoader(name) }
    );