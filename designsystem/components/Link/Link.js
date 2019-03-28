import React from 'react';

export default class Link extends React.Component {

    render() {
        return <a className="link" href={this.props.linkUrl}>{this.props.text}</a>;
    }
}

