/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";
import { Markdown } from "../Markdown";
import BoxStyle from "./BoxWithHeadlineText.css";

const BoxWithHeadlineText = ({ text, headline, color, backgroundWidth }) => {

    const show = text && headline;
    console.log("Box has color: ", color)
    console.log("And width: ", backgroundWidth)
    return (
        show &&
        <div css={BoxStyle} className={color}>
            <span className="heading">{headline}</span>
            <Markdown content={text} />
        </div>
    );
};

export { BoxWithHeadlineText };