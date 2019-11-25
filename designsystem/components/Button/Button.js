/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import ButtonStyle, { selectedStyle,secondaryStyle,ctaStyle,mediumStyle,largeStyle,iconStyle } from './Button.css';
import { Icon } from '../Icon/Icon';


export const Button = (props,{text,buttontype,className, id, type = "submit",
    disabled, selected, size, icon, iconRight, style, reference, onClick}) => {

    var styles = [ButtonStyle,style];

        switch (buttontype){
            case "primary":
                //default
                break;
            case "secondary":
                styles.push(secondaryStyle);
                break;
            case "cta":
                styles.push(ctaStyle);
                break;
        }
    
        switch (size){
            case "small":
                //default
                break;
            case "medium":
                styles.push(mediumStyle);
                break;
            case "large":
                styles.push(largeStyle);
                break;
        }

        if(selected) styles.push(selectedStyle);
        // const ariaAttrs = {};
        // Object.keys(props).filter(x => x.startsWith('aria-')).forEach(y => ariaAttrs[y] = props[y]);

        // const getAriaAttrs = () => Object.keys(props).filter(x => x.startsWith('aria-')).forEach(y => ariaAttrs[y] = props[y]);
        

        return <button
            id={id}
            css={styles}
            className={className}
            disabled={disabled}
            type={type}
            onClick={onClick}
            ref={reference}
        >
            {icon && !iconRight ? <Icon style={iconStyle("left")} icon={icon} /> : null}
            {text}
            {icon && iconRight ? <Icon style={iconStyle("right")} icon={icon} /> : null}
        </button>;



}


// class Button extends React.Component {

//     render() {
//         let classes = ["button"];
//         if (this.props.darkmode) {
//             classes.push("darkmode")
//         }
//         if (this.props.buttontype) {
//             classes.push(this.props.buttontype)
//         }
//         if (this.props.className) {
//             classes.push(this.props.className);
//         }
//         if (this.props.disabled) {
//             classes.push("disabled");
//         }
//         if (this.props.selected) {
//             classes.push("selected")
//         }
//         if (this.props.size) {
//             classes.push(this.props.size);
//         }
//         if (this.props.icon) {
//             classes.push("hasicon")
//         }

//         if (this.props.fieldbutton){
//             classes.push("fieldbutton")
//         }

//         return <button
//             css={[style, this.props.style]}
//             className={classes.join(" ")}
//             disabled={this.props.disabled}
//             type={this.props.type ? this.props.type : "submit"}
//             onClick={this.props.onClick}
//             ref={this.props.reference}
//         >
//             <span className="buttontext">
//                 {this.props.icon && !this.props.iconRight ? <Icon icon={this.props.icon} className="buttonicon" /> : null}
//                 {this.props.text}
//             </span>
//         </button>;
//     }
// }
// export { Button };
