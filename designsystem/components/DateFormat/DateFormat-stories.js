/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import DateFormat from './DateFormat'


let name = 'Datum formatering';
storiesOf('Digitala Produkter|React komponenter', module)
.add(name, () => {
  return <>
    <div>
      <strong>Exempel:</strong>
      <br />
      <br />
      <DateFormat 
        date={text("Datumstämpel","2019-04-02T17:10:24")} 
        showDate={boolean('Visa datum', true)}
        showTime={boolean('Visa tid', true)} />
      <br />
      <br />

      <hr />
      <strong>Formatering:</strong>
      <br />
      <br />
      <p>Datumformat: "d MMMM yyyy"</p>
      <p>Tidsformat: "'kl.' HH:mm"</p>
    </div>
  </>
}, { notes: NotesLoader(name) });
