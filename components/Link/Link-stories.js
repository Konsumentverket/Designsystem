import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link.js';

storiesOf('Digitala Produkter|Komponenter/Atomer/Länkar', module)
    .add('Länk', () =>
        <Link text="texten" linkUrl="http://barometern.se" />
    );