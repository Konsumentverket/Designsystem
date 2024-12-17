import { css } from '@emotion/core';
import {
  checkPath,
  colors,
  newColors,
  spacing,
  breakpoints, typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const form = css`
  display: flex;
  flex-direction: column;
  background-color: ${newColors.shades.lightBlue50};
  border-radius: 8px;
  padding: 24px;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 35px;
  }

  button {
    @media (min-width: ${breakpoints.m}) {
      margin-left: auto;
    }
  }
`;

export const formRow = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 18px;

  @media (min-width: ${breakpoints.m}) {
    flex-direction: row;
    margin-bottom: 40px;
  }

  div:not(.tooltip) {
    position: relative;
    width: 100%;
  }

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 16px;
  }

  input {
    height: 57px;
    padding: 0 16px;
  }

  input,
  textarea {
    border-radius: 8px;
    border: 1px solid ${newColors.shades.fullBlue};
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 0;
    }

    &::placeholder {
      ${typography.textSmall};
    }
  }

  textarea {
    min-height: 57px;
    padding: 12px 16px;
    resize: vertical;

    &::placeholder {
      font-style: italic;
    }
  }
`;

export const labelWrapper = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  label {
    margin-bottom: 0;
  }
`;

export const informationButtonWrapper = css`
  outline: 1px solid green;
  position: relative;
`;

export const informationButton = css`
  outline: 1px solid hotpink;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const tooltip = css`
  background: ${newColors.primaries.lightOrange};
  padding: 16px;
  display: flex;
  position: absolute;
  max-width: 251px;
  left: 0;
  top: calc(100% + 10px);
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(22, 34, 89, 0.10);

  button {
    background: none;
    display: flex;
    align-self: baseline;
    margin-left: 8px;
  }

  svg {
    fill: ${newColors.primaries.fullBlue};
    width: 14px;
    height: 14px;
  }
`;



export const inputWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const characterCount = css`
  ${typography.textSmall};
  color: ${newColors.readingBlack};
`;

export const characterCountInput = css`
  ${characterCount};
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const characterCountTextArea = css`
  ${characterCount};
  position: absolute;
  right: 16px;
  bottom: 32px;

  @media (min-width: ${breakpoints.m}) {
    bottom: 12px;
  }
`;


export const exceededMaxCount = css`
  color: ${newColors.secondaries.fullPink};
  background-color: #ffffff;
`;

export const errorMessage = css`
    align-items: center;
    color: ${newColors.secondaries.fullPink};
    display: flex;
    gap: 6px;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 8px;

    @media (min-width: ${breakpoints.m}) {
      bottom: -30px;
    }

    svg {
      flex-shrink: 0;
    }
`;

export const childrenContainer = css`
  margin-bottom: 24px;
`;

export const recaptchaContainer = css`
  margin-bottom: 24px;
  position: relative;
`;

export const inputError = css`
  border-color: ${newColors.secondaries.fullPink} !important;
`;
