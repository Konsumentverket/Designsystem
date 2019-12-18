import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import {InputRadio} from './InputRadio'
import { text } from '@storybook/addon-knobs';
import css from '@emotion/css';
import { colors } from '../Colors/Colors';

//this wrapper functions makes the InputRadio rerender
const WrapperFunction = () => {
    const [,updater] = useState(null)
    return <>
            Default
            <InputRadio name={text("name","radio")} id="radio1" 
                        labelText={text("labelText","Im the radiobutton 1")} 
                        value="value1" onChange={(e) => updater({})}
            />
            <br />
            <InputRadio name={text("name","radio")} id="radio1" 
                        labelText={text("labelText","Im the radiobutton 2")} 
                        value="value2" onChange={(e) => updater({})}
            />
            <br />
            <InputRadio name={text("name","radio")} id="radio1" 
                        labelText={text("labelText","Im the radiobutton 3")} 
                        value="value3" onChange={(e) => updater({})}
            />
            
            <br />

        </>


};


let name = 'Input radio';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => <WrapperFunction />
        , { notes: NotesLoader(name) }
    );