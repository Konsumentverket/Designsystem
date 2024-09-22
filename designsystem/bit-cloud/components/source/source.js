/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { secondRow, rightAlign, sourceLink, sourceTitle, sourcesContainer, reviewText } from "./sourcs.css.js";
import isExternal from "./isExternalUrl";
import { External } from '@konsumentverket-sverige/designsystem.utils';

export const Source = ({
  baseUrl,
  sourcesCollection,
  reviewedDate,
  reviewedDateText,
  english,
  bottomContent,
  sourceText
}) => {
  const reviewed = reviewedDate ? new Date(reviewedDate) : null;

  const monthsSv = [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december"
  ];

  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div data-comp="source">
      <div id="mtmFeedBackForm" className="feedbackForm"></div>
      <div css={secondRow}>
        {sourcesCollection && sourcesCollection.items.length > 0 && (
          <p css={sourcesContainer}>
            <span css={sourceTitle}>
              {sourceText ? `${sourceText} ` : "Källa: "}
            </span>
            {sourcesCollection.items.map((item, idx) => {
              return (
                <a
                  href={item.linkUrl}
                  key={"link-" + idx}
                  css={sourceLink}
                  className={
                    isExternal(baseUrl, item.linkUrl) ? "external" : null
                  }
                >
                  {item.linkText}
                  {isExternal(baseUrl, item.linkUrl) && (
                    <External title="Extern länk" className="external"/>
                  )}
                </a>
              );
            })}
          </p>
        )}
        {reviewed && (
          <div css={rightAlign}>
            <p css={reviewText}>{
                `
                  ${reviewedDateText || english == true ? "Proofread: " : "Granskad: "}
                  ${reviewed.getDate()}
                  ${english
                    ? monthsEn[reviewed.getMonth()]
                    : monthsSv[reviewed.getMonth()]
                  } ${reviewed.getFullYear()}
                `
              }
            </p>
          </div>
        )}
      </div>
      {bottomContent && <div>{bottomContent}</div>}
    </div>
  );
};
