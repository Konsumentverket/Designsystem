/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({ className, style, title, ...otherAttr }) => {

    return <svg className={className} css={style} width="17px" height="15px" viewBox="0 0 17 15" {...otherAttr}>
        <title>{title}</title>
        <path d="M12.4715521,8.17957031 L12.4715521,13.59375 C12.4715521,14.3704102 11.8733073,15 11.1353143,15 L1.33623772,15 C0.598244763,15 0,14.3704102 0,13.59375 L0,3.28125 C0,2.50458984 0.598244763,1.875 1.33623772,1.875 L8.24013261,1.875 C8.41732158,1.875 8.58725358,1.94907496 8.71254832,2.08092773 L9.1579609,2.54967773 C9.57887578,2.99264648 9.28078342,3.75 8.68554519,3.75 L1.78165029,3.75 L1.78165029,13.125 L10.6899018,13.125 L10.6899018,8.64832031 C10.6899018,8.4618457 10.7603048,8.28298828 10.8855771,8.15112305 L11.3309897,7.68237305 C11.7518767,7.23943359 12.4715521,7.55314453 12.4715521,8.17957031 Z M16.0348527,1.09374023 C16.0348527,0.489697266 15.5695357,0 14.9955659,0 L10.5785486,0 C10.1480574,0 9.79907662,0.367265625 9.79907662,0.8203125 L9.79907662,1.34428711 C9.79907662,1.80618164 10.1612806,2.17702148 10.6000398,2.16427734 L12.4708561,2.1084375 L5.54232433,9.34833984 C5.27983713,9.62264648 5.27905766,10.0691895 5.5406262,10.3444629 L6.20537662,11.044043 C6.46694516,11.3193164 6.89128415,11.3185254 7.15190618,11.0422852 L14.0313591,3.75073242 L13.9782993,5.71957031 C13.9662175,6.18128906 14.3185945,6.5625 14.7574929,6.5625 L15.2553807,6.5625 C15.6858719,6.5625 16.0348527,6.19523438 16.0348527,5.7421875 L16.0348527,1.09374023 Z"></path>
    </svg>;

}