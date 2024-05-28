import React from 'react';
import { LinkCard } from './link-card.js';
import { CompositionFonts, globalStyles as GlobalStyles } from '@konsumentverket-sverige/designsystem.utils';
import { Icon } from '@konsumentverket-sverige/designsystem.icon'
import { Button } from '@konsumentverket-sverige/designsystem.button'

export const BasicTextLinkCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />

      <LinkCard
        id="one"
        href="#"
        text="Sport och fritid"
        icon={<Icon icon="BeautyEngagement" />}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>

      </LinkCard>
    </CompositionFonts>
  );
}


export const BasicLinkListCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />

      <LinkCard
        id="one"
        href="#"
        text="Sport och fritid"
        icon={<Icon icon="BeautyEngagement" />}
      >

        <Button
          href="#"
          text="Studmattor"
          iconLeft={
            <Icon icon="ChevronLeft" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Hoppborgar"
          iconLeft={
            <Icon icon="ChevronLeft" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Trampolinparker"
          iconLeft={
            <Icon icon="ChevronLeft" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="ChevronLeft" />
          }
          linkStyle={true}
        />
      </LinkCard>
    </CompositionFonts>
  );
}
