/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {
    wrapper,
    mainLinkStyle,
    childrenWrapper,
    showAllLink,
    customFontSize
} from './link-card.css.js';
import { SubHeading } from '@konsumentverket-sverige/designsystem.sub-heading';
import { LinkArrow, Arrow } from '@konsumentverket-sverige/designsystem.utils';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

const LinkCard = React.forwardRef(({
    text,
    href,
    children,
    id,
    icon,
    headingLevel = 2,
    onClick,
    beforeToggleCount = 3,
    childrenWrapperStyle
}, ref) => {

    const childrenArray = React.Children.toArray(children);
    let itemsToShow = [];
    let className = 'noLinkChildren';

    if (childrenArray && childrenArray.length > 0) {
        itemsToShow = childrenArray.slice(0, beforeToggleCount).filter(Boolean)
        if (childrenArray.length > 1) className = '';
    }

    return <div id={id} css={[wrapper]} className={className} data-comp="link-card">
        <a ref={ref} href={href} css={mainLinkStyle} onClick={onClick}>
            <SubHeading level={headingLevel} styleLevel={3}>
              <div>
                {icon}
                <span css={customFontSize} dangerouslySetInnerHTML={{ __html: text }}></span>
              </div>
              <Icon icon="ChevronLeft" />

            </SubHeading>
        </a>
        {itemsToShow.length > 0 && <div css={[childrenWrapper, childrenWrapperStyle]}>
            {itemsToShow}
        </div>}
        {childrenArray.length > beforeToggleCount &&
          <a css={showAllLink} href={href} onClick={onClick}>Visa alla ({childrenArray.length}) <Icon icon="ChevronLeft" /></a>
        }
    </div>
})

LinkCard.displayName = "LinkCard"
export { LinkCard }
