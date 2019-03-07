import React from 'react';
import './Button.scss';

export default class Link extends React.Component {

    render() {
        return <input className="button" type="button" value={this.props.text} />;
    }
}
