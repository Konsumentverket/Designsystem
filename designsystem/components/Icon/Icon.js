/** @jsx jsx */
import { jsx } from '@emotion/core';

import Adapt from '../../icons/SystemIcons/Adapt';
import Close from '../../icons/SystemIcons/Close';
import Easytoread from '../../icons/SystemIcons/Easytoread';
import Search from '../../icons/SystemIcons/Search';
import Signlanguage from '../../icons/SystemIcons/Signlanguage';
import Volume from '../../icons/SystemIcons/Volume';
import Otherlang from '../../icons/SystemIcons/Otherlang';
import Ecc from '../../icons/SystemIcons/Ecc';
import Arrow from '../../icons/SystemIcons/Arrow';
import Burger from '../../icons/SystemIcons/Burger';
import External from '../../icons/SystemIcons/External';
import Exclamationmark from '../../icons/SystemIcons/Exclamationmark';
import Check from '../../icons/SystemIcons/Check';
import Oval from '../../icons/SystemIcons/Oval';
import LinkArrow from '../../icons/SystemIcons/LinkArrow';
import Filter from '../../icons/SystemIcons/Filter';
import List from '../../icons/SystemIcons/List';
import Picturelist from '../../icons/SystemIcons/Picturelist';
import Clear from '../../icons/SystemIcons/Clear';
import Camera from '../../icons/SystemIcons/Camera';
import Play from '../../icons/SystemIcons/Play';
import FileExcel from '../../icons/SystemIcons/FileExcel';
import FilePdf from '../../icons/SystemIcons/FilePdf';
import FilePowerpoint from '../../icons/SystemIcons/FilePowerpoint';
import FileWord from '../../icons/SystemIcons/FileWord';
import File from '../../icons/SystemIcons/File';
import Warn from '../../icons/SystemIcons/Warn';

const iconDefinitions = {
	Adapt,
	Close,
	Easytoread,
	External,
	Search,
	Signlanguage,
	Volume,
	Otherlang,
	Arrow,
	Ecc,
	Burger,
	Exclamationmark,
	Check,
	Oval,
	LinkArrow,
	Filter,
	List,
	Picturelist,
	Clear,
	Camera,
	Play,
	FileExcel,
	FilePdf,
	FilePowerpoint,
	FileWord,
	File,
	Warn
};

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
	const Element = iconDefinitions[icon];

	if (Element === undefined) {
		console.log(`Could not find icon in storybook tried to load: ${icon}`);
		return null;
	}

	return (
		<Element
			focusable="false"
			title={title || icon || ''}
			className={className}
			style={style}
			role="img"
			aria-label={title || icon || ''}
			{...otherAttr}
		/>
	);
};

export { Icon, iconDefinitions };
