import React from 'react';
import './RadioButton.scss';

export default class RadioButton extends React.Component {

    render() {
        return <div className="radiobutton">
            <label>
                <input type="radio" name={this.props.name} value={this.props.value} />
                {this.props.label}
            </label>
        </div>;
        }
    }
    
