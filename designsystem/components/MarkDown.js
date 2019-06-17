import React from "react";
import marked from "marked";

const Markdown = ({ content }) => {
    if (content) {
        const rawMarkup = marked(content, { sanitize: true });
        return <div dangerouslySetInnerHTML={{ __html: rawMarkup }} />;
    }
    return null;

}

export { Markdown };