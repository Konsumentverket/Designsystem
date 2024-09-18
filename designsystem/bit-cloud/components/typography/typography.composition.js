import 'date-fns';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { Typography } from './typography';

export const BasicTypography = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <Typography children={
          <>
          <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
            <p>Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. <em>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</em></p>
            <p>Here is an example of a link: <a href="#">Click here</a>.</p>

            <h2>Lists</h2>
            <h3>Unordered List</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
            </ul>

            <h3>Ordered List</h3>
            <ol>
                <li>Vestibulum id ligula porta felis euismod semper</li>
                <li>Donec ullamcorper nulla non metus auctor fringilla</li>
                <li>Cras justo odio, dapibus ac facilisis in, egestas eget quam</li>
                <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros</li>
            </ol>
          </>
        }/>
      </CompositionFonts>
    </>
  );
}

export const TypographySmall = () => {
  return (
    <>
      <CompositionFonts>
        <GlobalStyles />
        <Typography small children={
          <>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
            <p>Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. <em>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</em></p>
            <p>Here is an example of a link: <a href="#">Click here</a>.</p>

            <h2>Lists</h2>
            <h3>Unordered List</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>

            <h3>Ordered List</h3>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper</li>
              <li>Donec ullamcorper nulla non metus auctor fringilla</li>
              <li>Cras justo odio, dapibus ac facilisis in, egestas eget quam</li>
              <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros</li>
            </ol>
          </>
        }/>
      </CompositionFonts>
    </>
  );
}
