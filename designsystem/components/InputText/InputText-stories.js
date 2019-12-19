/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { InputText } from './InputText';
import { css } from '@emotion/core';



let name = 'Input text';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => {
                    return <>
                    <div css={css`max-width: 80%; margin-left: 2%;`}>
                    <InputText 
                        placeholder={text("placeholder","Skriv för att söka")} 
                        id="text"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <br />
                    <br />
                    <InputText 
                        placeholder={text("placeholder","Skriv för att söka")} 
                        id="search"
                        type="search"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    </div>
                    </>
    }
        , { notes: NotesLoader(name) }
    );