import React from 'react';
import { WithContentExpander } from './with-content-expander.js';

export const BasicWithContentExpander = () => {
  return (
      <WithContentExpander
        linkElement={<span>Lorem ipsum</span>}
        wrappedComponent={<p>Lorem ipsum</p>}
      />
  );
}
