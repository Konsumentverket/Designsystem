import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import {InputRadio} from './InputRadio'
import { text } from '@storybook/addon-knobs';
import css from '@emotion/css';
import { colors } from '../Colors/Colors';

const exampleExtraStyle = css`
    background-color: ${colors.natural.isabelline};
    border: 2px solid transparent;

    &.inputHasValue{
        border-color: ${colors.profile["blue-mid"]};
    }
`

//this wrapper functions makes the InputRadio rerender
const WrapperFunction = () => {
    const [,updater] = useState(null)
    return <>
            Default
            <InputRadio name={text("name","radio")} id="radio1" 
                        labelText={text("labelText","Im the radiobutton")} 
                        value="test" onChange={(e) => updater({})}
            />
            <br />
            Styling
            <InputRadio fieldWrapperStyle={exampleExtraStyle} name={text("name","radio")} 
                        id="radio2" labelText={text("labelText","Im the other radiobutton")} 
                        value="test2" onChange={(e) => updater({})}
            />
        </>


};


let name = 'Input radio';
storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () => <WrapperFunction />
        , { notes: NotesLoader(name) }
    );