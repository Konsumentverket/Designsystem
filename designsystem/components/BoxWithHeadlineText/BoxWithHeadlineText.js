/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";
import { Markdown } from "../MarkDown";
import BoxStyle from "./BoxWithHeadlineText.css";

const BoxWithHeadlineText = ({ text, headline, color, backgroundWidth }) => {

    const show = text && headline;

    let selectedColor = color => {
        switch (color) {
            case "Grå":
                return "gray";
            case "Blå":
                return "blue";
            case "Vit":
                return "white";
            default:
                return "gray";
        }
    }

    let selectedWidth = width => {
        switch (width) {
            case "Kolumnbredd":
                return "column";
            case "Fullbredd":
                return "full";
            default:
                return "column";
        }
    }

    return (
        show &&
        <div css={BoxStyle} className={`${selectedColor(color)} ${selectedWidth(backgroundWidth)}`}>
            <span className="heading">{headline}</span>
            <Markdown content={text} />
        </div >
    );
};

export { BoxWithHeadlineText };