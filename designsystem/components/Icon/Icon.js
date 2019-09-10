/** @jsx jsx */
import { jsx } from '@emotion/core'

import Adapt from './svg/Adapt'
import Close from './svg/Close'
import Easytoread from './svg/Easytoread';
import Search from './svg/Search';
import Signlanguage from './svg/Signlanguage'
import Volume from './svg/Volume'
import Otherlang from './svg/Otherlang'

const iconDefinitions = {
    Adapt,
    Close,
    Easytoread,
    Search,
    Signlanguage,
    Volume,
    Otherlang
}

const Icon = ({icon,className, style}) => {
    const Element = iconDefinitions[icon];
    return <svg className={className} css={style} width="24px" height="24px" viewBox="0 0 24 24">
                <Element />
            </svg> 
}

export { Icon, iconDefinitions };