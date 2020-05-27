/** @jsx jsx */
import { jsx } from '@emotion/core';
export const warnPath =
	'M6.78687222,5.24038333 L6.99292778,9.01816111 C7.00256667,9.19493889 7.14873333,9.33332778 7.32576111,9.33332778 L8.67426111,9.33332778 C8.85126111,9.33332778 8.99745556,9.19493889 9.00709444,9.01816111 L9.21315,5.24038333 C9.22356667,5.04943889 9.07153889,4.88888333 8.88031667,4.88888333 L7.11967778,4.88888333 C6.92845556,4.88888333 6.77645556,5.04943889 6.78687222,5.24038333 L6.78687222,5.24038333 Z M8.00001111,9.83332778 C7.29431667,9.83332778 6.72223333,10.4054111 6.72223333,11.1111056 C6.72223333,11.8168 7.29431667,12.3888833 8.00001111,12.3888833 C8.70570556,12.3888833 9.27778889,11.8168 9.27778889,11.1111056 C9.27778889,10.4054111 8.70570556,9.83332778 8.00001111,9.83332778 L8.00001111,9.83332778 Z M15.8199,12.2225778 C16.3326222,13.1113 15.6890667,14.2222167 14.6650111,14.2222167 L1.33484444,14.2222167 C0.308816667,14.2222167 -0.331794444,13.1096056 0.179927778,12.2225778 L6.84509444,0.666244444 C7.35806667,-0.222894444 8.64284444,-0.221283333 9.15492778,0.666244444 L15.8199,12.2225778 Z';

export default ({ className, style, title, ...otherAttr }) => {
	return (
		<svg className={className} css={style} width="20px" height="20px" viewBox="0 0 20 20" {...otherAttr}>
			<title>{title}</title>
			<path d={warnPath}></path>
		</svg>
	);
};
