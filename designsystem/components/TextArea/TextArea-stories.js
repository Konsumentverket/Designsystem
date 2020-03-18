/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { TextArea } from './TextArea';
import { css } from '@emotion/core';

let name = 'TextArea';

storiesOf('Digitala Produkter | React komponenter', module)
  .add(name, () => {
    return (
      <div css={css`max-width: 80%; margin-left: 2%; p{font-size: 1.8rem;}`}>
        <p>Type "textarea"</p>
        <br />
        <TextArea 
          label={text("label","Skriv rubrik här")} 
          placeholder={text("placeholder","Skriv din placeholder här")} 
          id="textarea"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
      </div>
    )
  }, 
  { notes: NotesLoader(name) });