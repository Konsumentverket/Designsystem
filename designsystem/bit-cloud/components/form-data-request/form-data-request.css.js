import { css } from '@emotion/core';
import {
  checkPath,
  colors,
  newColors,
  spacing,
  breakpoints,
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
    margin-bottom: 58px;
  }

  div {
    position: relative;
    width: 100%;
  }

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 18px;
  }

  input {
    border-radius: 8px;
    border: 1px solid ${newColors.shades.fullBlue};
    height: 57px;
    padding: 0 16px;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 24px;

    @media (min-width: ${breakpoints.m}) {
      margin-bottom: 0;
    }
  }

  span {
    align-items: center;
    bottom: -8px;
    color: ${newColors.secondaries.fullPink};
    display: flex;
    gap: 6px;
    position: absolute;

    @media (min-width: ${breakpoints.m}) {
      bottom: -30px;
    }
  }
`;

export const childrenContainer = css`
  margin-bottom: 24px;
`;

export const inputError = css`
  border-color: ${newColors.secondaries.fullPink} !important;
`;
