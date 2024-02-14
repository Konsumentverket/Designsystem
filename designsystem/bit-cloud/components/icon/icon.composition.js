import React from 'react';
import { Icon, iconDefinitions } from './icon.js';

export const BasicIcon = () => {
  const inlineStyle = { fill: '#000',marginTop:'10px', display: 'block'};
  return (
    Object.keys(iconDefinitions).map((key) => (
      <Icon key={key} icon={key} style={inlineStyle} />
    ))
  );
}
