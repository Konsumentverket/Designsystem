/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}  width="32px" height="22px" viewBox="0 0 32 22" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1114.000000, -1833.000000)" fill="#000000">
            <path d="M1140.66667,1837.88889 C1140.66667,1837.1525 1140.06972,1836.55556 1139.33333,1836.55556 L1120.66667,1836.55556 C1119.93028,1836.55556 1119.33333,1837.1525 1119.33333,1837.88889 L1119.33333,1849.44444 C1119.33333,1850.18083 1119.93028,1850.77778 1120.66667,1850.77778 L1139.33333,1850.77778 C1140.06972,1850.77778 1140.66667,1850.18083 1140.66667,1849.44444 L1140.66667,1837.88889 Z M1143.33333,1843.66667 C1143.33333,1845.13944 1144.52722,1846.33333 1146,1846.33333 L1146,1851.66667 C1146,1853.13944 1144.80611,1854.33333 1143.33333,1854.33333 L1116.66667,1854.33333 C1115.19389,1854.33333 1114,1853.13944 1114,1851.66667 L1114,1846.33333 C1115.47278,1846.33333 1116.66667,1845.13944 1116.66667,1843.66667 C1116.66667,1842.19389 1115.47278,1841 1114,1841 L1114,1835.66667 C1114,1834.19389 1115.19389,1833 1116.66667,1833 L1143.33333,1833 C1144.80611,1833 1146,1834.19389 1146,1835.66667 L1146,1841 C1144.52722,1841 1143.33333,1842.19389 1143.33333,1843.66667 L1143.33333,1843.66667 Z M1121.11111,1849 L1138.88889,1849 L1138.88889,1838.33333 L1121.11111,1838.33333 L1121.11111,1849 Z" id="Fill-1"></path>
        </g>
    </g>
        </svg>;
}




