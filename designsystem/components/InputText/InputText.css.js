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
    right: 2.4rem;
    border: 0px;
    background-color: ${colors.profile["blue-mid"]};
    border-radius: 50%;
    top: 2rem;
    width: 1.6rem;
    height: 1.6rem;
    padding: 0;
    svg{
        fill: #fff;
        width: 1rem;
        height: 1rem;
        padding: 0.3rem;
    }
    &:focus{
        outline: none;
    }
    
`