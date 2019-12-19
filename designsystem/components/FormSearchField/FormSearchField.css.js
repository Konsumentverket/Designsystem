import { css } from '@emotion/core'
import { colors } from '../Colors/Colors';
import { medium } from '../GlobalStyles/globalStyles'

export default css`
position:relative;
display:flex;
flex-direction: row;

.textfield {
    border-radius: 8px 0 0 8px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid #D0D0D0;
    border-right: none;
    padding: 11px 8px 11px 15px;
    height:48px;
    font-size: 16px;
    line-height: 24px; 
    outline: none;
    color:#4D4D4D;
    font-style:italic; 
    -webkit-appearance: none;
    top:0;
    margin:0;
    flex-grow: 1;

    ${medium} {
        height: 56px;
    }

}
button {
    top:0;
    bottom:0;
    right:0;
    margin:0;
    padding: 0 16px 0 16px;
    background-color: ${colors.profile["blue-mid"]};
    border:none;
    border-bottom-right-radius:8px;
    border-top-right-radius:8px;
    color: ${colors.profile.white};
    align-content:center;
    display:flex;
    box-sizing:border-box;
    text-align: center;
 

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

    ${medium} {
        padding: 0 24px 0 24px;
    }
}    
.buttontext {
    display:flex;
    flex-direction:row;
    font-size:18px;
    line-height:24px;
    position: relative;
    .buttonicon{
        position: relative;
        padding-right: 8px;
        top: 1px;
        right: 0px;
        width: 21px;
        height: auto;
        fill: #fff;
    }
    ${medium} {
        font-size: 21px;
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