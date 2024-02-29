import React from 'react';;
import 'date-fns';
import { LinkCard } from './link-card.js';

export const BasicLinkCard = () => {
  return (
    <LinkCard 
      id="one"
      href="#"
      text="Lorem ipsum dolor set amet"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
    </LinkCard>
  );
}
