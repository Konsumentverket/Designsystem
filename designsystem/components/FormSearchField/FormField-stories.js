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
        <div css={css`
        background-color: ${colors.profile["blue-dark"]};
        padding:20px;
      `}><FormSearchField /></div>
    , { notes: NotesLoader(name) }
    );