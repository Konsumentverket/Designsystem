import React from 'react';
import './ComponentExplanation.scss';

export default class ComponentExplanation extends React.Component {

    render() {
        return <div className="componentExplanation">
                    <h1>Komponent > {this.props.heading}</h1>
                    {this.props.children}
            </div>;
    }
}
