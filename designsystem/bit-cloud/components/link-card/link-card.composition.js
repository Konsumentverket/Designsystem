import React from 'react';
import 'date-fns';
import { LinkCard } from './link-card.js';
import { CompositionFonts, globalStyles as GlobalStyles } from '@konsumentverket-sverige/designsystem.utils';
import { Icon } from '@konsumentverket-sverige/designsystem.icon'
import { Button } from '@konsumentverket-sverige/designsystem.button'



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
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Hoppborgar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Trampolinparker"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
      </LinkCard>
    </CompositionFonts>
  );
}





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



export const BasicOnlyTitleLinkCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />

      <LinkCard
        id="one"
        href="#"
        text="Sport och fritid"
        icon={<Icon icon="BeautyEngagement" />}
      >
      </LinkCard>
    </CompositionFonts>
  );
}



export const BasicManyLinksListCard = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />

      <LinkCard
        id="one"
        href="#"
        text="Sport och fritid"
        beforeToggleCount="9"
        icon={<Icon icon="BeautyEngagement" />}
      >

        <Button
          href="#"
          text="Studmattor"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Hoppborgar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Trampolinparker"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />

        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />

        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />

        <Button
          href="#"
          text="Höga barnstolar"
          iconLeft={
            <Icon icon="MonoArrowRight" />
          }
          linkStyle={true}
        />
      </LinkCard>
    </CompositionFonts>
  );
}
