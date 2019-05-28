/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from "react";
import { ExpandSection } from "./ExpandSection";
import style from './Accordion.css';

const Accordion = ({ content }) => {

    const [children, setchildren] = useState(content.contentCollection.items);
    console.log(content);

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
};

export { Accordion }
