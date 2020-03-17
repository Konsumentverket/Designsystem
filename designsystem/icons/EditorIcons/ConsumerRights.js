/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="28px" height="32px" viewBox="0 0 28 32" {...otherAttr}>
        <title>{title}</title>
        <g stroke="none" strokeWidth="1">
            <g transform="translate(-258.000000, -1831.000000)">
                <g transform="translate(258.000000, 1831.000000)">
                    <path d="M22,10 L22,8 C22,3.58875 18.4111875,0 14,0 C9.58875,0 6,3.58875 6,8 L6,10 L0,10 L0,27 C0,29.7614375 2.2385625,32 5,32 L23,32 C25.7614375,32 28,29.7614375 28,27 L28,10 L22,10 Z M10,8 C10,5.794375 11.794375,4 14,4 C16.205625,4 18,5.794375 18,8 L18,10 L10,10 L10,8 Z M20,15.5 C19.1715625,15.5 18.5,14.8284375 18.5,14 C18.5,13.1715625 19.1715625,12.5 20,12.5 C20.8284375,12.5 21.5,13.1715625 21.5,14 C21.5,14.8284375 20.8284375,15.5 20,15.5 Z M8,15.5 C7.1715625,15.5 6.5,14.8284375 6.5,14 C6.5,13.1715625 7.1715625,12.5 8,12.5 C8.8284375,12.5 9.5,13.1715625 9.5,14 C9.5,14.8284375 8.8284375,15.5 8,15.5 Z" id={`consumerRights-${title}`}></path>
                </g>
            </g>
        </g>
    </svg>;
}




