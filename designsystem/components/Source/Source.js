/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { sourceStyle, firstRow, buttonStyle, secondRow, rightAlign } from './Source.css';
import { Button } from '../Button/Button';

export const Source = ({ didThisHelpText, reportBugText, markdownText, reviewedDate }) => {

    const reviewed = new Date(reviewedDate);
    const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

    return <div css={sourceStyle}>
        <div css={[firstRow]}>
            <p>{didThisHelpText || "Hittade du svaret på din fråga?"}</p>
            <Button style={buttonStyle} secondaryButtonStyle={true} text={"Ja"} />
            <Button style={buttonStyle} secondaryButtonStyle={true} text={"Nej"} />
            <div css={rightAlign}><a href="#">{reportBugText || "Rapportera fel på denna sida"}</a></div>
        </div>
        <div css={[secondRow]}>
            {markdownText}
            {reviewed && <div css={rightAlign}><p>{`Granskad: ${reviewed.getDate()} ${months[reviewed.getMonth()-1]} ${reviewed.getFullYear()}`}</p></div>}
        </div>
    </div>
}