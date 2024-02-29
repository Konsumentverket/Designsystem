import React from 'react';;
import 'date-fns';
import { Icon, iconDefinitions } from './icon.js';

export const BasicIcon = () => {
  const inlineStyle = { fill: '#000',marginTop:'10px', display: 'block'};
  return (
    Object.keys(iconDefinitions).map((key) => (
      <div key={key} data-id={key}>
        <Icon icon={key} style={inlineStyle} />
      </div>
    ))
  );
}
