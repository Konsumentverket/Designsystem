
/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as css from './DisplayAlphabet.css.js'
import { vi } from 'date-fns/locale'

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'Å', 'Ä', 'Ö'
]

export const DisplayAlphabet = ({
  onClickLetter,
  onClickShowAll,
  activeLetter,
  visibleLetters
}) => <div>
    <div css={css.alphabetWrapper}>
      {alphabet.map(letter =>
        <a
          key={letter}
          tabIndex={(visibleLetters && Array.isArray(visibleLetters)) ? !visibleLetters.some(v => v === letter) ? '-1' : null : null}
          css={[
            css.link,
            (visibleLetters && Array.isArray(visibleLetters)) ? !visibleLetters.some(v => v === letter) ? css.invalidLetter : null : null,
            letter === activeLetter ? css.activeLetter : null
          ]}
          href={visibleLetters.some(v => v === letter) ? `?letter=${letter}` : `/`}
          data-letter={letter}
          onClick={onClickLetter}
        >{letter}</a>)}
    </div>
    <div css={css.linkShowAllWrapper}>
      <a css={css.linkShowAll}
        href={`?letter=alla`}
        onClick={onClickShowAll}
      >Visa Alla A-Ö</a>
    </div>
  </div>
