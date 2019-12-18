/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}  width="32px" height="29px" viewBox="0 0 32 29" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1">
        <g transform="translate(-540.000000, -1643.000000)">
            <g transform="translate(540.000000, 1643.000000)">
                <path d="M16.000255,6.38765 L3.85994231,17.0935469 C3.76994411,17.1746564 3.65494641,17.2124335 3.5560595,17.2796543 L3.5560595,27.5538933 C3.5560595,28.0448279 3.95405154,28.4427644 4.44493061,28.4427644 L11.5558995,28.4427644 C12.0467785,28.4427644 12.4447706,28.0448279 12.4447706,27.5538933 L12.4447706,20.4429244 C12.4447706,19.9519898 12.8427626,19.5540533 13.3336417,19.5540533 L18.6668683,19.5540533 C19.157803,19.5540533 19.5557394,19.9519898 19.5557394,20.4429244 L19.5557394,27.5538933 C19.5557394,28.0448279 19.9536759,28.4427644 20.4446105,28.4427644 L27.5555794,28.4427644 C28.046514,28.4427644 28.4444505,28.0448279 28.4444505,27.5538933 L28.4444505,17.2818765 C28.350008,17.2174334 28.237788,17.1807674 28.1522341,17.1041023 L16.000255,6.38765 Z M31.7049409,13.125293 L28.4444505,10.2459062 L28.4444505,2.66550223 C28.4444505,2.17462317 28.046514,1.77663113 27.5555794,1.77663113 L24.000095,1.77663113 C23.5091604,1.77663113 23.1112239,2.17462317 23.1112239,2.66550223 L23.1112239,5.53711146 L17.4863364,0.571655231 C16.6432421,-0.190551744 15.3600456,-0.190551744 14.5169513,0.571655231 L0.295013623,13.1269596 C-0.0702568478,13.4549531 -0.100478465,14.0169418 0.227514973,14.3821567 L0.227792746,14.3824901 L1.4172134,15.7041303 C1.74520684,16.0693452 2.30719559,16.0995668 2.67246606,15.7716289 C2.67257717,15.7715178 2.67263273,15.7714067 2.67274384,15.7713512 L15.412489,4.53379819 C15.7484823,4.23735968 16.2525833,4.23735968 16.5885766,4.53379819 L29.3283217,15.7707956 C29.6934255,16.0989557 30.2554698,16.0690119 30.5835744,15.7038525 L30.5838522,15.7035748 L31.7727173,14.3802679 C32.1004885,14.0149419 32.0701558,13.4531753 31.7049409,13.125293 L31.7049409,13.125293 Z" id="Fill-1"></path>
            </g>
        </g>
    </g>
        </svg>;
}



