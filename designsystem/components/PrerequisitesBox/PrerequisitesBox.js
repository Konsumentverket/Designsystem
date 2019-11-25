/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon } from '../Icon/Icon'
import { wrapper, exclamationMarkImage, heading, content } from './PrerequisitesBox.css'

export const PrerequisitesBox = ({text, children,
                            wrapperStyle}) =>
  <div css={[wrapper,wrapperStyle]}>
    <Icon icon="Exclamationmark" style={exclamationMarkImage} />
        {text && <strong css={heading}>{text}</strong>}
        <div css={content}>
            {children}
        </div>
  </div>

