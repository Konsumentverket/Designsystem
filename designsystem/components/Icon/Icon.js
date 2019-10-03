
import React from 'react'

import Adapt from './svg/Adapt'
import Close from './svg/Close'
import Easytoread from './svg/Easytoread';
import Search from './svg/Search';
import Signlanguage from './svg/Signlanguage'
import Volume from './svg/Volume'
import Otherlang from './svg/Otherlang'
import Ecc from './svg/Ecc'
import Arrow from './svg/Arrow'
import Burger from './svg/Burger'
import External from './svg/External'

const iconDefinitions = {
    Adapt,
    Close,
    Easytoread,
    Search,
    Signlanguage,
    Volume,
    Otherlang,
    Arrow,
    Ecc,
    Burger,
    External
}

const Icon = ({ icon, className, style, title }) => {
    console.log({ icon })
    const Element = iconDefinitions[icon];
    return <Element className={className} style={style} title={title} />
}

export { Icon, iconDefinitions };