/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {
    wrapper,
    mainLinkStyle,
    childrenWrapper,
    showAllLink,
    customFontSize,
    heading,
    border
} from './link-card.css.js';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

const LinkCard = React.forwardRef(({
    text,
    href,
    expandText = "Visa alla",
    children,
    id,
    icon,
    headingLevel = 2,
    onClick,
    beforeToggleCount = 4,
    childrenWrapperStyle,
    linkComponent: LinkComponent = 'a'
}, ref) => {

    const childrenArray = React.Children.toArray(children);
    let itemsToShow = [];
    let className = 'noLinkChildren';

    if (childrenArray && childrenArray.length > 0) {
        itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean)
        if (childrenArray.length > 1) className = '';
    }
    let singleItemClass = itemsToShow.length == 1 ? "singleItem" : "";

    return <div id={id} css={[wrapper]} className={className} data-comp="link-card">
        <LinkComponent
            ref={ref}
            href={href}
            css={mainLinkStyle}
            onClick={onClick}
            injected={true}
        >
            <SubHeading level={headingLevel} styleLevel={3}>
              <div css={heading}>
                <div>
                  {icon}
                  <span css={customFontSize} dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>
                <Icon icon="MonoArrowRight" />
              </div>
            </SubHeading>
          { (itemsToShow.length > 0 || itemsToShow.length == 1 && className == "noLinkChildren") && <div className="linkCardBorder" css={border}></div> }
        </LinkComponent>
        {itemsToShow.length > 0 && <div css={[childrenWrapper, childrenWrapperStyle ]} className={singleItemClass}>
            {itemsToShow}
        </div>}
        {childrenArray.length > beforeToggleCount &&
            <LinkComponent
                css={showAllLink}
                href={href}
                onClick={onClick}
                injected={true}
            >
              {expandText} ({childrenArray.length}) <Icon icon="MonoArrowRight" />
            </LinkComponent>
        }
    </div>
})

LinkCard.displayName = "LinkCard"
export { LinkCard }
