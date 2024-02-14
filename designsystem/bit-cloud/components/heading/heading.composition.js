import React from 'react';
import { Heading } from './heading.js';

export const BasicHeadings = () => {
  return (
    <>
      <Heading level={1} text="1. Lorem ipsum" />
      <Heading level={2} text="2. Lorem ipsum" />
      <Heading level={3} text="3. Lorem ipsum" />
      <Heading level={4} text="4. Lorem ipsum" />
      <Heading level={5} text="5. Lorem ipsum" />
      <Heading level={6} text="6. Lorem ipsum" />
    </>
  );
}
