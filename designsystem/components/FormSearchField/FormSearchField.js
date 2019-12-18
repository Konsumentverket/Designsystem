/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import style from './FormSearchField.css';
import { Icon } from '../Icon/Icon';



export const FormSearchField = ({className, icon, reference, fieldtext, onClick, buttontext, type, ...other}) => {

    let classes = ["search-form-field"];
    if (className) {
        classes.push(className);
    }
    if (icon) {
        classes.push("hasicon")
    }

    return <div css={[style]} className={classes.join(" ")} >
        <input {...other} ref={reference} className="textfield" type="search"  placeholder={fieldtext ?  fieldtext : "Vad letar du efter?"}></input>
        <button
            type={type ? type : "submit"}
            onClick={onClick} >
            <span className="buttontext">
                {buttontext ? buttontext : "Sök"}
                <Icon icon={icon ? icon: "Search"} className="buttonicon" />                
            </span>
        </button>
    </div> 

}

