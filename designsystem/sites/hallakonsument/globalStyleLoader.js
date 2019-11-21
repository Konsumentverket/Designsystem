import { Global } from '@emotion/core'
import {globalStyles} from '../../components/GlobalStyles/globalStyles'
import React from 'react';
import ReactDOM from 'react-dom';

var id = window.createGlobalStyleLoadingElement();

ReactDOM.render(
    <div><Global styles={globalStyles} /></div>,
    document.getElementById(id)
  );