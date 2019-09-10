/** @jsx jsx */
import { jsx } from '@emotion/core'

import Adapt from './svg/Adapt'
import Close from './svg/Close'
import Easytoread from './svg/Easytoread';
import Search from './svg/Search';
import Signlanguage from './svg/Signlanguage'
import Volume from './svg/Volume'
import Otherlang from './svg/Otherlang'
import Ecc from './svg/Ecc'
import Arrow from './svg/Arrow'

const iconDefinitions = {
    Adapt,
    Close,
    Easytoread,
    Search,
    Signlanguage,
    Volume,
    Otherlang,
    Arrow,
    Ecc
}

const Icon = ({icon,className, style}) => {
    const Element = iconDefinitions[icon];
    return <Element className={className} style={style} />
}

export { Icon, iconDefinitions };