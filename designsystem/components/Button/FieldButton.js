/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import style from './FieldButton.css';
import { Icon } from '../Icon/Icon';

class FieldButton extends React.Component {

    render() {

       
        let classes = ["field-button"];
        if (this.props.darkmode) {
            classes.push("darkmode")
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        if (this.props.icon) {
            classes.push("hasicon")
        }

        return <span>TEST</span> 


        return <button
            css={[style, this.props.style]}
            className={classes.join(" ")}
            type={this.props.type ? this.props.type : "submit"}
            onClick={this.props.onClick}
            ref={this.props.reference}
        >
            <span className="buttontext">
                {this.props.text}
                {this.props.icon ? <Icon icon={this.props.icon} className="buttonicon" /> : null}
                
            </span>
        </button>;
    }
}
export { FieldButton };
