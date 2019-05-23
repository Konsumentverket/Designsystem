import React, { useState } from "react";

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

export default ExpandSection;