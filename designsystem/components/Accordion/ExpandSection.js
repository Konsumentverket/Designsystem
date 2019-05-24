/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

/* export const ExpandSection = ({ content: { headline, title, text } }) => {
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
}; */

class ExpandSection extends React.Component {

    componentDidMount() {
        this.state = { open: false }
    }

    toggleOpen(e) {
        e.preventDefault();
        this.setState({ open: !this.state.open });
    };

    render() {

        const openClass = this.state && this.state.open ? "open" : "closed";

        return (
            <div className="content-text-section">
                <a href="#" className={`toggle-heading ${openClass}`} onClick={this.toggleOpen.bind(this)}>
                    <i className={`icon icon-expand ${openClass}`}></i>
                    <h3 className="headline">
                        {this.props.content.headline}
                    </h3>
                </a>
                <div className={`section-content ${openClass}`}>
                    <div>{this.props.content.text}</div>
                </div>
            </div>
        );
    }
}

export { ExpandSection }