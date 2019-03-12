import React from 'react';
import './TextField.scss';
import FormLabel from '../FormLabel';
import TextInput from '../TextInput/TextInput';

export default class TextField extends React.Component {

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

        return <div>
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

