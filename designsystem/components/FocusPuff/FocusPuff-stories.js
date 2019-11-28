/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { FocusPuff } from './FocusPuff';


let name = 'FocusPuff';

storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <FocusPuff  headline="Besök våran kampanj" text="lorem ipsum dolor lorem ipsum doloe" image="https://via.placeholder.com/304x100"/>
    , { notes: NotesLoader(name) }
    );