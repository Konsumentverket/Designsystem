import { css } from "@emotion/core";
import { medium } from '../GlobalStyles/globalStyles';
import { colors } from '../Colors/Colors';

export const wrapper = css`
    background-color: ${colors.theme3.xLight};
    border-radius: 0.7rem;
    padding-left: 1rem;
    padding-right: 3rem;
    padding-bottom: 0.2rem;
    padding-top: 2.4rem;
    ${medium} {
        padding-left: 4rem;
        padding-right: 4rem;
    }
    ul {
        padding-left: 0;
    }
`

export const secondaryColorStyle = css`
    background-color: ${colors.theme2.light};
`;
