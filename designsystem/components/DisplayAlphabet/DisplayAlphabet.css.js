import { css } from '@emotion/core'
import { spacing } from '../Spacing/Spacing'
import { colors } from '../Colors/Colors'
import { medium } from '../GlobalStyles/globalStyles'

export const alphabetWrapper = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${spacing.l};
`

export const link = css`
  display: block;
  font-size: ${spacing.l};
  line-height: ${spacing.xl};
  /* margin-bottom: ${spacing.xs}; */
  margin-right: ${spacing.s};
  ${medium} {
    font-size: ${spacing.m};
    line-height: ${spacing.l};
  }
`
export const invalidLetter = css`
  color: ${colors.theme3.midDark} !important;
  font-size: ${spacing.m};
  line-height: ${spacing.l};
  margin-right: ${spacing.s};
`

export const activeLetter = css`
  border: solid ${colors.theme1.dark};
  border-width: 0px 8px 3px;
  border-radius: 8px;
  margin-top: -1px;
  background-color:${colors.theme1.dark};
  color: ${colors.common.white} !important;
  :hover {
    background-color:${colors.theme1.dark} !important;
  }
`

export const linkShowAllWrapper = css`
  display: flex;
  justify-content: flex-start;
  padding-right: 0;
  margin-top: ${spacing.s};
  ${medium} {
    padding-right: ${spacing.l};
    justify-content: flex-end;
  }
`

export const linkShowAll = css`
  display: flex;
  font-size: 1.8rem;
  line-height: ${spacing.l};
  ${medium} {
    margin-left: ${spacing.s};
  }

`