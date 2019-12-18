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
import LinkArrow from '../../icons/SystemIcons/LinkArrow'
import Plane from '../../icons/SystemIcons/Plane'
import Filter from '../../icons/SystemIcons/Filter'
import List from '../../icons/SystemIcons/List'
import Picturelist from '../../icons/SystemIcons/Picturelist'

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
    Binoculars,
    LinkArrow,
    Plane,
    Filter,
    List,
    Picturelist
}

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
    const Element = iconDefinitions[icon];

    if (Element === undefined) {
        console.log(`Could not find icon in storybook tried to load: ${icon}`)
        return null
    }

    return <Element title={title} className={className} style={style} role="img" aria-label={title || ""} alt="" {...otherAttr} />
}

export { Icon, iconDefinitions };