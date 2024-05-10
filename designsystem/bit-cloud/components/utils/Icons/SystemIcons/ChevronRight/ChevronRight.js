/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const ChevronRight = ({ className, style, title, ...otherAttr }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5.27253 8.91581L10.5391 4.24227C10.9031 3.91924 11.4917 3.91924 11.8518 4.24227L12.727 5.0189C13.091 5.34192 13.091 5.86426 12.727 6.18385L8.99395 9.49656L12.727 12.8093C13.091 13.1323 13.091 13.6546 12.727 13.9742L11.8557 14.7577C11.4917 15.0808 10.9031 15.0808 10.5429 14.7577L5.2764 10.0842C4.90851 9.76117 4.90851 9.23883 5.27253 8.91581Z" fill="#0061C2" />
    </svg>
}