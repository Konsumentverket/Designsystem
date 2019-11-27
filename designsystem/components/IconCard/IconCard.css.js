import { css } from '@emotion/core'
import { colors } from '../Colors/Colors.js'

export const arrowStyle = css`
    position: absolute;
    top: 20px;
    right: 5px;
    vertical-align: middle;
    transform: rotate(270deg);
    height: auto;
    width: 32px;
    fill: ${colors.profile['blue-mid']};

`

export const iconStyle = css`
    position:absolute;
    top: 20px;
    left: 12px;
    height: 32px;
    width: 32px;
    fill: ${colors.profile['blue-mid']};
`;

export const iconCardStyle = css`
    background-color: ${colors.profile['white']};
    padding-left: 12px;
    padding-right: 40px;
    min-height: 72px;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    border-radius: 8px;
    border: 1px solid ${colors.profile['blue-mid']};
    h2, h3 {
        padding-left: 44px;
        display: flex;
        align-items:center;
        margin:0;
        color: ${colors.profile['blue-mid']};
        line-height: 24px;
        font-size: 21px;
        font-weight: 500;
    }
    h2:first-child, h3:first-child {
        padding-left: 0;
    }
`;

export const topAreaIcon = css`
    padding-left: 56px;
`;