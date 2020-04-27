/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { wrapper, mainLinkStyle, childrenWrapper, showAllLink, innerTextWrapperStyle, rotateArrow } from './LinkCard.css';
import { Icon } from '../Icon/Icon';    
import {SubHeading} from '../Headings/SubHeading'

export const LinkCard = React.forwardRef(({text,href,children,id,secondaryArrowStyle = false,
    headingLevel = 2, onClick, beforeToggleCount = 3, style, childrenWrapperStyle}, ref) => {

    const childrenArray = React.Children.toArray(children);
    let itemsToShow = [];
    if(childrenArray && childrenArray.length > 0){
        itemsToShow = childrenArray.slice(0,beforeToggleCount)
    }
    return <div id={id} css={[wrapper,style]}>
            <a ref={ref} href={href} css={mainLinkStyle} onClick={onClick}>
                <SubHeading level={headingLevel} styleLevel={3} style={innerTextWrapperStyle}>    
                    <span>{text}</span>
                    <Icon aria-hidden='true' style={secondaryArrowStyle ? rotateArrow : null} icon={secondaryArrowStyle ? 'LinkArrow':'Arrow'} />
                </SubHeading>
            </a>
            {itemsToShow.length > 0 && <div css={[childrenWrapper,childrenWrapperStyle]}>
                {itemsToShow}
            </div>}
            {childrenArray.length > beforeToggleCount && 
            <span css={showAllLink}>
                <a href={href} onClick={onClick}>Visa alla ({childrenArray.length})</a>
            </span>}
    </div>


})