import css from "@emotion/css";
import { colors } from '../Colors/Colors';

export const TextAreaStyle = css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    box-sizing: border-box;
    border: 2px solid #979797;
    font-family: Arial;
    border-radius: 0.8rem;
    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */
    font-size: 1.8rem;
    line-height: 3rem;
    -webkit-appearance: textfield; /* safari fix */
    margin-bottom: 2.4rem;

    &:focus{
        outline: none;
        border-color: ${colors.theme1.mid}
    }

    &::-webkit-search-cancel-button{
        appearance: none;
    }
`

export const TextAreaWrapperStyle = css`
    position: relative;

`

export const Label = css`
  color: #4D4D4D;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-bottom: .8rem;
  display: block;
`
export const invalidStyle = css`
    textarea {
        border-color: #F00;
    }
`