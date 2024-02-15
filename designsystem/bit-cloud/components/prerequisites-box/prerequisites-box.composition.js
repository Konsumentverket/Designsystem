import React from 'react';
import { PrerequisitesBox } from './prerequisites-box.js';

export const BasicPrerequisitesBox = () => {
  return (
    <PrerequisitesBox text="Lorem ipsum dolor sit amet:">
      <div>
        <p>Lorem ipsum dolor sit amet adipiscing elit?</p>
        <a href="#">Ut enim ad minim veniam</a>
      </div>
      <br />
      <div>
        <p>Excepteur sint occaecat cupidatat non proident?</p>
        <a href="#">Duis aute irure dolor in reprehenderit</a>
      </div>
    </PrerequisitesBox>
  );
}
