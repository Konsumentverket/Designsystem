/** @jsx jsx */
import {css,jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import colors from './Colors'
import Page from '../../misc/Page/Page';

let name = 'Färger';


var ColorComponent = ({color,name,token}) => {

    var ColorComponentStyles = css`
        flex: 0 1 calc(33% - 20px);
        width: 100%;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        overflow:hidden;

        .color-preview{
            height: 100px;
            background-color: ${color};
            border-bottom: 1px solid ${colors.natural["gray-light"]};
        }
        .color-info{
            margin: 0 0 5px 5px;
            h3{
                margin: 0;
            }
            p{
                margin: 0;
                span{
                    font-weight:700;
                }
            }
        }
    `;

    return <div css={ColorComponentStyles}>
        <div className="color-preview"></div>
        <div className="color-info">
            <h3>{name}</h3>
            <p><span>Token:</span> {token}</p>
            <p><span>Hex:</span> {color}</p>
        </div>
    </div>;
}

var wrapperStyles = css`
    display: flex;
    flex-flow: row wrap;
`;

storiesOf('Digitala Produkter|Komponenter/Konstanter', module)
    .add(name, () =>
        <Page>
            <h1>Färger</h1>
            
            <h2>Primär färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.profile["blue-dark"]} name="Mörkblå" token="blue-dark" type="primär" />
                <ColorComponent color={colors.profile["blue-mid"]} name="Mellanblå" token="blue-mid" type="primär" />
                <ColorComponent color={colors.profile.white} name="Vit" token="white" type="primär" />
            </div>

            <h2>Sekundär färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.secondary.yellow} name="Gul" token="yellow" type="sekundär" />
                <ColorComponent color={colors.secondary.green} name="Mellangrön" token="green" type="sekundär" />
                <ColorComponent color={colors.secondary.maroon} name="Maroon" token="maroon" type="sekundär" />
            </div>

            <h2>Neutrala färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.natural.black} name="Svart" token="black" type="neutrala" />
                <ColorComponent color={colors.natural.gray} name="Grå" token="gray" type="neutrala" />
                <ColorComponent color={colors.natural["gray-light"]} name="Ljusgrå" token="gray-light" type="neutrala" />
                <ColorComponent color={colors.natural.isabelline} name="Isabelline" token="isabelline" type="neutrala" />
                <ColorComponent color={colors.natural["ghost-white"]} name="Ghost white" token="ghost-white" type="neutrala" />
            </div>

            <h2>UI färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.ui.geranium} name="Geranium" token="geranium" type="ui" />
                <ColorComponent color={colors.ui.green} name="Grön" token="green" type="ui" />
                <ColorComponent color={colors.ui.cyan} name="Cyan" token="cyan" type="ui" />
                <ColorComponent color={colors.ui.orange} name="Orange" token="orange" type="ui" />
            </div>

        
        </Page>
    );