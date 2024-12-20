import { css } from '@emotion/core';
import {
  newColors,
  breakpoints,
  typography,
} from '@konsumentverket-sverige/designsystem.utils';

export const form = css`
  display: flex;
  flex-direction: column;
  background-color: ${newColors.shades.lightBlue50};
  border-radius: 8px;
  padding: 24px 16px;

  @media (min-width: ${breakpoints.m}) {
    padding: 24px;
  }

  .submitButton {
    @media (min-width: ${breakpoints.m}) {
      margin-left: auto;
    }
  }
`;

export const formTitle = css`
  ${typography.h2NoMargin};
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.m}) {
    margin-bottom: 32px;
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
    margin-right: 16px;
    height: 23px;
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

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 0;
    }

    &::placeholder {
      ${typography.textSmall};
      font-style: italic;
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
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;

  label {
    margin-bottom: 0;
  }
`;

export const informationButtonWrapper = css`
  position: relative;
  top: -4px;
`;

export const informationButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    display: none;
    z-index: 2;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${newColors.primaries.lightOrange};
  }
`;

export const informationButtonOpen = css`
    &::after {
      display: block;
    }
`;

export const tooltip = css`
  display: none;
  background: ${newColors.primaries.lightOrange};
  padding: 16px 16px 0 16px;
  position: absolute;
  width: 275px;
  left: -127px;
  top: calc(100% + 11px);
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(22, 34, 89, 0.10);

  button {
    background: none;
    display: flex;
    align-self: baseline;
    margin-left: 8px;
    cursor: pointer;
  }

  svg {
    fill: ${newColors.primaries.fullBlue};
    width: 14px;
    height: 14px;
  }
`;

export const tooltipText = css`
  ${typography.textMini};
`;

export const showTooltip = css`
  display: flex;
  justify-content: space-between;
`;

export const leftPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -21px;
  }
`;

export const centerPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -127px; // (275 / 2) - (23 / 2)
  }
`;

export const rightPosition = css`
  @media (min-width: ${breakpoints.m}) {
    left: -227px; // 250 - 23
  }
`;

export const inputWrapper = css`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-right: 70px;
  }
`;

export const characterCount = css`
  ${typography.textSmall};
  color: ${newColors.readingBlack};
  background: #ffffff;
  padding: 2px 0 2px 2px;
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
  bottom: 12px;
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
