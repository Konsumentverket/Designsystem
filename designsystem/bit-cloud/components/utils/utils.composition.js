/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core'
import {newColors} from './colors.js';
import {GlobalStyles} from "./globalstyles";
import {gridStyles, containerStyles} from "./grid";
import {breakpoints} from "./breakpoints";


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

const redBorderStyle = css`
    border: 1px solid red;
`;

const halfContainerStyle = css`
    height: 20rem;
    border: 1px solid black;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerStylesExample = () => {
  return (
    <>
      <GlobalStyles/>
      <div css={[containerStyles, redBorderStyle]}>
        <div css={[halfContainerStyle]}>
          50%
        </div>
      </div>
    </>
  )
}

const halfGridStyle = css`
    grid-column-start: 1;
    grid-column-end: 4;
    height: 20rem;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.m}) {
        grid-column-start: 1;
        grid-column-end: 6;
      }

      @media (min-width: ${breakpoints.l}) {
        grid-column-start: 1;
        grid-column-end: 10;
      }
`;

export const GridStylesExample = () => {
  return (
    <>
      <GlobalStyles />
      <div css={[gridStyles, redBorderStyle]}>
        <div css={[halfGridStyle]}>
          50%
        </div>
      </div>
    </>
  )
}
