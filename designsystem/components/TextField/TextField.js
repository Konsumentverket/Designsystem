import React from 'react';
import { FormLabel } from '../FormLabel/FormLabel';
import { TextInput } from '../TextInput/TextInput';

class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        return <div className="textfield">
            <FormLabel for={this.props.id} labelText={this.props.labelText} />
            <TextInput
                type={this.props.type}
                id={this.props.id}
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.state.value}
            />
            
        </div>;
    }
}

export { TextField };

