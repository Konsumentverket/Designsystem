/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useEffect } from "react";
import { ExpandSection } from "./ExpandSection";
import style from './Accordion.css';

/* export const Accordion = ({ content }) => {

    const [children, setchildren] = useState(content.contentCollection.items);
    return (
        <div className="content-accordion">
            <h2>{content.headline}</h2>
            <div className="accordion-content" css={style}>
                {children.map(c => (
                    <ExpandSection
                        content={c}
                        key={c.title}
                    />
                ))}
            </div>
        </div>
    );
}; */

export class Accordion extends React.Component {

    render() {
        return (
            <div className="content-accordion">
                <h2>{this.props.content.contentCollection.headline}</h2>
                <div className="accordion-content" css={style}>
                    {this.props.content.contentCollection.items.map(c => (
                        <ExpandSection
                            content={c}
                            key={c.title}
                        />
                    ))}
                </div>
            </div>
        );
    }

}
