import React from 'react';;
import 'date-fns';
import { FormCheckbox } from './form-checkbox.js';

export const BasicFormCheckbox = () => {
  return (
    <FormCheckbox
      id="Lorem-check"
      name="lorem-check"
      value="Lorem ipsum"
      labelText="Lorem ipsum"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
