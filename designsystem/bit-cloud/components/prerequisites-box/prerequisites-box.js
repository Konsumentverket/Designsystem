/** @jsx jsx */
import { jsx } from '@emotion/core'
import { wrapperStyling, titleStyling } from './prerequisites-box.css.js'


export const PrerequisitesBox = ({
  text,
  children
}) => {
  if (children == null) {
    return null;
  }

  return (
    <div css={[wrapperStyling]}>
      {text && (
        <h2 css={titleStyling}>{text}</h2>
      )}
      {children}
    </div>
  )
}
