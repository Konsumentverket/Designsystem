import React, { Component } from 'react';
import Clear from './svg/clear.svg'
import Info from './svg/info.svg'
import SVG from 'react-inlinesvg';

const iconDefinitions = {
    Info,
    Clear
}

const Icon = ({icon}) => (
    <SVG src={iconDefinitions[icon]} />
)

export { Icon, iconDefinitions };