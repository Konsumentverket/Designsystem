import React from 'react';

export default class TextInput extends React.Component {

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

        return <input
            type={this.props.type}
            id={this.props.id}
            placeholder={this.props.placeholder}
            name={this.props.name}
            value={this.state.value}
            onChange={e => {
                this.setState({ value: e.target.value });
            }}
        />;
    }
}

