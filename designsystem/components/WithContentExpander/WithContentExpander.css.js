import { css } from "@emotion/core";
import { small,medium } from "../GlobalStyles/globalStyles";
import { colors } from "../Colors/Colors";


export const grayContentExpanderWrapper = css`
    background-color: ${colors.theme3.xLight};
    border-radius: 0.5rem;

    .full-width {
        border: 2px solid transparent;
        &.expanded,:hover{
            border: .2rem solid ${colors.theme1.mid};
        }
    }

    :focus-within {
        .tabnav &{
            outline: .2rem solid ${colors.states.focus};
            outline-offset: .2rem;
        }
    }
    .link-element{ 
        margin-bottom: 0rem!important;
        a{
            padding: 2.4rem;
            &:hover {
                text-decoration: underline;
                background-color: inherit;
                cursor: pointer;
            }
            &[aria-expanded="true"] {
                h2,h3,h4{
                    text-decoration: underline!important;
                }
            }
        }
    }
    .expand-section{
        padding: 0 2.4rem;
    }


`

export const ComponentWrapperStyle = css`

  .link-element a {

    .link-element-container {

        h1, h2, h3, h4 {
            width: 85%;
            white-space: pre-line;
            margin-bottom: 0;
        }

        display: flex;
        flex-wrap: wrap;
        align-items: center;

    }

    font-weight: 600;
    display: inline-block;
    position: relative;
    text-decoration: none;
    position: relative;
    ${small} {
      width: 100%;
    }

    .full-width& {
      display: block;
    }

    svg {
      font-size: inherit;
      vertical-align: middle;
      fill: ${colors.theme1.mid};
    }
  }

  .expand-section {
    max-height: 0;
    overflow: hidden;
    height: auto;
    transition: all 0.3s ease-in-out;

    &.expanded {
      max-height: 400rem;
    }
    &:not(.expanded) {
      visibility: hidden;
    }
  }
`;

export const IconStyle = fontSize => css`
    transition: transform .2s ease-out;
    width: ${fontSize};
    height: ${fontSize};
    margin-left: .5rem;
    display:flex;
    ${medium} {
        margin-left: 1rem;
    }
`

export const IconExpandedStyle = css`
  transform: rotate(180deg);
`;
export const IconFullWidth = css`
    margin-left:auto!important;
`

export const collapseButtonStyle = css`
  position: relative;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0.8rem 4rem 0.8rem 1.6rem;
  border: solid 1px ${colors.theme1.mid};
  color: ${colors.theme1.mid};
  border-radius: 3.2rem;
  transition: visibility 0.1s, opacity 0.1s ease-in-out;
  font-weight: 700;
  float: right;
  margin-bottom: 1.6rem;

  cursor: pointer;

  .expanded > & {
    visibility: visible;
    opacity: 1;
  }

  &:hover {
    text-decoration: underline;
    background-color: ${colors.theme1.midLight};
    border-color: ${colors.theme1.xDark};
  }

  &:active {
    text-decoration: underline;
    color: #fff;
    background-color: ${colors.theme1.xDark};
    border-color: ${colors.theme1.xDark};
    svg {
      fill: #fff;
    }
  }

  > svg {
    transform: rotate(180deg);
    height: 1.6rem;
    fill: ${colors.theme1.mid};
    height: 1.6rem;
    position: absolute;
    width: 1.6rem;
    top: 1.2rem;
    right: 1.6rem;
  }
`;

export const baseLinkStyle = css`
  color: ${colors.theme1.mid};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.theme1.mid};
  }
  &:hover {
    text-decoration: underline !important;
  }
`;
