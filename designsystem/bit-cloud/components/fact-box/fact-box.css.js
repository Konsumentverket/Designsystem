import { css } from "@emotion/core";
import { colors } from '../utils/colors';
import { medium } from '../utils/globalstyles';
import { spacing } from '../utils/spacing';

export const wrapper = css`
    background-color: ${colors.theme3.xLight};
    border-radius: 0.7rem;
    padding: ${spacing.m} ${spacing.s} ${spacing.m} ${spacing.s};
    ${medium} {
        padding: ${spacing.m} ${spacing.l} ${spacing.m} ${spacing.l};
    }
    ul {
        padding-left: 0;
        li {
            margin-bottom: 1rem;
        }
    }
`

export const secondaryColorStyle = css`
    background-color: ${colors.theme2.light};
`;
