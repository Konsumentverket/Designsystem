import { css } from '@emotion/core';

import {
  small,
  medium,
  large,
  globalStyles as GlobalStyles,
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import 'date-fns';
import { Button } from './button';

import {
  LinkArrow,
  File,
} from "@konsumentverket-sverige/designsystem.utils"

const whiteBackground = { padding: "32px", backgroundColor: "#ffffff" };
const blackBackground = { padding: "32px", backgroundColor: "#000000" };

// Basic Example
export const BasicButton = () => {
  const element = <Button
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Selected
export const BasicSelectedButton = () => {
  const element = <Button
    selected={true}
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Disabled
export const BasicDisabledButton = () => {
  const element = <Button
    disabled={true}
    onClick={() => { alert("You clicked the button!") }}
    text="Lorem ipsum"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Link Example
export const BasicLinkButton = () => {
  const element = <Button
    text="Lorem ipsum" href="#"
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// basic Secondary Example
export const BasicSecondaryBasicButton = () => {
  const element = <Button
    text="Lorem ipsum"
    secondaryButtonStyle={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Basic Inverted Example
export const BasicInvertedButton = () => {
  const element = <Button
    text="Lorem ipsum"
    invertedBackgroundColor={true}
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Cookie Compliance Custom Styling Example
export const CookieComplianceCustomStylingButton = () => {
  const cookieComplianceButtonCss = css`
    margin-right: 15px;
    background-color: #ffffff;
    color: #161616;
    font-weight: 700;
    font-size: 21px;
    height: 5.6rem;
    box-shadow: none;
    img {
      height: 100%;
      width: 24px;
      margin-right: 2rem;
      vertical-align: middle;
    }
    align-items: center;

    &:focus {
      box-shadow: 0 0 0 3px #00944b;
      outline-color: #ffffff !important;
      border-radius: 0.4rem !important;
      outline-offset: 4px;
    }

    &:hover {
      background-color: #edebeb;
      box-shadow: 0px 0px 0px 2px #161616;
      outline: none;
    }

    &:active {
      background-color: #403836;
      color: #ffffff;
      border-radius: 8px;
      outline: none;
    }

    &:disabled {
      background-color: #d0d0d0;
    }
    ${small} {
      max-width: 100%;
      font-size: 1.8rem !important;
      text-align: center;
    }
    ${medium} {
      max-width: 288px;
      font-size: 2.1rem;
      text-align: center;
    }
    ${large} {
      max-width: 677px;
    }
  `;

  const element = <>
    <Button
      text="Nej, jag avböjer"
      style={cookieComplianceButtonCss}
      iconLeft={
        <img
          src='https://www.hallakonsument.se/images/thumbs-down.svg'
          alt=''
        ></img>
      }
    />

    <Button
      text="Ja, jag godkänner"
      style={cookieComplianceButtonCss}
      iconLeft={
        <img
          src='https://www.hallakonsument.se/images/thumbs-up.svg'
          alt=''
        ></img>
      }
    />
  </>

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
}

// Animated Green Custom With Icons Styling Link
export const AnimatedGreenCustomWithIconsStylingLinkButton = () => {
  const animatedGreenCustomWithIconsStyling = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    background-color: #008054;
    color: #ffffff;
    font-weight: 700;
    font-size: 2.1rem;
    height: 5.6rem;
    box-shadow: none;
    align-items: center;
    text-decoration-color: transparent;
    border: 2px solid #008054;
    transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

    svg {
      height: 100%;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      vertical-align: middle;
      transition: fill 0.25s ease, transform 0.25s ease;
    }

    &:active svg:last-child,
    &:hover svg:last-child {
      transform: translateX(4px);
    }

    &:focus {
      outline-offset: 4px;
      box-shadow: 0 0 0 3px #ffffff;
    }

    &:hover {
      background-color: #ffffff;
      color: #008054;
      outline: none;
      text-decoration-color: transparent;
    }

    &:active svg,
    &:hover svg {
      fill: #008054;
    }

    &:active {
      background-color: #ffffff;
      color: #008054;
      outline: none;
      text-decoration-color: transparent;
    }

    ${small} {
      max-width: 100%;
      font-size: 1.8rem !important;
      text-align: center;
    }
    ${medium} {
      max-width: 288px;
      font-size: 2.1rem;
      text-align: center;
    }
    ${large} {
      max-width: 677px;
    }
  `;

  const element = <Button
    text="Gå till filarkivet"
    style={animatedGreenCustomWithIconsStyling}
    href="#"
    iconLeft={
      <File />
    }
    iconRight={
      <LinkArrow />
    }
  />;

  return (
    <>
      <GlobalStyles />
      <div style={whiteBackground}>
        {element}
      </div>
      <div style={blackBackground}>
        {element}
      </div>
    </>
  );
};
