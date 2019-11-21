import React from 'react'
import { storiesOf } from '@storybook/react'
import NotesLoader from '../NotesLoader'
import { Heading } from './Heading'
import { SubHeading } from './SubHeading'

let name = 'Rubrik'
storiesOf('Digitala Produkter|Komponenter', module)
    .add(name, () =>
        <Heading text="Rubrik" />
        , { notes: NotesLoader(name) }
    );