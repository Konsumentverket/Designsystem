/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from "react";
import { Icon } from '../Icon/Icon';

const ExpandSection = ({ content: { headline, title, text } }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const openClass = open ? "open" : "closed";
    const icon = open ? "Telecom" : "Furniture";

    return (
        <div className="content-text-section">
            <a href="#" className={`toggle-heading ${openClass}`} onClick={(e) => toggleOpen(e)}>
                <Icon className="expand-icon" icon={icon} />
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

export { ExpandSection }