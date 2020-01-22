import React, { useLayoutEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import NotesLoader from '../NotesLoader'
import { Heading } from './Heading'
import { SubHeading } from './SubHeading'
import { text, select } from '@storybook/addon-knobs';




let name = 'Rubriker'
storiesOf('Digitala Produkter|React komponenter/Rubriker', module)
    .add(name, () =>
    <>
        <div id="headings">
            <p>Default:</p>
            <Heading text="Rubrik h1" />
            <SubHeading text="Rubrik h2" />
            <SubHeading text="Rubrik h3" level="3" />
            <SubHeading text="Rubrik h4" level="4" />
            <SubHeading text="Rubrik h5" level="5" />
            <SubHeading text="Rubrik h6" level="6" />

            <p>Custom sizes:</p>
            <SubHeading text="Rubrik h1 with h2 styling" level="1" styleLevel="2" />
            <SubHeading text="Rubrik h2 with h3 styling" level="2" styleLevel="3" />
            <SubHeading text="Rubrik h3 with h4 styling" level="3" styleLevel="4" />
            <SubHeading text="Rubrik h4 with h5 styling" level="4" styleLevel="5" />
        </div>
            
    </>
        , { notes: NotesLoader(name) }
    ).add("Rubrik",() => <>
        <SubHeading text={text("text","Lorem ipsum")} 
                    level={select("level",[1,2,3,4,5,6],1)} 
                    styleLevel={select("styleLevel",[1,2,3,4,5,6],1)} 
        />
    </>);

    
