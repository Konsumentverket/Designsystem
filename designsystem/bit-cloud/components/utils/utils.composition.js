import React from 'react';
import {newColors} from './colors.js';

export const Primaries = () => (
  Object.entries(newColors.primaries).map(
    ([name, hexColor]) => colorItem(name, hexColor)
  )
);

export const Secondaries = () => (
  Object.entries(newColors.secondaries).map(
    ([name, hexColor]) => colorItem(name, hexColor)
  )
);

export const Shades = () => (
  Object.entries(newColors.shades).map(
    ([name, hexColor]) => colorItem(name, hexColor)
  )
);

const colorItem = (name, hexColor) => (
  <div key={name}
       style={{
         display: 'flex',
         gap: '12px',
         marginBottom: '8px'
       }}
  >
    <div
      style={{
        background: `${hexColor}`,
        width: '50px',
        height: '50px'
      }}>
    </div>
    <p><strong>{name}</strong> - {hexColor}</p>
  </div>
)
