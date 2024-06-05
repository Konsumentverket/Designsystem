import React from 'react';
import 'date-fns';
import { CtaBlock } from './cta-block';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

export const CTAWithButton = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <CtaBlock
        headline="Rapportera när produkter eller företag bryter mot lagen"
        text="Konsumentverket granskar varor, tjänster och företag. Om du som konsument upptäcker att ett företag har gjort fel eller ser en risk med en vara eller tjänst kan du anmäla det till oss."
        image="https://picsum.photos/600/400"
        btn={
          <Button
            href={"#"}
            iconLeft={
              <Icon icon="LinkArrow"/>
            }
            text="Skicka in anmälan"
          />
        }
      />
    </CompositionFonts>
  );
}

export const CTAWithLink = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <CtaBlock
        headline="Lorem ipsum"
        text="Lorem ipsum dolor sit amet"
        image="https://picsum.photos/600/400"
        btn={
          <Button
            href="https://www.konsumentverket.se"
            iconRight={
              <Icon icon="LinkArrow"/>
            }
            text="Länktext"
            linkStyle={true}
          />
        }
      />
    </CompositionFonts>
  );
}

export const CTABasic = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <CtaBlock
        headline="Lorem ipsum"
        text="Lorem ipsum dolor sit amet"
        image="https://picsum.photos/600/400"
      />
    </CompositionFonts>
  );
}


export const CTAWithButtonNoImage = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <CtaBlock
        headline="Rapportera när produkter eller företag bryter mot lagen"
        text="Konsumentverket granskar varor, tjänster och företag. Om du som konsument upptäcker att ett företag har gjort fel eller ser en risk med en vara eller tjänst kan du anmäla det till oss."
        btn={
          <Button
            onClick={() => {
              alert("You clicked the button!")
            }}
            iconLeft={
              <Icon icon="LinkArrow"/>
            }
            text="Skicka in anmälan"
          />
        }
      />
    </CompositionFonts>
  );
}


export const CTAWithIcon = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <CtaBlock
        headline="Rapportera när produkter eller företag bryter mot lagen"
        text="Konsumentverket granskar varor, tjänster och företag. Om du som konsument upptäcker att ett företag har gjort fel eller ser en risk med en vara eller tjänst kan du anmäla det till oss."
        icon={<Icon icon="LinkArrow"/>}
        btn={
          <Button
            onClick={() => {
              alert("You clicked the button!")
            }}
            iconLeft={
              <Icon icon="LinkArrow"/>
            }
            text="Skicka in anmälan"
          />
        }
      />
    </CompositionFonts>
  );
}
