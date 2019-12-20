import css from "@emotion/css";
import { colors } from '../Colors/Colors';

export const InputStyle = css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    box-sizing:border-box;
    border: 2px solid #979797;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    line-height: 3rem;

    &:focus{
        outline: none;
        border-color: ${colors.profile["blue-mid"]}
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
    right: 3.2rem;
    border: 0px;
    background-color: transparent;
    top: 1.3rem;
    width: 1.6rem;
    height: 1.6rem;
    padding: 0;
    svg{
        fill: ${colors.profile["blue-mid"]};
        width: 3.2rem;
        height: 3.2rem;
    }
    &:focus{
        outline: none;
    }
    
`