/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';
import NotesLoader from '../NotesLoader';
import { LinkCard } from './LinkCard';
import { colors } from '../Colors/Colors';
import { css } from '@emotion/core';

let name = 'Länkkort';


storiesOf('Digitala Produkter|React komponenter/Kort', module)
    .add(name, () =>  {
         
        var linkCardStyle = css`
            width 32%;
            flex-grow: 0;
        `
        var linkContentStyle = css`
            font-size: 16px;
            font-weight: bold;
            margin-bottom: .8rem;
            line-height: 2.4rem;
        `
    
        return <div style={{backgroundColor: colors.theme3.xLight,height: "100vh",padding:"50px", }}>
            <div style={{maxWidth:"1200px", display:"flex", justifyContent:"space-between"}}>
                <div css={linkCardStyle}>
                    <LinkCard id="one" href="http://www.google.se" text="Inför att köpa eller leasa en bil">
                        <p css={css`font-size: 16px; line-height: 2.4rem;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </LinkCard>
                </div>
                <div css={linkCardStyle}>
                    <LinkCard id="two" href="http://www.google.com" text="Problem och vanliga frågor om bil" >
                        {[1,2,3,4,5].map(n => <a key={n} css={linkContentStyle} href={`/${n}`}>Föremål i listan: {n}</a>)}
                    </LinkCard>
                </div>
                <div css={linkCardStyle}>
                    <LinkCard id="three" href="http://www.google.com" text="Problem och vanliga frågor om bil" >
                        {[1,2,3].map(n => <a key={n} css={linkContentStyle} href={`/${n}`}>Föremål i listan: {n}</a>)}
                    </LinkCard>
                </div>
            </div>
            <div style={{maxWidth:"1200px", marginTop: "20px"}}>
                <LinkCard text="Full width card" href="#" />
                <br />
                <LinkCard text="Full width card with text" href="#">
                    <p css={css`font-size: 16px; line-height: 2.4rem; max-width: 80%;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </LinkCard>
                <br />
                <LinkCard text="Full width card with text and border" href="#" style={css`border: 1px solid ${colors.theme1.mid};`}>
                    <p css={css`font-size: 16px; line-height: 2.4rem; max-width: 80%;`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </LinkCard>
            </div>
        </div>
    }
        
    , { notes: NotesLoader(name) }
    );