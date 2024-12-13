/** @jsx jsx */
import { jsx } from '@emotion/core';

export const ArrowAngleRight = ({ className, style, title, ...otherAttr }) => {
	return (
		<svg className={className} css={style} width="6" height="8" viewBox="0 0 6 8"  {...otherAttr}>
			<title>{title}</title>
        <path d="M5.79561 4.42487L1.84571 7.8238C1.5727 8.05873 1.13124 8.05873 0.861136 7.8238L0.204756 7.25898C-0.0682519 7.02405 -0.0682519 6.64417 0.204756 6.41175L3.00454 4.0025L0.204756 1.59325C-0.0682519 1.35833 -0.0682519 0.978444 0.204756 0.746017L0.858232 0.176195C1.13124 -0.0587316 1.5727 -0.0587316 1.8428 0.176195L5.7927 3.57513C6.06861 3.81006 6.06861 4.18994 5.79561 4.42487Z" fill="#4E4745"/>
    </svg>
	);
};