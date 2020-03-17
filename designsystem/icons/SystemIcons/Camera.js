/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'

export default ({ className, style, title, ...otherAttr }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <title>{title}</title>
    <defs>
      <path d="M16.125,13 C16.125,15.2734375 14.2734375,17.125 12,17.125 C9.7265625,17.125 7.875,15.2734375 7.875,13 C7.875,10.7265625 9.7265625,8.875 12,8.875 C14.2734375,8.875 16.125,10.7265625 16.125,13 M17.625,13 C17.625,9.896875 15.103125,7.375 12,7.375 C8.896875,7.375 6.375,9.896875 6.375,13 C6.375,16.103125 8.896875,18.625 12,18.625 C15.103125,18.625 17.625,16.103125 17.625,13 M24,6.25 L24,19.75 C24,20.9921875 22.9921875,22 21.75,22 L2.25,22 C1.0078125,22 0,20.9921875 0,19.75 L0,6.25 C0,5.0078125 1.0078125,4 2.25,4 L6.375,4 L6.9515625,2.4578125 C7.2796875,1.58125 8.11875,1 9.05625,1 L14.9390625,1 C15.8765625,1 16.715625,1.58125 17.04375,2.4578125 L17.625,4 L21.75,4 C22.9921875,4 24,5.0078125 24,6.25" id={`camera-${title}`}></path>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g >
        <g>
          <mask id="mask-210" fill="white">
            <use href="#path-12323"></use>
          </mask>
          <use id="Fill-1" fill="#0074CC" href="#path-12323"></use>
          <g id="Color-/-brand-/-darkblue-Color-/-ui-/-blue" mask="url(#mask-210)" fill="#006EC2">
            <rect x="0" y="0" width="24" height="24"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>)