import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';

export default css`
position:relative;

.textfield {
    border-radius: 8px;
    border: none;
    width: 100%;
    padding: 12px 92px 12px 16px;
    font-size: 16px;
    line-height: 24px; 
    outline: none;
    color:#4D4D4D;
    font-style:italic; 
    -webkit-appearance: none;
    top:0;
    margin:0;

}
button {
    position: absolute;
    height:100%;
    top:0;
    bottom:0;
    right:0;
    margin:0;
    background-color: ${colors.profile["blue-mid"]};
    border:none;
    border-bottom-right-radius:8px;
    border-top-right-radius:8px;
    color: ${colors.profile.white}; 
    padding:12px 16px;
    display:flex;
    box-sizing:border-box;
 

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
}    
.buttontext {
    font-size:18px;
    line-height:24px;
    padding-right: 28px;
    position: relative;
    .buttonicon{
                position: absolute;
                top:2px;
                right: 0px;
                width: 20px;
                height:auto;
                fill: #fff;
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