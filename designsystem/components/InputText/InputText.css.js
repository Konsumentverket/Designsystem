import css from "@emotion/css";
import { colors } from '../Colors/Colors';

export const InputStyle = css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    box-sizing:border-box;
    border: 2px solid #979797;
    border-radius: 0.8rem;
    -khtml-border-radius: 0.8rem; /* this is for the fruit phones */
    font-size: 1.8rem;
    line-height: 3rem;
    -webkit-appearance: textfield; /* safari fix */

    &:focus{
        outline: none;
        border-color: ${colors.theme1.mid}
    }

    &::-webkit-search-cancel-button{
        appearance: none;
    }
}

`

export const InputWrapperStyle = css`
    position: relative;

`

export const ClearInput = css` 
    appearance: none;
    position: absolute;
    right: 1.6rem;
    border: 0px;
    background-color: transparent;
    top: 1.3rem;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0;
    svg{
        fill: ${colors.theme1.mid};
        width: 3.2rem;
        height: 3.2rem;
    }
    &:focus{
        outline: none;
    }
    
`