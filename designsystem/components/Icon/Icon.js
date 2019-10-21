/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

import SVG from 'react-inlinesvg'

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
    const Element = iconDefinitions[icon];
    return <Element className={className} style={style} title={title} />
}

const Svg = ({ icon, className, style, title }) => {

    let baseUrl = "https://raw.githubusercontent.com/Konsumentverket/Konsumentverket.github.io/master/designsystem/icons/"
    let fetchUrl = (`${baseUrl}/SystemIcons/${icon}.svg`)
    return <><SVG className={className} style={style} title={title} src={fetchUrl} /></>
}

export { Icon, iconDefinitions, Svg };