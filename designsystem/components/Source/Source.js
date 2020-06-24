/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import { 
    sourceStyle, 
    firstRow, 
    firstRowUsabilla, 
    buttonStyle, 
    secondRow, 
    rightAlign, 
    sourceLink 
} from './Source.css';
import { Button } from '../Button/Button';
import isExternal from './isExternalUrl';
import { Icon } from '../Icon/Icon';

export const Source = ({ 
    usabilla, 
    baseUrl,
    didThisHelpText, 
    reportErrorText, 
    sourcesCollection, 
    markdownText, 
    reviewedDate, 
    reviewedDateText, 
    style, 
    english }) => {

    const reviewed = reviewedDate ? new Date(reviewedDate) : null;
    const monthsSv = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
        <div css={usabilla ? firstRowUsabilla : firstRow}>
            {usabilla ? usabilla : question}
        </div>
        <div css={secondRow}>
            {sourcesCollection.items.length > 0 && 
            <p>
                {english ? 'Source: ' : 'Källa: '} 
                {sourcesCollection.items.map((item, idx) => {
                    return (
                        <a href={item.linkUrl} key={"link-"+idx}
                            css={sourceLink}
                            className={isExternal(baseUrl, item.linkUrl) ? "external" : null}>
                            {item.linkText}
                            {isExternal(baseUrl, item.linkUrl) && <Icon title="Extern länk" className="external" icon="External" />}
                        </a>
                    )   
                })}
            </p>}
            {markdownText}
            {reviewed && <div css={rightAlign}><p>{`${reviewedDateText || english ? 'Proofread: ' : 'Granskad: '}${reviewed.getDate()} ${english ? monthsEn[reviewed.getMonth()] : monthsSv[reviewed.getMonth()]} ${reviewed.getFullYear()}`}</p></div>}
        </div>
    </div>
}