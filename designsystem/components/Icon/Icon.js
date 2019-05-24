/** @jsx jsx */
import { jsx } from '@emotion/core'
import IconCss from './Icon.css';

import Cars from './svg/cars.svg';
import Clothes from './svg/clothes.svg';
import Furniture from './svg/furniture.svg';
import Other from './svg/other.svg';
import Telecom from './svg/telecom.svg';



const iconDefinitions = {
    Cars,
    Clothes,
    Furniture,
    Other,
    Telecom
}

const Icon = ({icon,className}) => {
    const Element = iconDefinitions[icon];
    return <Element className={className} css={IconCss} />
}

export { Icon, iconDefinitions };