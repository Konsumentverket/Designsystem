/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import { wrapper, mainLinkStyle, headingStyle, linkTextCardContentStyle, linkTextMainLinkStyle } from './LinkCard.css';
import { Icon } from '../Icon/Icon';    
import {SubHeading} from '../Headings/SubHeading'

export const LinkTextCard = React.forwardRef(({text,href,children,id,
    headingLevel = 2, onClick, style, dir,lang}, ref) => {

    return <div id={id} dir={dir} css={[wrapper,style]} lang={lang}>
            <SubHeading level={headingLevel} styleLevel={3} style={headingStyle}>
                <a ref={ref} href={href} css={[mainLinkStyle,linkTextMainLinkStyle]} onClick={onClick}>
                    <span>{text}</span><Icon aria-hidden='true' icon='Arrow' />
                    {children && <span css={linkTextCardContentStyle}>{children}</span>}
                </a>
            </SubHeading>
    </div>


})