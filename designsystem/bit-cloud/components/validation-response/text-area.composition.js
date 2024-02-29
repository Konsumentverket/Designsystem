import React from 'react';
import 'date-fns';
import { ValidationResponse } from './validation-response.js';

export const BasicValidationResponse = () => {
  return (
    <>
      <ValidationResponse
        success={true}
        text="Lorem ipsum"
      />
      <ValidationResponse
        success={false}
        text="Lorem ipsum"
      />
    </>
  );
}
