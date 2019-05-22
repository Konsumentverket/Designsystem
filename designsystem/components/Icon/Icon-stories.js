import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Icon, iconDefinitions } from './Icon';
import { select  } from '@storybook/addon-knobs';

var clickToDownload = (e,key) => {
    e.preventDefault();
    var svg = e.target.closest("svg")
    var svgAsXML = (new XMLSerializer).serializeToString(svg);
    var dataURL = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", dataURL);
    dl.setAttribute("download", key+".svg");
    dl.click();
}

let name = 'Ikon';
storiesOf('Digitala Produkter|Komponenter/Ikoner', module)
    .add(name, () =>
        <Icon icon={select("icon", Object.keys(iconDefinitions), Object.keys(iconDefinitions)[0])} />
    , { notes: NotesLoader(name) }
    ).add("Alla ikoner", () => {
        let icons = Object.keys(iconDefinitions).map((key) => ( 
            <a href="#" onClick={(e) => clickToDownload(e,key)} title={"Klicka för att ladda ner ikonen: "+key}>
                <Icon icon={key} />
            </a> 
        ));
        return icons;
    });

    
    