import { css } from '@emotion/core'
import { colors, newColors, typography } from '@konsumentverket-sverige/designsystem.utils';

export const fieldWrapper = css`
    width: 100%;
    position: relative;
    border-radius: 16px;
    border: 1px solid transparent;
    display:flex;
    align-items: center;
    overflow: hidden;

    &.inputHasValue{
        text-decoration: underline;
        font-weight: bold;
    }

    &:hover{
        border: 1px solid ${newColors.shades.mediumGrey50};
        .radiolabel {
            text-decoration: underline;
        }
    }

    &:focus-within{
        .tabnav &{
            outline-offset: 2px;
            outline: 3px solid ${colors.states.focus};
        }
    }
`

export const colorThemeWhite = css`
  background: ${newColors.primaries.kovWhite};
`;

export const colorThemeGrey = css`
  background: ${newColors.shades.lightGrey25};
`;

export const fieldInput = css`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid ${newColors.primaries.fullBlue};
    background: #fff;
    margin: 0;
    margin-left: 2.4rem;
    margin-right: 1.6rem;
    flex-shrink: 0;

    &:focus{
        outline:none!important;
    }

    &:checked{
        outline: none;
        border: 8px solid ${newColors.primaries.fullBlue};
        background-color: ${newColors.primaries.kovWhite};
        position: relative;

        &+label{
            text-decoration: underline;
            font-weight: 500;
        }

        &:before{
            content: "";
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            display:block;
            background: transparent;
            position: absolute;
            top:-2px;
            left:-2px;
        }

        &:disabled {
            opacity: 1;
        }

    }
    &:disabled {
        opacity: 1;
    }

`

export const fieldLabel = css`
    ${typography.textSmall};
    color: ${newColors.primaries.fullBlue};

    width: 100%;

    padding: 16px 24px 16px 0;
    display: flex;
    user-select: none;
`

export const disabledStyle = css`
    background-color: ${newColors.shades.lightGrey50};
    cursor: inherit;
    box-shadow: none;

    input {
      border: 1px solid ${newColors.shades.mediumGrey};
      background: ${newColors.shades.lightGrey25};
    }

    label {
      color: ${newColors.shades.kovBlack50};
    }

    &:hover {
        border: 1px solid transparent;
        text-decoration: none;
    }

    &:hover {
        .radiolabel {
            text-decoration: none;
        }
    }
`
