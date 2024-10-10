import { css } from '@emotion/core'
import { newColors, medium } from '@konsumentverket-sverige/designsystem.utils';

export const eventBoxWrapper = css`
  display: flex;
  width: 100%;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 16px;
  background-color: ${newColors.primaries.lightBlue};
`
