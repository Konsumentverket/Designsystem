import 'react';
import 'date-fns';
import { Dropdown } from './drop-down.js';

export const BasicDropDown = () => {
  return (
    <Dropdown label="Lorem ipsum">
      <option>Lorem</option>
      <option>Ipsum</option>
    </Dropdown>
  );
}