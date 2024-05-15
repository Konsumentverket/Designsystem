import React from 'react';;
import 'date-fns';
import { Icon, systemIconDefinitions, editorIconDefinitions } from './icon.js';

import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

const iconContainerStyle = { display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px 0' };
const iconStyle = { marginTop: '8px', display: 'block' };
const titleStyle = { fontSize: '16px', fontWeight: 600, marginBottom: '24px', textAlign: 'center' };

export const BasicSystemIcon = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>System icons ({Object.keys(systemIconDefinitions).length})</h3>
      {Object.keys(systemIconDefinitions).map((key) => (
        <div style={iconContainerStyle} key={key} data-id={key}>
        <h4>{key}</h4>
          <Icon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
}

export const BasicEditorIcon = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <h3 style={titleStyle}>Editor icons ({Object.keys(editorIconDefinitions).length})</h3>
      {Object.keys(editorIconDefinitions).map((key, index) => (
        <div style={iconContainerStyle} key={key} data-id={key} data-index={index}>
          <h4>{key}</h4>
          <Icon icon={key} style={iconStyle} />
        </div>
      ))}
    </CompositionFonts>
  );
}