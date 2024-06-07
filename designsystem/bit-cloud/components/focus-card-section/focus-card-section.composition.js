import { css } from '@emotion/core';
import 'date-fns';
import {
  globalStyles as GlobalStyles,
  CompositionFonts
} from '@konsumentverket-sverige/designsystem.utils';

import React from 'react';
import { FocusCardSection } from './focus-card-section';

// Basic Example
export const FocusCardSectionExample = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FocusCardSection
        title={"Lorem ipsum dolor sit amet"}
        text={"Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel"}
        icon={"MegamenuCompany"}
        items={[
          {
            title: "Lorem ipsum dolor sit amet",
            text: "Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi",
            url: "/#1",
          },
          {
            title: "Maecenas est quam aliquam vel tincidunt vel iaculis a metus",
            text: "Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel",
            url: "/2",
          }
        ]}
      />
    </CompositionFonts>
  );
}

export const FocusCardSectionGreyExample = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FocusCardSection
        title={"Lorem ipsum dolor sit amet"}
        text={"Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel"}
        icon={"MegamenuCompany"}
        backgroundColor={"grey"}
        items={[
          {
            title: "Lorem ipsum dolor sit amet",
            text: "Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi",
            url: "/#1",
          },
          {
            title: "Maecenas est quam aliquam vel tincidunt vel iaculis a metus",
            text: "Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel",
            url: "/2",
          }
        ]}
      />
    </CompositionFonts>
  );
}

export const FocusCardSectionBlueExample = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <FocusCardSection
        title={"Lorem ipsum dolor sit amet"}
        text={"Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel"}
        icon={"MegamenuCompany"}
        backgroundColor={"blue"}
        items={[
          {
            title: "Lorem ipsum dolor sit amet",
            text: "Pellentesque elit enim, congue eget tellus non. Sollicitudin tristique urna aliquam bibendum dapibus mi",
            url: "/#1",
          },
          {
            title: "Maecenas est quam aliquam vel tincidunt vel iaculis a metus",
            text: "Praesent elementum a massa ac elementum. Donec ipsum orci a porta odio tempor vel",
            url: "/2",
          }
        ]}
      />
    </CompositionFonts>
  );
}