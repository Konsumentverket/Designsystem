/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import IconCss from './Icon.css';

import cars from './svg/cars.svg'
import clothes from './svg/clothes.svg'
import furniture from './svg/furniture.svg'
import other from './svg/other.svg'
import telecom from './svg/telecom.svg'


import SVG from 'react-inlinesvg';






const iconDefinitions = {
    cars,
    clothes,
    furniture,
    other,
    telecom
}

const Icon = ({icon,className}) => (
    <SVG css={IconCss} src={iconDefinitions[icon]} className={className}></SVG>
)

export { Icon, iconDefinitions };