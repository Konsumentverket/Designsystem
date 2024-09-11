import { css } from '@emotion/core'
import { newColors } from '@konsumentverket-sverige/designsystem.utils';

export const containerStyle = css`
  position: relative;
`;

export const containerHasSuggestionsStyle = css`
  box-shadow: 0px 4px 20px 0px rgba(22, 34, 89, 0.10);
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
  border-top: 1px solid ${newColors.shades.fullBlue};
  border-left: 1px solid ${newColors.shades.fullBlue};
  border-right: 1px solid ${newColors.shades.fullBlue};
  border-bottom: 1px solid ${newColors.shades.fullBlue};

  &::placeholder {
    color: ${newColors.secondaries.fullGrey};
    font-style: italic;
  }
`;

export const inputHasSuggestionsStyle = css`
  border-top: 1px solid ${newColors.shades.fullBlue};
  border-left: 1px solid ${newColors.shades.fullBlue};
  border-right: 1px solid ${newColors.shades.fullBlue};
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
  padding: 0 24px;
  border-radius: 0px 0px 8px 8px;
`;

export const dropdownItemStyle = css`
  padding: 12px 0;
  margin: 0;
  border-bottom: 1px solid ${newColors.primaries.lightBlue};
`;

export const dropdownButtonStyle = css`
  color: ${newColors.shades.fullBlue};
  font-family: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

export const loadingWrapperStyle = css`
    top: 16px;
    right: 16px;
    position: absolute;
`;
