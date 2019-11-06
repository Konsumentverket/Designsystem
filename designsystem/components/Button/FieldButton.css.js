import { css } from '@emotion/core'
import { spacing } from '../Spacing/Spacing';
import { colors } from '../Colors/Colors';

export default css`
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    background-color: ${colors.profile["blue-mid"]};
    border-radius: 50%;
    color: ${colors.profile.white}; 
    padding:12px 16px;
    .buttontext {
        font-size:18px;
        line-height:24px;
    }
  
    &:hover{
        /*border-color: ${colors.natural.black};
        background-color: ${colors.profile["blue-mid"]};
        color: ${colors.profile.white};*/
    }
    &:active{
        /*text-decoration: underline;
        background-color: ${colors.profile["blue-dark"]};*/
    }
    &:focus{
        /*border-color: ${colors.natural.black};
        text-decoration: underline;*/
    }

    &.hasicon {
        .buttontext{
            padding-left: 48px;
            position: relative;
            .buttonicon{
                position: absolute;
                top:0;
                left: 0px;
                width: 20px;
                fill: #fff;
            }
        }

    }

&.fieldbutton {
    border:0;
    .buttontext {
        padding-right:35px;
        padding-left:0;

        .buttonicon {
        left:auto;
        right:0;
    }
    }
   
}

`;