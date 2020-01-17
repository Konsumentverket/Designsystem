/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { tagItem, invertedTag, tagLink, tagsArea, tagsList, tagBlockItem, arrowStyle, iconStyle, tagHeading, tagIconHeading, tagsListItem, tagItemText } from './TagBlock.css';
import { EditorIcon } from '../Icon/EditorIcon'
import { Icon } from '../Icon/Icon'
import { Tag } from './Tag'

const GetTags = (tags) => {
    return <ul css={tagsList}>{tags.slice(0, 3).map((child, idx) => {
        return <li key={`lcbc-${idx}`} css={tagsListItem}><Tag id={idx} url={child.url} text={(child.titleInNavigation && child.titleInNavigation) || (child.title && child.title) || (child.headline && child.headline)} style={tagItem} /></li>
    })}</ul>
}

const TagBlock = ({ invertedColors = false, heading, headingLevel = 2, headingUrl, icon, ref, tags, alternativeTagText, style}) => {

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']
    const SelectedHeading = headings[headingLevel - 1] || 'h2'

    return <div css={[tagBlockItem, invertedColors ? invertedTag : null, style]}>        
    <a ref={ref} href={headingUrl} css={tagLink} >
        {icon && <EditorIcon aria-hidden="true" icon={icon} css={iconStyle}>Ikon</EditorIcon>}
        <SelectedHeading className="tagHeading" css={[tagHeading, icon != null ? tagIconHeading : null]}>{heading}</SelectedHeading>
        <Icon aria-hidden="true" icon="Arrow" style={arrowStyle} />
    </a>
    <div css={tagsArea}>
        {tags.length > 0 ? GetTags(tags) : <p css={tagItemText}>{alternativeTagText}</p> }
</div>
</div>
}

export { TagBlock };