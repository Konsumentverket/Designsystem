/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { storiesOf } from '@storybook/react';
import NotesLoader from '../NotesLoader';
import { text } from '@storybook/addon-knobs';
import { css } from '@emotion/core';
import { WithContentExpander } from './WithContentExpander';
import { SubHeading } from '../SubHeading/SubHeading';
import { grayContentExpanderWrapper, grayFocusedOnExpansionWrapper } from './WithContentExpander.css';
import { Button } from '../Button/Button';



let name = 'Innehållsexpandering';
storiesOf('Digitala Produkter|Komponenter', module)
  .add(name, () => {
    return <>
      <div css={css`max-width: 960px; margin: 2%;`}>
        <SubHeading styleLevel={4}>Standard expanderings element </SubHeading>
        <WithContentExpander
            linkElement={<SubHeading text="Klicka här för att expandera innehållet" />}
            wrappedComponent={<p>Jag är det innehållet som expanderades</p>}
        />

        <br /><br /><br /><br /><br />

        <SubHeading styleLevel={4}>Expanderingselement i grå box med states</SubHeading>
        <div css={grayContentExpanderWrapper}>
            <WithContentExpander
                linkElement={<SubHeading text="Klicka här för att expandera innehållet" />}
                wrappedComponent={<p>Jag är det innehållet som expanderades</p>}
            />
        </div>

        <br /><br /><br /><br /><br />

        <SubHeading styleLevel={4}>Expanderingselement som är mörkare när den är utfälld</SubHeading>
        <div css={grayFocusedOnExpansionWrapper}>
            <WithContentExpander
                linkElement={<SubHeading text="Klicka här för att expandera innehållet" />}
                wrappedComponent={<p>Jag är det innehållet som expanderades</p>}
            />
        </div>

        <br /><br /><br /><br /><br />

        <SubHeading styleLevel={4}>Expanderingselement som inte är fullbredd</SubHeading>
        <WithContentExpander
            isFullWidth={false}
            linkElement={<span>Klicka mig</span>}
            wrappedComponent={<p>Jag är det innehållet som expanderades</p>}
        />

        <br /><br /><br /><br /><br />

        <SubHeading styleLevel={4}>Expanderingselement som inte är fullbredd och innehåller ett stäng element</SubHeading>
        <WithContentExpander
            isFullWidth={false}
            linkElement={<span>Klicka mig</span>}
            wrappedComponent={<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>}
            hasCollapseButton={true}
        />
        <br /><br /><br /><br /><br />
        <SubHeading styleLevel={4}>Expanderingselement innehåller ett stäng element</SubHeading>
        <WithContentExpander
            linkElement={<span>Klicka mig</span>}
            wrappedComponent={<div>
              <br />
              <Button text={"Tryck mig"} />
            </div>}
            hasCollapseButton={true}
        />

        <br /><br /><br /><br /><br />
        <SubHeading styleLevel={4}>Expanderingselement som är inaktiverat</SubHeading>
        <WithContentExpander
            linkElement={<span>Klicka mig</span>}
            disabled={true}
            wrappedComponent={
              <div>
                <br />
                <Button text={"Tryck mig"} />
              </div>
            }
            hasCollapseButton={false}
        />

      </div>
    </>
  }
    , { notes: NotesLoader(name) }
  );