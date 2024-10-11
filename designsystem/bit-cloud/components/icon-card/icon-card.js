/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { ChevronRight } from '@konsumentverket-sverige/designsystem.utils';

import {
    iconCardStyle,
    altIconCardStyle,
    chevronStyle,
    iconStyle,
    iconTextStyle,
    altLightIconCardStyle,
} from './icon-card.css.js';

const IconCard = React.forwardRef(({
    icon,
    text,
    url,
    onClick,
    id,
    useLightAlternativeColors = false,
    useAlternativeColors = false,
    contentfulName,
    contentfulId,
    linkComponent: LinkComponent = 'a',
}, ref) => {
    return <LinkComponent
        data-comp="icon-card"
        ref={ref}
        id={id}
        href={url}
        onClick={onClick}
        css={[iconCardStyle, (useAlternativeColors ? altIconCardStyle : useLightAlternativeColors ? altLightIconCardStyle : null)]}
        className="noStyle"
        data-contentful-field-id={contentfulName}
        data-contentful-entry-id={contentfulId}
        injected={true}
    >
        {icon && React.cloneElement(icon, { "aria-hidden": "true", style: iconStyle })}
        <span css={iconTextStyle}>{text}</span>
        <ChevronRight
            aria-hidden="true"
            style={chevronStyle}
        />
    </LinkComponent>
})

export { IconCard };
