/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { ValidationResponse } from './ValidationResponse';
import { css } from '@emotion/core';



let name = 'Valideringssvar';
storiesOf('Digitala Produkter|React komponenter', module)
  .add(name, () => {
    return <>
      <div css={css`max-width: 80%; margin-left: 2%; p{font-size: 1.8rem;}`}>
        <p>Lyckat</p>
        <br />
        <ValidationResponse success={true} text='Detta är ett lyckat meddelande' />
        <br />
        <br />
        <p>Något fel</p>
        <br />
        <ValidationResponse success={false} text='Något har gått fel' />
      </div>
    </>
  }
    , { notes: NotesLoader(name) }
  );