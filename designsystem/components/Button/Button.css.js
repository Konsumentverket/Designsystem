import { css } from '@emotion/core'
import { spacing } from '../Spacing/Spacing';
import { colors } from '../Colors/Colors';

export default css`
    padding: calc(${spacing["spacing-s"]} + 2px) ${spacing["spacing-3xl"]};
    background-color: ${colors.profile["blue-mid"]};
    border: 2px solid ${colors.profile["blue-mid"]};
    border-radius: 3px;
    color: ${colors.profile.white}; 
    line-height: 16px;
    font-size: 16px;
    user-select: none;

    &.medium{
        padding: calc(${spacing["spacing-m/s"]} + 2px) ${spacing["spacing-3xl"]};
        font-size: 19px;
    }

    &.large{
        padding: calc(${spacing["spacing-m"]} + 2px) ${spacing["spacing-3xl"]};
        font-size: 24px;
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


    &.hasicon {

        .buttontext{
            padding-left: 35px;
            position: relative;
            svg{
                position: absolute;
                top:-7px;
                left: 0px;
                width: 30px;
                fill: #fff;
            }
        }

        &.medium{

            .buttontext{
                padding-left: 45px;
            }

            svg{
                width: 35px;
            }
        }
        &.large{

            .buttontext{
                padding-left: 55px;
            }

            svg{
                width: 40px;
            }
        }

    }

    /* .buttonIcon{
        margin-right: ${spacing["spacing-s"]};
        svg{
            fill: ${colors.profile.white};
            width: 22px;
            vertical-align: middle;
            position: relative;
            top: -2px;
        }
    } */



`;