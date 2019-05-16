import { css } from '@emotion/core'
import spacing from '../Spacing/Spacing';
import colors from '../Colors/Colors';

export default css`
    padding: ${spacing["spacing-s"]} ${spacing["spacing-3xl"]};
    background-color: ${colors.profile["blue-mid"]};
    border: 2px solid ${colors.profile["blue-mid"]};
    border-radius: 3px;
    color: ${colors.profile.white};

    &.medium{
        padding: ${spacing["spacing-m"]} ${spacing["spacing-3xl"]};
    }

    &.large{
        padding: ${spacing["spacing-l"]} ${spacing["spacing-3xl"]};
    }

    &.secondary{
        background-color: ${colors.profile.white};
        color: ${colors.profile["blue-mid"]};

        &.darkmode{
            border-color: ${colors.profile.white};
        }
    }
    &.darkmode {
        box-shadow: 0px 0px 1px 1px rgba(255,255,255,.7);
        &:hover,&:active,&:focus{
            border-color: ${colors.profile.white};
            box-shadow:none;
        }
    }
    &:hover{
        border-color: ${colors.natural.black};
        background-color: ${colors.profile["blue-mid"]};
        color: ${colors.profile.white};
    }
    &:active{
        text-decoration: underline;
        background-color: ${colors.profile["blue-dark"]};
    }
    &:focus{
        border-color: ${colors.natural.black};
        text-decoration: underline;
    }
    &[disabled]{
        background-color:  ${colors.natural["gray-light"]};
        border-color: ${colors.natural["gray-light"]};
        color: ${colors.natural.black}
    }
    &.cta{
        background-color: ${colors.ui.green};
        outline: none;
        border-color: ${colors.ui.green};
        &:hover,&:focus{
            border-color: ${colors.natural.black};
        }
        &:active{
            background-color: #004724;
        }
    }
`;