import React from 'react';
import 'date-fns';
import { WithContentExpander } from './with-content-expander.js';

export const BasicWithContentExpander = () => {
  return (
      <WithContentExpander
        linkElement={<span>Lorem ipsum</span>}
        wrappedComponent={<p>Lorem ipsum</p>}
      />
  );
}
