import { css } from '@emotion/core'
export const globalStyles = (
  fontSize = "62.5%",
  fontFamily = "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
) => css`
html,
  body,
  button,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  html{
    font-size: ${fontSize};
    font-family: ${fontFamily}; 
    line-height: 16px;
    color: #4D4D4D;
    overflow-x:hidden;
  }
`;


export const viewportSmall = 420;
export const viewportMedium = 768;
export const viewportLarge = 1120;

const mediaQueryMaxWidth = (width) => `@media (max-width: ${width}px)`;
const mediaQueryMinWidth = (width) => `@media (min-width: ${width}px)`;

export const small = mediaQueryMaxWidth(viewportSmall);
export const medium = mediaQueryMinWidth(viewportMedium);
export const large = mediaQueryMinWidth(viewportLarge);