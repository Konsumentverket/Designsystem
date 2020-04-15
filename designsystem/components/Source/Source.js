/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { sourceStyle, firstRow, buttonStyle, secondRow, rightAlign } from './Source.css';
import { Button } from '../Button/Button';

export const Source = ({ usabilla, didThisHelpText, reportErrorText, markdownText, reviewedDate, style }) => {

    const reviewed = reviewedDate ? new Date(reviewedDate) : null;
    const months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

    const question = (<>
        <p>{didThisHelpText || "Hittade du svaret på din fråga?"}</p>
        <div>
            <Button style={buttonStyle} secondaryButtonStyle={true} text={"Ja"} />
            <Button style={buttonStyle} secondaryButtonStyle={true} text={"Nej"} />
        </div>
        <div css={rightAlign}>
            <a href="#">{reportErrorText || "Rapportera fel på denna sida"}</a>
        </div>
    </>)

    return <div css={[sourceStyle, style]}>
        <div css={[firstRow]}>
            {usabilla ? usabilla : question}
        </div>
        <div css={[secondRow]}>
            {markdownText}
            {reviewed && <div css={rightAlign}><p>{`Granskad: ${reviewed.getDate()} ${months[reviewed.getMonth()]} ${reviewed.getFullYear()}`}</p></div>}
        </div>
    </div>
}