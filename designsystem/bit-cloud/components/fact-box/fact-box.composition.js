import React from 'react';
import { FactBox } from './fact-box.js';

export const BasicFactBox = () => {
  return (
    <FactBox
      headline="Lorem ipsum"
      secondaryColor={false}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </FactBox>
  );
}
