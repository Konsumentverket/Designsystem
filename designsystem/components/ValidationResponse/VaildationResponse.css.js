import css from '@emotion/css'
import { colors } from '../Colors/Colors'

export const wrapper = success => css`
  display: flex;
  color: ${success ? colors.common.success : colors.common.warning};
  font-size: 1.4rem;
  line-height: 2.4rem;
  svg {
    align-content: center;
    margin-right: 0.4rem;
    fill: ${success ? colors.common.success : colors.common.warning};
  }
`