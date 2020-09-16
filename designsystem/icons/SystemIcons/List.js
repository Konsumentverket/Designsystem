/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => (
	<svg className={className} css={style} height="32px" viewBox="0 0 24 24" width="32px" {...otherAttr}>
		<title>{title}</title>
		<path d="M9.62498437,14.5 L22.875,14.5 C23.4963281,14.5 24,13.9963281 24,13.375 L24,9.625 C24,9.00367188 23.4963281,8.5 22.875,8.5 L9.62498437,8.5 C9.00365625,8.5 8.49998437,9.00367188 8.49998437,9.625 L8.49998437,13.375 C8.49998437,13.9963281 9.00365625,14.5 9.62498437,14.5 M8.49998437,2.125 L8.49998437,5.875 C8.49998437,6.49632812 9.00365625,7 9.62498437,7 L22.875,7 C23.4963281,7 24,6.49632812 24,5.875 L24,2.125 C24,1.50367188 23.4963281,1 22.875,1 L9.62498437,1 C9.00365625,1 8.49998437,1.50367188 8.49998437,2.125 M9.62498437,22 L22.875,22 C23.4963281,22 24,21.4963281 24,20.875 L24,17.125 C24,16.5036719 23.4963281,16 22.875,16 L9.62498437,16 C9.00365625,16 8.49998437,16.5036719 8.49998437,17.125 L8.49998437,20.875 C8.49998437,21.4963281 9.00365625,22 9.62498437,22 M5.87498438,1 L1.125,1 C0.503671875,1 0,1.50367188 0,2.125 L0,5.875 C0,6.49632812 0.503671875,7 1.125,7 L5.87498438,7 C6.4963125,7 6.99998438,6.49632812 6.99998438,5.875 L6.99998438,2.125 C6.99998438,1.50367188 6.4963125,1 5.87498438,1 M0,17.125 L0,20.875 C0,21.4963281 0.503671875,22 1.125,22 L5.87498438,22 C6.4963125,22 6.99998438,21.4963281 6.99998438,20.875 L6.99998438,17.125 C6.99998438,16.5036719 6.4963125,16 5.87498438,16 L1.125,16 C0.503671875,16 0,16.5036719 0,17.125 M6.99998438,9.625 L6.99998438,13.375 C6.99998438,13.9963281 6.4963125,14.5 5.87498438,14.5 L1.125,14.5 C0.503671875,14.5 0,13.9963281 0,13.375 L0,9.625 C0,9.00367188 0.503671875,8.5 1.125,8.5 L5.87498438,8.5 C6.4963125,8.5 6.99998438,9.00367188 6.99998438,9.625" />
	</svg>
);
