import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox.js';
import { text } from '@storybook/addon-knobs';


var notes = `## When to use this component
Use this component when you want to force users to click in a box

`;

storiesOf('Digitala Produkter|Komponenter/Atomer/Valalternativ', module)
    .add('Checkbox', () =>
        <>
            <Checkbox name="name" label={text("Text", "Jag godkänner avtalet")} value={text("Värde","Yes")} />
        </>
        , { notes: notes }
    );