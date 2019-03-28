import React from 'react';
import FormLabel from '../FormLabel'

export default class RadioButton extends React.Component {

    render() {
        return <div className="radiobutton">
            <FormLabel labelText={this.props.labelText}>
                <input type="radio" name={this.props.name} value={this.props.value} />
            </FormLabel>
        </div>;
        }
    }
    
