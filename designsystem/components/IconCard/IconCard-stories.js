import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { IconCard } from './IconCard';
import { editorIconDefinitions } from '../Icon/EditorIcon';

let name = 'Ikonkort';
storiesOf('Digitala Produkter|React komponenter/Kort', module)
    .add(name, () =>
        <IconCard 
        url={text("Url", "https://www.hallakonsument.se")}
        icon={select("Ikon", ["", ...Object.keys(editorIconDefinitions)], "Cars")}
        text={text("Text", "Ikonkort")} />
        , { notes: NotesLoader(name) }
    );