import React from 'react';;
import 'date-fns';
import { ListItem } from './list-item.js';

export const BasicListItem = () => {
  return (
    <ListItem
      type="Lorem"
      reviewedDate={new Date().toISOString()}
      href="#"
      headline="Lorem ipsum"
      bottomText="Lorem: lorem ipsum" />
  );
}
