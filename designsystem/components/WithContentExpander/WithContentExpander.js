/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

import {
  ComponentWrapperStyle,
  IconExpandedStyle,
  IconFullWidth,
  IconStyle,
  collapseButtonStyle,
  baseLinkStyle
} from './WithContentExpander.css'
import { Icon } from '../Icon/Icon'


const measureElement = element => {
    const DOMNode = ReactDOM.findDOMNode(element);
    return DOMNode && DOMNode.childNodes[0] && window.getComputedStyle(DOMNode.querySelectorAll("h1, h2, h3, h4, h5, h6")[0] || DOMNode.childNodes[0], null).getPropertyValue("line-height")
}


export const WithContentExpander = ({ wrappedComponent, linkElement, linkStyle, isFullWidth = true, 
    hasCollapseButton = false, show = true, scrollIntoView = false, wrapperStyle, open = false,
    wrapperId, linkHref = "" }) => {
    
    const [expanded, setExpanded] = useState(open)
    const [linkElementFontSize, setLinkElementFontSize] = useState("16px")
    const linkContainerRef = useRef()
    const topOfComponent = useRef()


    const doExpansion = e => {
        setExpanded(!expanded)
        e.stopPropagation()
        e.preventDefault()
        return false
    }

    useEffect(() => {setExpanded(open)},[open])

    useEffect(() => {
        setLinkElementFontSize(measureElement(linkContainerRef.current))
    }, [])

    useLayoutEffect(() => {
        if (scrollIntoView && topOfComponent.current && expanded) {
            const DOMNode = ReactDOM.findDOMNode(topOfComponent.current);
            DOMNode.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [expanded])

    if (!show) return null;


    return <div className={`${isFullWidth ? "full-width" : null} ${expanded ? "expanded" : null}`} id={wrapperId} css={[ComponentWrapperStyle,wrapperStyle]} ref={topOfComponent}>
        <div className="link-element" onClick={e => doExpansion(e)}>
            <a href={linkHref} onClick={(e) => e.preventDefault()} aria-haspopup="true" aria-expanded={expanded ? "true" : "false"} aria-label={linkElement.props.children || ""} className="noStyle" css={[baseLinkStyle, linkStyle]}>
                <div className="link-element-container" ref={linkContainerRef}>
                  {linkElement}
                  <Icon
                    aria-hidden="true"
                    className="expand-icon"
                    icon="Arrow"
                    style={[IconStyle(linkElementFontSize), expanded ? IconExpandedStyle : null, isFullWidth ? IconFullWidth : null]} 
                />
                </div>
            </a>
        </div>
        <div className={`expand-section ${expanded && "expanded"}`}>
            {wrappedComponent}
            {hasCollapseButton
                && <div
                    tabIndex="0"
                    onClick={(e) => {
                        const DOMNode = ReactDOM.findDOMNode(linkContainerRef.current);
                        DOMNode.scrollIntoView({ behavior: "smooth", block: "center" })
                        doExpansion(e);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {doExpansion()}
                    }}
                    css={collapseButtonStyle}>Fäll ihop<Icon icon="Arrow" /></div>}
        </div>

    </div>

}