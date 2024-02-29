import React from 'react';
import 'date-fns';
import { TextArea } from './text-area.js';

export const BasicTextArea = () => {
  return (
    <TextArea
      label="Lorem ipsum"
      placeholder="Lorem ipsum dolor sit amet"
      id="textarea"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
