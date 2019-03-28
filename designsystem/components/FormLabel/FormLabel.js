import React from 'react';

export default class FormLabel extends React.Component {

    render() {
        return <label
                    className="formlabel"
                    htmlFor={this.props.for}
                >
                {this.props.children}
                {this.props.labelText}
                
        </label>;
    }
}

