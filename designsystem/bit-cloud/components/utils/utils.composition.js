/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core'
import {newColors} from './colors.js';
import {GlobalStyles, CompositionFonts} from "./globalstyles";
import {gridStyles, containerStyles} from "./grid";
import {breakpoints} from "./breakpoints";

import {
  h1,
  h2,
  h3,
  subHeading,
  h1Alt2,
  h1Alt3,
  h2Alt2,
  h2Alt3,
  subHeadingAltBig,
  subHeadingAltMedium,
  subHeadingAltSmall,
  subHeadingAltMini,
  paragraph,
  paragraphStrong,
  textSmall,
  textSmallAlt,
  textMini,
  textMiniAlt,
  link,
  linkHover,
  linkFocus,
  clickHover,
  clickFocus,
  clickMini,
  clickSmall,
  clickMedium,
  clickMediumAlt,
  clickLarge
} from "./typography"

const sectionTitle = {
  background: newColors.kovBlue,
  color: newColors.kovWhite,
  fontSize: '36px',
  padding: '20px',
  margin: '26px 0'
}

export const typography = () => {
  const spacing = {marginBottom: '20px'};

  const text = 'Varje år får vi in tusentals anmälningar från konsumenter som tycker att företag har fel i sin marknadsföring eller i sina avtalsvillkor.';

  return (
    <div style={{width: '500px', padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <div style={sectionTitle}>Headings</div>
        <h1 css={h1} style={spacing}>H1 style</h1>
        <h2 css={h2} style={spacing}>H2 style</h2>
        <h3 css={h3} style={spacing}>H3 style</h3>
        <h4 css={subHeading} style={spacing}>SubHeading style (H4, H5, H6)</h4>
        <h1 css={h1Alt2} style={spacing}>H1 - Alt 2</h1>
        <h1 css={h1Alt3} style={spacing}>H1 - Alt 3</h1>
        <h2 css={h2Alt2} style={spacing}>H2 - Alt 2</h2>
        <h2 css={h2Alt3} style={spacing}>H2 - Alt 3</h2>
        <h4 css={subHeadingAltBig} style={spacing}>Subheading Alt Big</h4>
        <h4 css={subHeadingAltMedium} style={spacing}>Subheading Alt Medium</h4>
        <h4 css={subHeadingAltSmall} style={spacing}>Subheading Alt Small</h4>
        <h4 css={subHeadingAltMini} style={spacing}>Subheading Alt Mini</h4>
        <div style={sectionTitle}>Text</div>
        <p css={paragraph} className={'noStyle'}>Paragraph<br/>{text}</p>
        <p css={paragraphStrong}>ParagraphStrong<br/>Varje år får vi in tusentals anmälningar från konsumenter som
          tycker att företag har fel i sin marknadsföring eller i sina avtalsvillkor.</p>
        <p css={textSmall}>TextSmall<br/>{text}</p>
        <p css={textSmallAlt}>TextSmallAlt<br/>Varje år får vi in tusentals anmälningar från konsumenter som tycker
          att företag har fel i sin marknadsföring eller i sina avtalsvillkor.</p>
        <p css={textMini}>TextMini<br/>{text}</p>
        <p css={textMiniAlt}>TextMiniAlt<br/>{text}</p>
        <div style={sectionTitle}>Anchor links</div>
        <div style={{display: 'grid', gap: '20px', marginBottom: '36px', gridTemplateColumns: '1fr 1fr 1fr'}}>
          <div>
            <p>Default</p>
            <a css={link} className={'noStyle'} href="#">Link</a>
          </div>
          <div>
            <p>Hover/Active</p>
            <a css={[link, linkHover]} className={'noStyle'} href="#">Link</a>
          </div>
          <div>
            <p>Focus</p>
            <a css={[link, linkFocus]} className={'noStyle'} href="#">Link</a>
          </div>
        </div>
        <div style={sectionTitle}>Simple buttons</div>
        <div style={{display: 'grid', gap: '20px', marginBottom: '24px', gridTemplateColumns: '1fr 1fr 1fr'}}>
          <div>
            <p>Default</p>
            <button style={{marginBottom: '12px'}} css={clickMini} className={'noStyle'}>Click Mini</button>
            <button style={{marginBottom: '12px'}} css={clickSmall} className={'noStyle'}>Click Small</button>
            <button style={{marginBottom: '12px'}} css={clickMedium} className={'noStyle'}>Click Medium</button>
            <button style={{marginBottom: '12px'}} css={clickMediumAlt} className={'noStyle'}>Click Medium Alt</button>
            <button style={{marginBottom: '12px'}} css={clickLarge} className={'noStyle'}>Click Large</button>
          </div>
          <div>
            <p>Hover/Active</p>
            <button style={{marginBottom: '12px'}} css={[clickMini, clickHover]} className={'noStyle'}>Click Mini
            </button>
            <button style={{marginBottom: '12px'}} css={[clickSmall, clickHover]} className={'noStyle'}>Click Small
            </button>
            <button style={{marginBottom: '12px'}} css={[clickMedium, clickHover]} className={'noStyle'}>Click Medium
            </button>
            <button style={{marginBottom: '12px'}} css={[clickMediumAlt, clickHover]} className={'noStyle'}>Click Medium
              Alt
            </button>
            <button style={{marginBottom: '12px'}} css={[clickLarge, clickHover]} className={'noStyle'}>Click Large
            </button>
          </div>
          <div>
            <p>Focus</p>
            <button style={{marginBottom: '12px'}} css={[clickMini, clickFocus]} className={'noStyle'}>Click Mini
            </button>
            <button style={{marginBottom: '12px'}} css={[clickSmall, clickFocus]} className={'noStyle'}>Click Small
            </button>
            <button style={{marginBottom: '12px'}} css={[clickMedium, clickFocus]} className={'noStyle'}>Click Medium
            </button>
            <button style={{marginBottom: '12px'}} css={[clickMediumAlt, clickFocus]} className={'noStyle'}>Click Medium
              Alt
            </button>
            <button style={{marginBottom: '12px'}} css={[clickLarge, clickFocus]} className={'noStyle'}>Click Large
            </button>
          </div>
        </div>
      </CompositionFonts>
    </div>
  )
}

export const colors = () => {
  return (
    <div style={{padding: '0 24px'}}>
      <CompositionFonts>
        <div style={sectionTitle}>Primaries</div>
        {
          Object.entries(newColors.primaries).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
        <div style={sectionTitle}>Secondaries</div>
        {
          Object.entries(newColors.secondaries).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
        <div style={sectionTitle}>Shades</div>
        {
          Object.entries(newColors.shades).map(
            ([name, hexColor]) => colorItem(name, hexColor)
          )
        }
      </CompositionFonts>
    </div>
  )
}

const colorItem = (name, hexColor) => (
  <div key={name}
       style={{
         display: 'flex',
         gap: '12px',
         marginBottom: '8px'
       }}
  >
    <div
      style={{
        background: `${hexColor}`,
        width: '50px',
        height: '50px'
      }}>
    </div>
    <p><strong>{name}</strong> - {hexColor}</p>
  </div>
)

const redBorderStyle = css`
  border: 1px solid red;
`;

const halfContainerStyle = css`
  height: 20rem;
  border: 1px solid black;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const halfGridStyle = css`
  grid-column: span 2;
  height: 20rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.m}) {
    grid-column: span 4;
  }

  @media (min-width: ${breakpoints.l}) {
    grid-column: span 6;
  }
`;

export const gridAndContainer = () => {
  return (
    <div style={{padding: '0 24px'}}>
      <CompositionFonts>
        <GlobalStyles/>
        <div style={sectionTitle}>Grid</div>
        <div style={{width: '768px'}}>
          <div css={[gridStyles, redBorderStyle]}>
            <div css={[halfGridStyle]}>
              Half of columns
            </div>
          </div>
        </div>
        <div style={sectionTitle}>Container</div>
        <div style={{width: '768px'}}>
          <div css={[containerStyles, redBorderStyle]}>
            <div css={[halfContainerStyle]}>
              50%
            </div>
          </div>
        </div>
      </CompositionFonts>
    </div>
  )
}
