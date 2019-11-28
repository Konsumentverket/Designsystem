/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style} width="20px" height="32px" viewBox="0 0 20 32" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1">
        <g transform="translate(-814.000000, -2157.000000)">
            <path d="M831,2180.25 C831,2180.6625 830.6625,2181 830.25,2181 L817.75,2181 C817.3375,2181 817,2180.6625 817,2180.25 L817,2160.75 C817,2160.3375 817.3375,2160 817.75,2160 L830.25,2160 C830.6625,2160 831,2160.3375 831,2160.75 L831,2180.25 Z M824,2187 C822.89375,2187 822,2186.10625 822,2185 C822,2183.89375 822.89375,2183 824,2183 C825.10625,2183 826,2183.89375 826,2185 C826,2186.10625 825.10625,2187 824,2187 L824,2187 Z M831,2157 L817,2157 C815.34375,2157 814,2158.34375 814,2160 L814,2186 C814,2187.65625 815.34375,2189 817,2189 L831,2189 C832.65625,2189 834,2187.65625 834,2186 L834,2160 C834,2158.34375 832.65625,2157 831,2157 L831,2157 Z" id="Fill-1"></path>
        </g>
    </g>
        </svg>;
}




