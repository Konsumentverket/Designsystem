import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import {PrerequisitesBox} from './PrerequisitesBox'

let name = 'PrerequisitesBox';


storiesOf('Digitala Produkter|React komponenter', module)
    .add(name, () =>
        <>
        <PrerequisitesBox text="Innan du läser:">
            <div>
              <p>Har du köpt något av en annan privatperson?
              <a href="#">Gå till köplagen/köpt vara av en annan privatperson</a>
              </p>
            </div>
            <div>
              <p>Har du köpt en tjänst?
              <a href="#">Gå till konsumentlagen/vanliga tjänster</a>
              </p>
            </div>
        </PrerequisitesBox>

        <br />

        <PrerequisitesBox>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </PrerequisitesBox>
        </>
    , { notes: NotesLoader(name) }
    );