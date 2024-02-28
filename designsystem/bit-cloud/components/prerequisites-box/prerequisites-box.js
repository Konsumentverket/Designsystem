/** @jsx jsx */
import { jsx } from '@emotion/core'
import { wrapper, exclamationMarkImage, heading } from './prerequisites-box.css.js'
import { SubHeading } from '@frojd/designsystem-scope.sub-heading';
import { Exclamationmark } from "@frojd/designsystem-scope.utils";

export const PrerequisitesBox = ({
  text,
  children,
  wrapperStyle
}) => {
  if (children == null)
    return null;

  return (
    <div css={[wrapper, wrapperStyle]}>
      <Exclamationmark style={exclamationMarkImage} />
      {text && <SubHeading style={heading} text={text} styleLevel={3} />}
      {children}
    </div>
  )
}
