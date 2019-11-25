import React from 'react'
import { storiesOf } from '@storybook/react'
import NotesLoader from '../NotesLoader'
import { Heading } from './Heading'
import { SubHeading } from './SubHeading'

let name = 'Rubrik'
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <>
        <Heading text="Rubrik h1" />
        <SubHeading text="Rubrik h2" />
        <SubHeading text="Rubrik h3" level="3" />
        </>
        , { notes: NotesLoader(name) }
    );
