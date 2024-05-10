/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import React from 'react';
import {headerStyle} from "./header.css";

export const Header = () => {

  return (
    <header css={headerStyle}>

        <a href="/">Logotyp</a>
        <button>

        </button>
    </header>
  );
}

Header.propTypes = {

}

Header.defaultProps = {

};
