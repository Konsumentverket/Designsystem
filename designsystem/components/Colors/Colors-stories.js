/** @jsx jsx */
import {css,jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import {colors} from './Colors'
import NotesLoader from '../NotesLoader';
import Page from '../../misc/Page/Page';

let name = 'Färgsystem - Hallå konsument';


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

storiesOf('Digitala produkter|Grunder och foundations/Färgsystem', module)
    .add(name, () =>
        <Page>
            <h1>Färger</h1>
            
            <h2>Primär färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.profile["blue-dark"]} name="Mörkblå" token="profile['blue-dark']" />
                <ColorComponent color={colors.profile["blue-mid"]} name="Mellanblå" token="profile['blue-mid']" />
                <ColorComponent color={colors.profile["blue-light"]} name="Ljusblå" token="profile['blue-light']" />
                <ColorComponent color={colors.profile.white} name="Vit" token="profile.white" />
                <ColorComponent color={colors.profile["pink-light"]} name="Ljusrosa" token="profile['pink-light']" />
            </div>

            <h2>Sekundär färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.secondary.yellow} name="Gul" token="secondary.yellow" />
                <ColorComponent color={colors.secondary.green} name="Mellangrön" token="secondary.green" />
                <ColorComponent color={colors.secondary.maroon} name="Maroon" token="secondary.maroon" />
            </div>

            <h2>Neutrala färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.natural.black} name="Svart" token="natural.black" />
                <ColorComponent color={colors.natural.gray} name="Grå" token="natural.gray" />
                <ColorComponent color={colors.natural["gray-light"]} name="Ljusgrå" token="natural['gray-light']" />
                <ColorComponent color={colors.natural.isabelline} name="Isabelline" token="natural.isabelline" />
                <ColorComponent color={colors.natural["ghost-white"]} name="Ghost white" token="natural['ghost-white']" />
            </div>

            <h2>UI färger</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.ui.geranium} name="Geranium" token="ui.geranium" />
                <ColorComponent color={colors.ui.green} name="Grön" token="ui.green" />
                <ColorComponent color={colors.ui.cyan} name="Cyan" token="ui.cyan" />
                <ColorComponent color={colors.ui.orange} name="Orange" token="ui.orange" />
            </div>

        
        </Page>, { notes: NotesLoader(name) }
    );