/** @jsx jsx */
import { jsx } from '@emotion/core'
import IconCss from './Icon.css';

import Adapt from './svg/adapt.svg';
import Close from './svg/close.svg';
import Easytoread from './svg/easytoread.svg';
import Search from './svg/search.svg';
import Signlanguage from './svg/signlanguage.svg'
import Otherlang from './svg/otherlang.svg'
import Volume from './svg/volume.svg'




const iconDefinitions = {
    Adapt,
    Close,
    Easytoread,
    Search,
    Signlanguage,
    Volume,
    Otherlang
}

const Icon = ({icon,className}) => {
    const Element = iconDefinitions[icon];
    return <Element className={className} css={IconCss} />
}

export { Icon, iconDefinitions };