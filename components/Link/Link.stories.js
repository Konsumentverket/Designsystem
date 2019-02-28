import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link.js';

storiesOf('Link', module)
    .add('Standard Link', () =>
        <Link text="texten" linkUrl="http://barometern.se" />
    ); 