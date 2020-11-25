/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
	focusWrapper,
	pictureWrapper,
	textArea,
	focusHeadline,
	externalIcon,
	focusText,
	iconBackground,
	puffIcon,
	linkWrapper
} from './FocusPuff.css';
import React from 'react';
import External from '../Icons/SystemIcons/External/External';

export const FocusPuff = ({ headline, text, url, isExternalLink, image, imageAlt, icon, imageComponent, onClick }) => {
	let imageArea = imageComponent;
	if (imageArea == null) {
		if (image != null) imageArea = <img src={image} alt={imageAlt} />;
		else {
			
			imageArea = (
				<div className={'iconBackground'} css={iconBackground}>
					{icon && React.cloneElement(icon,{style:puffIcon})}
				</div>
			);
		}
	}

	const puffMarkup = () => {
		return (
			<div css={focusWrapper} className={'focusWrapper'}>
				<div css={pictureWrapper}>{imageArea}</div>
				<div css={textArea}>
					<h3 css={focusHeadline}>
						{headline}
						{isExternalLink && <External title="Extern länk" style={externalIcon} />}
					</h3>
					<p css={focusText}>{text}</p>
				</div>
			</div>
		);
	};

	return url !== null ? (
		<a css={linkWrapper} onClick={onClick} href={url} className="noStyle">
			{puffMarkup(FocusPuff)}
		</a>
	) : (
			puffMarkup(FocusPuff)
		);
};
