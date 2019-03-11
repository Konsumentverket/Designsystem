import React from 'react';
import './Logotype.scss';

export default class Logotype extends React.Component {

    render() {
        var slogan = this.props.slogan === null ? null : <span className="logotype__slogan">{this.props.slogan}</span>;
        return <a className="logotype" href={this.props.href}>
            <img className="logotype__image" src={this.props.src} alt={this.props.alt} />
            {slogan}
        </a>;
    }
}

