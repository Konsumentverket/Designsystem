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
import Binoculars from '../../icons/SystemIcons/Binoculars'

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
    Binoculars
}

const Icon = ({ icon, className, style }) => {
    const Element = iconDefinitions[icon];
    return Element ? <Element className={className} style={style} /> : <span className={`Missing icon ${icon}`} />
}

export { Icon, iconDefinitions };