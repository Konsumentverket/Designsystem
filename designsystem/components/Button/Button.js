/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import style from './Button.css';

class Button extends React.Component {

    render() {
        let classes = ["button"];
        if(this.props.darkmode){
            classes.push("darkmode")
        }
        if(this.props.buttontype){
            classes.push(this.props.buttontype)
        }
        if(this.props.className){
            classes.push(this.props.className);
        }
        if(this.props.disabled){
            classes.push("disabled");
        }
        if(this.props.size){
            classes.push(this.props.size);
        }

        


        return <input   
                    css={[style,this.props.style]} 
                    className={classes.join(" ")} 
                    disabled={this.props.disabled} 
                    type={this.props.type ? this.props.type : "submit"} 
                    value={this.props.text}
                />;
    }
}
export { Button };
