import React from 'react';
import FormLabel from '../FormLabel'

export default class Checkbox extends React.Component {

    render() {
        return <div className="checkbox">
            <FormLabel labelText={this.props.label}>
                <input type="checkbox" value={this.props.value} name={this.props.name} />
            </FormLabel>
            </div>;
    }
}

