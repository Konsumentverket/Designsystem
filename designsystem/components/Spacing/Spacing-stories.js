/** @jsx jsx */
import {css,jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../../misc/Page/Page';
import spacing from './Spacing'
import colors from '../Colors/Colors'


const baseSize = 16;
let name = 'Avstånd';
storiesOf('Digitala Produkter|Komponenter/Konstanter', module)
    .add(name, () =>
        <Page>
            <h1>Avstånd med {baseSize} pixlars root</h1>
            <table>
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Värde (rem)</th>
                        <th>Värde (px)</th>
                        <th>Exempel</th>
                    </tr>
                </thead>
                <tbody>
                {Object.keys(spacing).map(token => {
                    const value = spacing[token];
                    const valuePx = 1 * parseFloat(value) * baseSize;
                    return (<tr>
                                <td>{token}</td>
                                <td>{value}</td>
                                <td>{valuePx}</td>
                                <td><div css={{
                                        width:value,
                                        height:value,
                                        backgroundColor:colors.profile["blue-mid"]}}>
                                    </div>
                                </td>
                            </tr>);
                })}
                </tbody>

            </table>
        </Page>
    );