import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Icon, iconDefinitions } from './Icon';
import { select, text } from '@storybook/addon-knobs';

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
    .add(name, () => {
        var selectedDefinition = select("icon", Object.keys(iconDefinitions), Object.keys(iconDefinitions)[0]);
        return <a onClick={(e) => clickToDownload(e,selectedDefinition)}>
            <Icon 
                icon={selectedDefinition} 
                className={text("className","")}
            />
        </a>
    }, { notes: NotesLoader(name) }
    ).add("Alla ikoner", () => {
        let icons = Object.keys(iconDefinitions).map((key) => ( <div key={key}>{key}<Icon icon={key} /></div> ));
        return icons;
    });;

    
    