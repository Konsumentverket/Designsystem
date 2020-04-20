/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import { wrapper, mainLinkStyle, childrenWrapper, showAllLink, headingStyle } from './LinkCard.css';
import { Icon } from '../Icon/Icon';    
import {SubHeading} from '../Headings/SubHeading'

export const LinkCard = React.forwardRef(({text,href,children,id,
    headingLevel = 2, onClick, beforeToggleCount = 3, style, childrenWrapperStyle, renderChildrenInLink = false,
    showAll = false}, ref) => {

    const [show,setShow] = useState(showAll)

    useEffect(()=> {
        if(show){
            var idToFocus = id+(beforeToggleCount+1);
            document.getElementById(idToFocus).focus();
        }
        return () => {}
    },[show]);

    const childrenArray = React.Children.toArray(children);
    let itemsToShow = [];
    if(childrenArray && childrenArray.length > 0){
        itemsToShow = show ? childrenArray : childrenArray.slice(0,beforeToggleCount)
    }
    return <div id={id} css={[wrapper,style]}>
            <SubHeading level={headingLevel} styleLevel={3} style={headingStyle}>
                <a ref={ref} href={href} css={mainLinkStyle} onClick={onClick}>
                    <span>{text}</span><Icon aria-hidden='true' icon='Arrow' />
                </a>
            </SubHeading>
            {itemsToShow.length > 0 && <div css={[childrenWrapper,childrenWrapperStyle]}>
                {itemsToShow.map((item,i) => React.cloneElement(item, { id: id+(i+1) }))}
            </div>}
            {childrenArray.length > beforeToggleCount && 
            <span css={showAllLink}>
                <a href="#" 
                    onClick={(e) => {
                        e.preventDefault()
                        setShow(!show)
                    }}
                    aria-controls={id}
                    aria-expanded={show}
                >
                    {show ? `Visa färre (${beforeToggleCount})` : `Visa alla (${childrenArray.length})` }
                </a>
            </span>}
    </div>


})