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

`