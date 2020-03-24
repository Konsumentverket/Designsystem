/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon } from '../Icon/Icon'
import { wrapper, exclamationMarkImage, heading } from './PrerequisitesBox.css'
import { SubHeading } from '../Headings/SubHeading'

export const PrerequisitesBox = ({ text, children,
    wrapperStyle }) => {
    if (children == null) return null;
    return <div css={[wrapper, wrapperStyle]}>
        <Icon icon="Exclamationmark" style={exclamationMarkImage} />
        {text && <SubHeading style={heading} text={text} styleLevel={3} />}
        {children}
    </div>
}

