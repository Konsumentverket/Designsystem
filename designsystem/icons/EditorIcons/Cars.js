/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style} width="32px" height="24px" viewBox="0 0 32 24"{...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-256.000000, -536.000000)" fill="#000000" fill-rule="nonzero">
            <g transform="translate(256.000000, 536.000000)">
                <path d="M31.249438,6.5 L27.8235004,6.5 L27.3326253,5.191 C26.7581253,3.6589375 25.7435628,2.3565625 24.3987503,1.4245625 C23.0539377,0.4925625 21.4781877,0 19.8420001,0 L12.1579999,0 C10.5217498,0 8.94606229,0.492625 7.60124975,1.4245625 C6.25637471,2.3565625 5.24187468,3.6589375 4.66737466,5.191 L4.17649965,6.5 L0.750562045,6.5 C0.238624529,6.5 -0.122812982,7.0015 0.0390620233,7.4871875 L0.539062038,8.9871875 C0.641151903,9.29343316 0.927748259,9.5 1.25056206,9.5 L3.05149961,9.5 L3.04824961,9.50875 C1.82637458,10.1933125 1,11.4998125 1,13 L1,16 C1,17.0140625 1.37806206,17.9393125 2,18.6443125 L2,22.5 C2,23.3284375 2.6715621,24 3.5,24 L6.5,24 C7.32843724,24 8,23.3284375 8,22.5 L8,20 L24,20 L24,22.5 C24,23.3284375 24.6715628,24 25.5,24 L28.5,24 C29.3284379,24 30,23.3284375 30,22.5 L30,18.6443125 C30.6219379,17.93925 31,17.014 31,16 L31,13 C31,11.4998125 30.1736254,10.1933125 28.9517504,9.50875 L28.9485004,9.5 L30.7494379,9.5 C31.0722517,9.5 31.3588481,9.29343316 31.460938,8.9871875 L31.960938,7.4871875 C32.122813,7.0015 31.7613755,6.5 31.249438,6.5 Z M8.41268727,6.5955 C8.99487479,5.0430625 10.4999998,4 12.1579999,4 L19.8420001,4 C21.5000002,4 23.0051252,5.0430625 23.5873127,6.5955 L24.4890003,9 L7.51099975,9 L8.41268727,6.5955 Z M5.49999963,16.5 C4.39543715,16.5 3.49999963,15.6045625 3.49999963,14.5 C3.49999963,13.3954375 4.39543715,12.5 5.49999963,12.5 C6.60456222,12.5 8.49999963,14.3954375 8.49999963,15.5 C8.49999963,16.6045625 6.60456222,16.5 5.49999963,16.5 Z M26.5000002,16.5 C25.3954378,16.5 23.5000002,16.6045625 23.5000002,15.5 C23.5000002,14.3954375 25.3954378,12.5 26.5000002,12.5 C27.6045628,12.5 28.5000002,13.3954375 28.5000002,14.5 C28.5000002,15.6045625 27.6045628,16.5 26.5000002,16.5 Z" id="Shape"></path>
            </g>
        </g>
    </g>
        </svg>;
}




