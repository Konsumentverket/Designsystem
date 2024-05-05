import React from 'react';;
import 'date-fns';
import { Heading } from './heading.js';

export const BasicHeadings = () => {
  return (
    <>
      <Heading level={1} text="h1 Lorem ipsum" />
      <Heading level={1} text="h1 with styleLevel 4" styleLevel={4} />
      <Heading level={2} text="h2 Lorem ipsum" />
      <Heading level={3} text="h3 Lorem ipsum" />
      <Heading level={4} text="h4 Lorem ipsum" />
      <Heading level={5} text="h5 Lorem ipsum" />
      <Heading level={6} text="h6 Lorem ipsum" />
    </>
  );
}
