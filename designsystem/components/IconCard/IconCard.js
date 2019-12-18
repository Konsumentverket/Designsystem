/** @jsx jsx */
import { jsx } from '@emotion/core'
import { iconCardStyle, arrowStyle, iconStyle, topAreaIcon } from './IconCard.css';
import { Icon } from '../Icon/Icon.js';
import { EditorIcon } from '../Icon/EditorIcon.js';
import { SubHeading } from '../Headings/SubHeading';


const IconCard = ({ icon, text, url, style, headingLevel = 2 }) => {
    return <a href={url} css={[iconCardStyle, style]} >
        {icon && <EditorIcon aria-hidden="true" icon={icon} style={iconStyle}>Ikon</EditorIcon>}
        <SubHeading level={headingLevel}>{text}</SubHeading>
        <Icon aria-hidden="true" icon="Arrow" style={arrowStyle} />
    </a>
}

export { IconCard };