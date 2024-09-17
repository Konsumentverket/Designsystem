import React from 'react';
import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';
import 'date-fns';
import { WithContentExpander } from './with-content-expander.js';

export const BasicWithIconAndPreambleAndSubComponentWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <div>
                  <h2>This h2 should be styled</h2>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem
                    volutpat
                  </p>
                  <div>
                    <h2>This h2 should not be styled since it's not a direct child in the first div in the Typography component</h2>
                    <p>Neither this paragraph</p>
                  </div>
                </div>
              }
            />
          </div>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithSubComponentLightBlueWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        useLightBlueAlternativeStyling={true}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat</p>
                </>
              }
            />
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithIconAndPreambleWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithIconWithContentExpander = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
          </>
        }
      />
    </CompositionFonts>
  );
}

export const BasicWithProcessStepStyling = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <WithContentExpander
        icon={"FurnituresAndDecoration"}
        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit"}
        preamble={"Pellentesque vulputate risus sit amet lorem volutpat eu aliquam odio varius?"}
        wrappedComponent={
          <>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>
            <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat, eu aliquam odio varius. Morbi arcu magna, suscipit finibus tortor ac, vehicula malesuada urna. Quisque non aliquam enim. In dictum, sapien vel rhoncus elementum.</p>
            <p>Aliquam sit amet sapien eget velit tempus posuere. Vivamus facilisis nulla rhoncus orci dictum, eu molestie ipsum varius. Duis egestas turpis sed turpis aliquet, at consequat sem mollis. Nunc mollis, tellus in sodales dictum, erat diam volutpat lacus, sed mattis est libero eget ex.</p>
            <WithContentExpander
              text={"Lorem the ipsum"}
              useAlternativeStyling={true}
              wrappedComponent={
                <>
                  <p>Suspendisse rhoncus sem quis feugiat facilisis. Pellentesque vulputate risus sit amet lorem volutpat</p>
                </>
              }
            />
          </>
        }
        useProcessStepStyling={true}
      />
    </CompositionFonts>
  );
}
