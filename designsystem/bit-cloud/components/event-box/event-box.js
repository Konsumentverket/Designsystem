/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from "react";

import {
  eventBoxWrapper
} from './event-box.css.js';

import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import { Button }  from '@konsumentverket-sverige/designsystem.button';

const additionalStyles = css`
  color: hotpink;
  padding: 16px;
`;

export const EventBox = ({
  date,
  subject,
  lecturers,
  text,
  url,
  listOption
}) => {
  return (
    <div data-comp="event-box" css={eventBoxWrapper}>
      { listOption && (
        <ul>
          {lecturers.map((lecturer, index) => (
            <li key={index}>{lecturer}</li>
          ))}
        </ul>
      )}
      { !listOption && (
        <p>{lecturers.join(", ")}</p>
      )}
      <Button
        href={url}
        iconRight={
          <Icon icon="External"/>
        }
        text="Gå till anmälan"
      />
    </div>
  )}
