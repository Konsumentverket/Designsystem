import { css } from "@emotion/core";

export const wrapper = css`
    margin-bottom: 34px;
`;

export const dataListTitle = css`
    margin-bottom: 28px;
`;

export const dataList = css`
    margin-bottom: 36px;

    div {
      margin-bottom: 29px;
      font-size: 2rem;
    }

    dt {
      display: inline-block;
      font-weight: bold;
      margin-right: 8px;
    }

    dd {
      display: inline-block;
      margin: 0;
    },
`;

export const nestedContainerTitle = css`
    display: block;
`;

export const nestedFlex = css`
  display: flex !important;
  flex-direction: column;
  gap: 16px;
`;

export const nestedKeyStyle = css`
  font-weight: bold;
  margin-left: 32px;
  margin-right: 8px;
  line-height: 145%;
`;
