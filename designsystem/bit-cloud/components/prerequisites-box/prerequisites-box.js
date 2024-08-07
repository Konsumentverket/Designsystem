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
        <h3 css={titleStyling}>{text}</h3>
      )}
      {children}
    </div>
  )
}
