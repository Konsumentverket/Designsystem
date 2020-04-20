/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { iconCardStyle, arrowStyle, iconStyle, iconText, noIcon } from './IconCard.css';
import { Icon } from '../Icon/Icon.js';
import { EditorIcon } from '../Icon/EditorIcon.js';


const IconCard = React.forwardRef(({ icon, text, url, style, onClick, id }, ref) => {
    const haveIcon = !icon ? noIcon : null
    return <a ref={ref} id={id} href={url} onClick={onClick} css={[iconCardStyle, style]} className="noStyle" >
        {icon && <EditorIcon aria-hidden="true" icon={icon} style={iconStyle}>Ikon</EditorIcon>}
        <span css={[iconText, haveIcon]}>{text}</span>
        <Icon aria-hidden="true" icon="Arrow" style={arrowStyle} />
    </a>
})

export { IconCard };