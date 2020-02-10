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
            border-bottom: 1px solid ${colors.common.grayLight};
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
            
            <h2>Temafärg 1</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.theme1.xDark} name="Extra mörkblå" token="theme1.xDark" />
                <ColorComponent color={colors.theme1.dark} name="Mörkblå" token="theme1.dark" />
                <ColorComponent color={colors.theme1.midDark} name="Mellan mörkblå" token="theme1.midDark" />
                <ColorComponent color={colors.theme1.mid} name="Mellanblå" token="theme1.mid" />
                <ColorComponent color={colors.theme1.midLight} name="Mellan ljusblå" token="theme1.midLight" />
                <ColorComponent color={colors.theme1.light} name="Ljusblå" token="theme1.light" />
            </div>

            <h2>Temafärg 2</h2>
            <div css={wrapperStyles}>
                <ColorComponent color={colors.theme2.dark} name="MörkRosa" token="theme2.dark" />
                <ColorComponent color={colors.theme2.midDark} name="Mellan mörkrosa" token="theme2.midDark" />
                <ColorComponent color={colors.theme2.mid} name="Mellanrosa" token="theme2.mid" />
                <ColorComponent color={colors.theme2.light} name="Ljusrosa" token="theme2.light" />
            </div>
        
        </Page>, { notes: NotesLoader(name) }
    );