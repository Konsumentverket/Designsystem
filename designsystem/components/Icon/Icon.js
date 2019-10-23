/** @jsx jsx */
import { jsx } from '@emotion/core'

import Adapt from '../../icons/SystemIcons/Adapt'
import Close from '../../icons/SystemIcons/Close'
import Easytoread from '../../icons/SystemIcons/Easytoread';
import Search from '../../icons/SystemIcons/Search';
import Signlanguage from '../../icons/SystemIcons/Signlanguage'
import Volume from '../../icons/SystemIcons/Volume'
import Otherlang from '../../icons/SystemIcons/Otherlang'
import Ecc from '../../icons/SystemIcons/Ecc'
import Arrow from '../../icons/SystemIcons/Arrow'
import Burger from '../../icons/SystemIcons/Burger'
import External from '../../icons/SystemIcons/External'
import Exclamationmark from '../../icons/SystemIcons/Exclamationmark'
import Check from '../../icons/SystemIcons/Check'
import Oval from '../../icons/SystemIcons/Oval'

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
    Oval
}

const Icon = ({icon,className, style}) => {
    const Element = iconDefinitions[icon];
    return <Element className={className} style={style} />
}

export { Icon, iconDefinitions };