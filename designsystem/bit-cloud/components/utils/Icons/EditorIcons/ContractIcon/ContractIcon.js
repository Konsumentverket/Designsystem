/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const ContractIcon = ({ className, style, title, ...otherAttr }) => {
        return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <g id="1711464248130-804011_task-list-edit--task-list-edit-work">
              <path id="1711464248130-804011_Subtract" d="M4.05467 0.424683C5.884 0.215349 8.79 1.59912e-05 13 1.59912e-05C14.1402 -0.000598817 15.2803 0.0165144 16.42 0.0513493C16.5105 0.0543133 16.6002 0.0695639 16.6867 0.0966827C17.4187 0.325349 19.3727 1.13935 22.102 3.81535C24.6767 6.34002 25.5653 8.19068 25.8553 9.00268C25.8899 9.09912 25.9095 9.2003 25.9133 9.30268C25.9433 10.1187 25.9673 11.01 25.9827 11.982C24.7393 11.898 23.596 12.5 22.8747 13.222L13.82 22.2753C13.0867 23.0087 12.4733 24.0127 12.32 25.236C12.2247 25.9987 12.1373 27.1014 12.1347 28.586L12.1353 28.6627C8.38867 28.636 5.75533 28.436 4.05467 28.2413C2.12467 28.0213 0.658667 26.554 0.446 24.6207C0.228667 22.652 0 19.38 0 14.3334C0 9.28668 0.228667 6.01468 0.446 4.04535C0.659333 2.11202 2.12467 0.645349 4.05467 0.424683Z" fill="#FCEBD5"/>
              <path id="1711464248130-804011_Intersect" d="M25.8987 9.16671C24.2853 9.16604 21.5187 9.14004 19.9333 8.98804C18.2013 8.82204 16.8393 7.44071 16.6693 5.67137C16.5267 4.18271 16.5007 1.67804 16.5 0.057373C16.5633 0.0640397 16.6253 0.0773731 16.6867 0.0967064C17.4187 0.325373 19.3727 1.13937 22.102 3.81537C24.6767 6.34004 25.5653 8.19071 25.8553 9.00271C25.8747 9.05604 25.8887 9.11137 25.8987 9.16671Z" fill="#F59C00"/>
              <path id="1711464248130-804011_Rectangle 67" d="M29.292 19.8294C29.9527 19.168 30.2407 18.216 29.7627 17.4127C29.4647 16.9127 29.0194 16.3054 28.3574 15.6427C27.6947 14.9807 27.0874 14.5354 26.5874 14.2374C25.784 13.7594 24.832 14.0474 24.1707 14.708L15.1674 23.712C14.6334 24.2454 14.2507 24.9127 14.1607 25.6627C14.0807 26.3294 14.0054 27.3027 14 28.6167C13.999 28.7986 14.0342 28.979 14.1033 29.1472C14.1725 29.3155 14.2744 29.4684 14.403 29.597C14.5317 29.7257 14.6846 29.8276 14.8528 29.8967C15.0211 29.9659 15.2014 30.001 15.3834 30C16.698 29.9947 17.6707 29.9187 18.3367 29.8387C19.0874 29.7494 19.754 29.3667 20.2887 28.8327L29.292 19.8294Z" fill="#F59C00"/>
              <path id="1711464248130-804011_Intersect_2" fillRule="evenodd" clipRule="evenodd" d="M27.9787 21.1413C27.9253 21.03 27.8653 20.91 27.7967 20.7813C27.4073 20.0567 26.7493 19.082 25.6527 17.9853C24.6133 16.946 23.6847 16.3007 22.9727 15.9053L21.4827 17.3953C21.5993 17.446 21.7427 17.5133 21.9107 17.6033C22.4627 17.8993 23.2793 18.4407 24.238 19.3993C25.1973 20.3587 25.738 21.1753 26.034 21.7273C26.1827 22.004 26.2707 22.216 26.3193 22.348C26.3384 22.3998 26.3556 22.4523 26.3707 22.5053C26.386 22.5687 26.4067 22.63 26.4327 22.6873L26.7013 22.4187C26.376 22.492 26.368 22.494 26.368 22.4947V22.4933L26.7013 22.4187L27.9787 21.1413ZM26.3687 22.4953L26.37 22.502V22.5L26.3687 22.4967V22.4953Z" fill="#FCEBD5"/>
              <path id="1711464248130-804011_Vector 1455 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M11.678 4.0507C11.9297 4.23053 12.0998 4.503 12.1507 4.80818C12.2015 5.11336 12.1291 5.42625 11.9493 5.67803L8.61599 10.3447C8.51749 10.4825 8.39016 10.5972 8.24285 10.6809C8.09554 10.7645 7.93178 10.815 7.76296 10.829C7.59414 10.843 7.42431 10.82 7.26527 10.7617C7.10622 10.7034 6.96178 10.6111 6.84199 10.4914L4.17532 7.8247C4.06225 7.71749 3.97181 7.58871 3.90932 7.44597C3.84683 7.30323 3.81357 7.14942 3.8115 6.99361C3.80943 6.83781 3.8386 6.68317 3.89727 6.53882C3.95594 6.39447 4.04293 6.26334 4.15311 6.15316C4.26329 6.04298 4.39442 5.95598 4.53877 5.89731C4.68312 5.83864 4.83776 5.80948 4.99357 5.81155C5.14937 5.81362 5.30318 5.84688 5.44592 5.90937C5.58866 5.97185 5.71744 6.0623 5.82465 6.17537L7.51799 7.86803L10.0507 4.32137C10.2306 4.06971 10.5031 3.89982 10.8083 3.84907C11.1134 3.79831 11.4263 3.87084 11.678 4.0507Z" fill="#F59C00"/>
              <path id="1711464248130-804011_Vector 1456 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M11.678 11.384C11.9297 11.5638 12.0998 11.8363 12.1507 12.1415C12.2015 12.4467 12.1291 12.7596 11.9493 13.0113L8.61599 17.678C8.51749 17.8158 8.39016 17.9305 8.24285 18.0142C8.09554 18.0978 7.93178 18.1484 7.76296 18.1623C7.59414 18.1763 7.42431 18.1533 7.26527 18.095C7.10622 18.0367 6.96178 17.9444 6.84199 17.8247L4.17532 15.158C4.06225 15.0508 3.97181 14.922 3.90932 14.7793C3.84683 14.6365 3.81357 14.4827 3.8115 14.3269C3.80943 14.1711 3.8386 14.0165 3.89727 13.8721C3.95594 13.7278 4.04293 13.5966 4.15311 13.4865C4.26329 13.3763 4.39442 13.2893 4.53877 13.2306C4.68312 13.172 4.83776 13.1428 4.99357 13.1449C5.14937 13.1469 5.30318 13.1802 5.44592 13.2427C5.58866 13.3052 5.71744 13.3956 5.82465 13.5087L7.51799 15.2013L10.0507 11.6547C10.2306 11.403 10.5031 11.2331 10.8083 11.1824C11.1134 11.1316 11.4263 11.2042 11.678 11.384Z" fill="#F59C00"/>
            </g>
          </g>
        </svg>;
}