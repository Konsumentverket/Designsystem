/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon } from '../Icon/Icon'
import { wrapper, exclamationMarkImage, heading } from './PrerequisitesBox.css'

export const PrerequisitesBox = ({text, children,
                            wrapperStyle}) => {
      if(children == null) return null;
      return <div css={[wrapper,wrapperStyle]}>
                <Icon icon="Exclamationmark" style={exclamationMarkImage} />
                {text && <strong css={heading}>{text}</strong>}
                {children}
            </div>
  }

