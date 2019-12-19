/** @jsx jsx */
import { jsx,css } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { FormSearchField } from './FormSearchField';
import { colors } from '../Colors/Colors';

let name = 'Sökfält';

storiesOf('Digitala Produkter|React komponenter/Formulärfält', module)
    .add(name, () =>
        <FormSearchField icon="Search" />
    , { notes: NotesLoader(name) }
    );