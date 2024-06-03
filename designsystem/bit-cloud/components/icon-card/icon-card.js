/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { ChevronRight } from '@konsumentverket-sverige/designsystem.utils';

import {
    iconCardStyle,
    altIconCardStyle,
    chevronStyle,
    iconStyle,
    iconTextStyle
} from './icon-card.css.js';

const IconCard = React.forwardRef(({
    icon,
    text,
    url,
    onClick,
    id,
    useAlternativeColors = false,
}, ref) => {
    return <a
        ref={ref}
        id={id}
        href={url}
        onClick={onClick}
        css={[iconCardStyle, useAlternativeColors ? altIconCardStyle : null]}
        className="noStyle"
    >
        {icon && React.cloneElement(icon, { "aria-hidden": "true", style: iconStyle })}
        <span css={iconTextStyle}>{text}</span>
        <ChevronRight
            aria-hidden="true"
            css={chevronStyle}
        />
    </a>
})

export { IconCard };
