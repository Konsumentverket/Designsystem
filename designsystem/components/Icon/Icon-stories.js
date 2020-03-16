import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { Icon, iconDefinitions } from './Icon';
import { select, text } from '@storybook/addon-knobs';
import css from '@emotion/css';
import { editorIconDefinitions, EditorIcon } from './EditorIcon';

var clickToDownload = (e, key) => {
    e.preventDefault();
    var svg = e.target.closest("svg")
    var svgAsXML = (new XMLSerializer).serializeToString(svg);
    var dataURL = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", dataURL);
    dl.setAttribute("download", key + ".svg");
    dl.click();
}

const iconStyle = css`
    width: 40px;
    height: 40px;
`;


let name = 'Ikon';
storiesOf('Digitala Produkter|React komponenter/Ikoner', module)
    .add(name, () => {
        var selectedDefinition = select("icon", Object.keys(iconDefinitions), Object.keys(iconDefinitions)[0]);
        return <a onClick={(e) => clickToDownload(e, selectedDefinition)}>
            <Icon
                icon={selectedDefinition}
                className={text("className", "")}
                title={text("title", "")}
                style={iconStyle}
            />
        </a>
    }, { notes: NotesLoader(name) }
    ).add("Alla ikoner", () => {
        let icons = Object.keys(iconDefinitions).map((key) => (<><br/><br/><div key={key}>{key} <br/> <Icon icon={key} style={{ fill: '#000',marginTop:'8px' }} /></div></>));
        return icons;
    }).add("Alla 'Redaktörs' ikoner",() => {
        let icons = Object.keys(editorIconDefinitions).map((key) => (<><br/><br/><div key={key}>{key} <br/> <EditorIcon icon={key} style={{ fill: '#000',marginTop:'8px' }} /></div></>));
        return icons;
    });


