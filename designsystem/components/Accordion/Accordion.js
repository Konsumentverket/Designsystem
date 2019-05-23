/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useEffect } from "react";
import style from './Accordion.css';

const Accordion = ({ content }) => {

    const [children, setchildren] = useState(content.contentCollection.items);
    return (
        <div css={style} className="content-accordion">
            <h2>{content.headline}</h2>
            <div className="accordion-content">
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


const ExpandSection = ({ content: { headline, title, text } }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const openClass = open ? "open" : "closed";

    return (
        <div className="content-text-section">
            <a href="#" className={`toggle-heading ${openClass}`} onClick={(e) => toggleOpen(e)}>
                <i className={`icon icon-expand ${openClass}`}></i>
                <h3 className="headline">
                    {headline}
                </h3>
            </a>
            <div className={`section-content ${openClass}`}>
                <div>{text}</div>
            </div>
        </div>
    );
};

export { Accordion };
