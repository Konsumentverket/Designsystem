import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from './Accordion';
import NotesLoader from '../NotesLoader';

let name = 'Accordion';
let data = {
    title: "Konsumenträtt",
    headline: "De viktigaste bestämmelserna i lagen",
    contentCollection: {
        "items": [
            {
                "title": "Tre års reklamationsrätt",
                "headline": "Tre års reklamationsrätt",
                "text": "thgtr ggert htrhtstrshtrs\n\nsthtrhtrsht\nhsth"
            },
            {
                "title": "Dina rättigheter vid fel",
                "headline": "Dina rättigheter vid fel",
                "text": "\nNär det är fel har du i första hand rätt att kräva att företaget rättar till/lagar felet eller ger dig en ny vara. Om det inte är möjligt kan det bli fråga om ett prisavdrag som motsvarar felet, eller hävning...\n\nen [länk](https://www.hallakonsument.se \"hallakonsument\")\n"
            }
        ]
    }
}
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <Accordion content={data} />
        , { notes: NotesLoader(name) }
    );