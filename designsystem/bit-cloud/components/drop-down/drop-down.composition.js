import React from 'react';
import { Dropdown } from './drop-down.js';

export const BasicDropDown = () => {
  return (
    <Dropdown label="Lorem ipsum">
      <option>Lorem</option>
      <option>Ipsum</option>
    </Dropdown>
  );
}