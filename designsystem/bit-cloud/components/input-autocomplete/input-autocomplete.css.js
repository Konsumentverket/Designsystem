import { css } from '@emotion/core'
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  position: relative;
`;

export const containerHasSuggestionsStyle = css`
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
`;

export const labelStyle = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const inputStyle = css`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
  background-color: ${newColors.kovWhite};
  color: ${newColors.shades.kovBlack50};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${newColors.shades.fullBlue};

  &::placeholder {
    color: ${newColors.secondaries.fullGrey};
    font-style: italic;
  }
`;

export const inputHasSuggestionsStyle = css`
  border-bottom: none;
  border-radius: 8px 8px 0px 0px;
`;

export const dropdownWrapperStyle = css`
  position: absolute;
  width: 100%;
  list-style: none;
  background-color: ${newColors.kovWhite};
  color: ${newColors.shades.kovBlack50};
  border: 1px solid ${newColors.shades.fullBlue};
  padding: 0;
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
`;

export const dropdownItemStyle = css`
  margin: 0;
  padding: 0;

  &[aria-selected=true] {
    border-bottom: 1px solid transparent;
    background-color: ${newColors.primaries.lightBlue};
  }
`;

export const dropdownButtonStyle = css`
  display: block;
  font-size: 1.6rem;
  line-height: 1.5;
  width: 100%;
  padding: 12px 24px;
  text-align: left;
  color: ${newColors.shades.fullBlue};
  font-family: inherit;
  margin: 0;
  background-color: transparent;
  border-bottom: 1px solid ${newColors.primaries.lightBlue};

  &:hover {
    border-bottom: 1px solid transparent;
    background-color: ${newColors.primaries.lightBlue};
  }

  &:active {
    background-color: ${newColors.shades.mediumBlue50};
  }
`;

export const loadingWrapperStyle = css`
    top: 16px;
    right: 16px;
    position: absolute;
`;
