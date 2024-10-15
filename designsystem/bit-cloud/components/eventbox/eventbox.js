/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
//const moment = require("moment");

import {
  eventBoxWrapper,
  eventBoxInfo,
  eventBoxInfoContainer,
  eventBoxDisclaimer,
  eventBoxOverdue,
  eventBoxApply
} from './eventbox.css.js';

import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import { Button }  from '@konsumentverket-sverige/designsystem.button';

export const EventBox = ({
  date,
  time,
  latestApplicationDate,
  datePassed,
  subject,
  lecturers,
  text,
  url,
  listOption,
  contentfulName,
  contentfulId
  }) => {

  return (
    <div data-comp="event-box" css={eventBoxWrapper} data-contentful-field-id={contentfulName} data-contentful-entry-id={contentfulId}>
        <div css={eventBoxInfoContainer}>
          { date && <p css={eventBoxInfo}><span>Datum:</span> {date}</p>}
          { time && <p css={eventBoxInfo}><span>Tid:</span> {time}</p> }
          { subject && <p css={eventBoxInfo}><span>Ämne:</span> {subject}</p> }

          { listOption && lecturers?.length>0 && (
            <p css={eventBoxInfo}><span>Föreläsare:</span>
              <ul>
                {lecturers.map((lecturer, index) => (
                  <li key={index}>{lecturer}</li>
                ))}
              </ul>
            </p>
          )}
          { !listOption && lecturers?.length>0 && (
            <p css={eventBoxInfo}><span>Föreläsare:</span> {lecturers.join(", ")}</p>
          )}
          { text && <p css={eventBoxInfo}><span>Övrigt:</span> {text}</p>}
        </div>

      { !datePassed ? (
        <div css={eventBoxApply}>
          { url &&
          <Button
            href={url}
            iconRight={
              <Icon icon="External"/>
            }
            text="Gå till anmälan"
          />}
          { latestApplicationDate && <p css={eventBoxDisclaimer}>Sista dag för anmälan är {latestApplicationDate}</p>}
        </div>
      ) : (
        <p css={eventBoxOverdue}><Icon icon="WarningCircle"/> Sista dag för anmälan har passerat</p>
      )}

    </div>
  )}
