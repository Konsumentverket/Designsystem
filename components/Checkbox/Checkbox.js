import React from 'react';
import './Checkbox.scss';

export default class Checkbox extends React.Component {

    render() {
        return <div className="checkbox">
                <label>
                    <input type="checkbox" value={this.props.value} name={this.props.name} />
                    {this.props.label}
                </label>
            </div>;
    }
}

