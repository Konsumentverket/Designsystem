import React from 'react';;
import 'date-fns';
import { FormRadiobutton } from './form-radiobutton.js';

export const BasicFormRadiobutton = () => {
  return (
    <FormRadiobutton
      name="lorem-radio"
      id="Lorem-radio"
      labelText="Lorem ipsum"
      value="Lorem ipsum"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
