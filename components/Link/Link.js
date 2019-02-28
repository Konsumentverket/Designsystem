import React from 'react';
import './Link.scss';

export default class Link extends React.Component {

    render() {
        return <a className="link" href="{this.props.linkUrl}">{this.props.text}</a>;
    }
}

