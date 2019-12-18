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

        return <div css={[style, this.props.style]} className={classes.join(" ")} >
            <input
                ref={this.props.reference}
                className="textfield"
                type="search"
                value={this.props.value}
                placeholder={this.props.fieldtext ? this.props.fieldtext : "Vad letar du efter?"}
                onChange={this.props.onChange}
            >
            </input>
            <button
                type={this.props.type ? this.props.type : "submit"}
                onClick={this.props.onClick} >
                <span className="buttontext">
                    <Icon icon={this.props.icon ? this.props.icon : "Search"} className="buttonicon" />
                    {this.props.buttontext ? this.props.buttontext : "Sök"}
                </span>
            </button>
        </div>
    }
}

export { FormSearchField };

