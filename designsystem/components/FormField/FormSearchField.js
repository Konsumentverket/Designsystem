/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import style from './FormSearchField.css';
import { Icon } from '../Icon/Icon';

class FormSearchField extends React.Component {

    render() {

        let classes = ["search-form-field"];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        if (this.props.icon) {
            classes.push("hasicon")
        }

        return <div css={[style]} className={classes.join(" ")} >
        <input ref={this.props.reference} className="textfield" type="search" placeholder={this.props.fieldtext ?  this.props.fieldtext : "Vad letar du efter?"}></input>
        <button
            type={this.props.type ? this.props.type : "submit"}
            onClick={this.props.onClick} >
            <span className="buttontext">
                {this.props.buttontext ?  this.props.buttontext : "Sök"}
                <Icon icon={this.props.icon ? this.props.icon: "Search"} className="buttonicon" />                
            </span>
        </button>
        </div>
    }
}

export { FormSearchField };

