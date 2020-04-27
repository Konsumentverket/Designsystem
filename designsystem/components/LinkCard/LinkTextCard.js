/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { wrapper, mainLinkStyle, innerTextWrapperStyle, linkTextCardContentStyle, linkTextMainLinkStyle } from './LinkCard.css';
import { Icon } from '../Icon/Icon';    
import {SubHeading} from '../Headings/SubHeading'

export const LinkTextCard = React.forwardRef(({text,href,children,id,
    headingLevel = 2, onClick, style, dir,lang}, ref) => {

    const renderLinkText = () => {

        if(children){
            return <SubHeading level={headingLevel} styleLevel={3} style={innerTextWrapperStyle}>
                <span>{text}</span><Icon aria-hidden='true' icon='Arrow' />
            </SubHeading>;
        }
        else{
            return <div css={innerTextWrapperStyle}>
                <span>{text}</span><Icon aria-hidden='true' icon='Arrow' />
            </div>
        }

    }

    return <div id={id} dir={dir} css={[wrapper,style]} lang={lang}>
            <a ref={ref} href={href} css={[mainLinkStyle,linkTextMainLinkStyle]} onClick={onClick}>
            {renderLinkText()}
            {children && <span css={linkTextCardContentStyle}>{children}</span>}
            </a>
    </div>


})