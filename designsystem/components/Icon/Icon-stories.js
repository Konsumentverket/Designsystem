import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Icon, iconDefinitions } from './Icon';
import { select  } from '@storybook/addon-knobs';

let name = 'Ikon';
storiesOf('Digitala Produkter|Komponenter/Ikoner', module)
    .add(name, () =>
        <Icon icon={select("icon", Object.keys(iconDefinitions), Object.keys(iconDefinitions)[0])} />
    , { notes: NotesLoader(name) }
    ).add("Alla ikoner", () => {
        let icons = Object.keys(iconDefinitions).map((key) => ( <Icon icon={key} /> ));
        return icons;
    });

    
    