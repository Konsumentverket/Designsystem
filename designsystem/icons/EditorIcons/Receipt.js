/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {
        return <svg className={className} css={style}  width="23px" height="32px" viewBox="0 0 23 32" {...otherAttr}>
                <title>{title}</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-261.000000, -1095.000000)" fill="#000000" fill-rule="nonzero">
            <g transform="translate(272.500000, 1111.000000) scale(-1, 1) translate(-272.500000, -1111.000000) translate(261.000000, 1095.000000)">
                <path d="M21.4666667,0.201662104 L19.1666667,3.00136755 L15.9083333,0.201662104 C15.5682667,-0.0670781143 15.0984,-0.0670781143 14.7583333,0.201662104 L11.5,3.00136755 L8.24166667,0.201662104 C7.90159999,-0.0670781143 7.43173335,-0.0670781143 7.09166667,0.201662104 L3.83333333,3.00136755 L1.53333333,0.201662104 C0.8984375,-0.292035956 0,0.176664733 0,1.00157795 L0,30.9984221 C0,31.8233353 0.8984375,32.292036 1.53333333,31.7983379 L3.83333333,28.9986324 L7.09166667,31.7983379 C7.43173335,32.0670781 7.90159999,32.0670781 8.24166667,31.7983379 L11.5,28.9986324 L14.7583333,31.7983379 C15.0984,32.0670781 15.5682667,32.0670781 15.9083333,31.7983379 L19.1666667,28.9986324 L21.4666667,31.7983379 C22.0955729,32.292036 23,31.8233353 23,30.9984221 L23,1.00157795 C23,0.176664733 22.1015625,-0.292035956 21.4666667,0.201662104 Z M19.1666667,22.4993162 C19.1666667,22.7742873 18.9510417,22.9992636 18.6875,22.9992636 L4.3125,22.9992636 C4.04895833,22.9992636 3.83333333,22.7742873 3.83333333,22.4993162 L3.83333333,21.4994214 C3.83333333,21.2244503 4.04895833,20.999474 4.3125,20.999474 L18.6875,20.999474 C18.9510417,20.999474 19.1666667,21.2244503 19.1666667,21.4994214 L19.1666667,22.4993162 Z M19.1666667,16.4999474 C19.1666667,16.7749185 18.9510417,16.9998948 18.6875,16.9998948 L4.3125,16.9998948 C4.04895833,16.9998948 3.83333333,16.7749185 3.83333333,16.4999474 L3.83333333,15.5000526 C3.83333333,15.2250815 4.04895833,15.0001052 4.3125,15.0001052 L18.6875,15.0001052 C18.9510417,15.0001052 19.1666667,15.2250815 19.1666667,15.5000526 L19.1666667,16.4999474 Z M19.1666667,10.5005786 C19.1666667,10.7755497 18.9510417,11.000526 18.6875,11.000526 L4.3125,11.000526 C4.04895833,11.000526 3.83333333,10.7755497 3.83333333,10.5005786 L3.83333333,9.50068378 C3.83333333,9.22571271 4.04895833,9.00073637 4.3125,9.00073637 L18.6875,9.00073637 C18.9510417,9.00073637 19.1666667,9.22571271 19.1666667,9.50068378 L19.1666667,10.5005786 Z" id="Shape"></path>
            </g>
        </g>
    </g>
        </svg>;
}




