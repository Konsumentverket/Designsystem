import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from './Link.js';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';

let name = 'Länk';

storiesOf('Digitala Produkter|React komponenter/', module)
    .add('Länk', () =>
        <Link text={text("Text","Gå till konsumentverket.se")} linkUrl={text("Url","http://www.konsumentverket.se")} />
    , { notes: NotesLoader(name) }
    );