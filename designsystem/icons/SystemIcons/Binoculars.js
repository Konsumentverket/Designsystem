/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title }) => {
  return <svg className={className} css={style} classwidth="30px" height="29px" viewBox="0 0 30 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>{title}</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-258.000000, -5918.000000)">
        <g transform="translate(259.000000, 5919.000000)">
          <g fill="#FFFFFF" stroke="#B50255" stroke-width="2">
            <g>
              <g>
                <ellipse id="Oval" cx="14" cy="13.5" rx="14" ry="13.5"></ellipse>
              </g>
            </g>
          </g>
          <g id="binoculars" transform="translate(6.000000, 6.000000)" fill="#B50156" fill-rule="nonzero">
            <path d="M6,2.25 L3,2.25 L3,0.75 C3,0.33578125 3.33578125,0 3.75,0 L5.25,0 C5.66421875,0 6,0.33578125 6,0.75 L6,2.25 Z M13,0.75 C13,0.33578125 12.6642188,0 12.25,0 L10.75,0 C10.3357813,0 10,0.33578125 10,0.75 L10,2.25 L13,2.25 L13,0.75 Z M0,13.25 C0,13.6642187 0.33578125,14 0.75,14 L4.5,14 C4.91421875,14 5.25,13.6642187 5.25,13.25 L5.25,12.75 L0,12.75 L0,13.25 Z M2.75,3 C2.33578125,3 2,3.33578125 2,3.75 C2,7 0,7.5 0,12 L5.25,12 L5.25,8.75 C5.25,8.33578125 5.58578125,8 6,8 L6,3 L2.75,3 Z M10.75,13.25 C10.75,13.6642187 11.0857813,14 11.5,14 L15.25,14 C15.6642187,14 16,13.6642187 16,13.25 L16,12.75 L10.75,12.75 L10.75,13.25 Z M6.75,3 L6.75,8 L9.25,8 L9.25,3 L6.75,3 Z M10.75,12 L16,12 C16,7.5 14,7 14,3.75 C14,3.33578125 13.6642188,3 13.25,3 L10,3 L10,8 C10.4142188,8 10.75,8.33578125 10.75,8.75 L10.75,12 Z"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>;
}