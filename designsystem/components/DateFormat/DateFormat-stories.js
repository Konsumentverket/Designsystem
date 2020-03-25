/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text, boolean } from '@storybook/addon-knobs';
import { DateFormat } from './DateFormat'


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
      <strong>Defaultformatering:</strong>
      <br />
      <p>Datumformat: "d MMMM yyyy"</p>
      <p>Tidsformat: "'kl.' HH:mm"</p>
      <i>För en utförlig presentation av tillgängliga format. se: <a href="https://date-fns.org/v2.11.0/docs/format">https://date-fns.org/v2.11.0/docs/format</a></i>
    </div>
  </>
}, { notes: NotesLoader(name) });
