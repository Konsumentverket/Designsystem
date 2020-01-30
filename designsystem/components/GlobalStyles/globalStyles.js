import { css } from '@emotion/core'
import {spacing} from '../Spacing/Spacing'
import { colors } from '../Colors/Colors';

export const globalStyles = (
  fontSize = "62.5%",
  fontFamily = "'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
) => { 

  setTimeout(function(){ 

    document.addEventListener('keyup', e => {
      if (e.key === "Tab" && !document.body.classList.contains("tabnav")) {
          document.body.className += "tabnav"
      }
  })
  document.addEventListener('click', e => {
      // if detail is 0 it's most likely a keypress and not a mouse click
      if (e.detail !== 0 && document.body.classList.contains("tabnav")) { document.body.classList.remove("tabnav") }
  })

   }, 0);

  

  return css`
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

  body {

    font-size: 1.6rem;
    margin:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    -webkit-text-size-adjust: 100%; 
    -moz-text-size-adjust: 100%;
    margin: 0;
    
    p {
      padding-bottom: ${spacing["spacing-m"]};
      font-size: 1.8rem;
      line-height: 3.2rem;
    }

    ul {
      list-style: bullet inside none;
      padding-left: ${spacing["spacing-xl"]};
      margin-top: ${spacing["spacing-xl"]};
      li {
        margin-bottom: ${spacing["spacing-m"]};
      }
      p {
        display: inline;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 1rem 0 0.5rem 0;
      font-weight: 700;
    }

a{
  &:not(.noState){    
      text-decoration:underline;
      font-weight:700;
      &:visited{
        color:${colors.states['visited']};
      }
      &:hover {
        background-color:${colors.profile['blue-light']};
        text-decoration:none;
        border-radius:.8rem;
      }
      &:active{
        background-color:${colors.profile['blue-light']};
        color:${colors.profile['blue-dark']};
        text-decoration:none;
        border-radius:.8rem;
      }
    }
    &.invertedState:not(.noState){
      &:visited{
        background-color:inherit;
      }
      &:hover {
        background-color:#fff;
      }
      &:active {
        background-color:#fff;
      }
    }
}

    &:not(.tabnav){
      *:focus {
        outline: none;
      }
    }

    &.tabnav {
      *:focus {
        outline: 4px solid ${colors.states.focus};
      }
    }
  }
`;
}

export const viewportSmall = 420;
export const viewportMedium = 768;
export const viewportLarge = 1120;

const mediaQueryMaxWidth = (width) => `@media (max-width: ${width}px)`;
const mediaQueryMinWidth = (width) => `@media (min-width: ${width}px)`;

export const small = mediaQueryMaxWidth(viewportSmall);
export const medium = mediaQueryMinWidth(viewportMedium);
export const large = mediaQueryMinWidth(viewportLarge);