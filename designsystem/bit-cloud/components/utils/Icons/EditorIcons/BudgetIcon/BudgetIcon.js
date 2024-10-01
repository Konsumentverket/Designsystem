/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const BudgetIcon = ({ className, style, title, ...otherAttr }) => {
        return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <g id="1711464248313-9214079_calculator-2--shop-shopping-pay-payment-store-cash-calculate-math-sign">
              <path id="1711464248313-9214079_Union" d="M7 0C8.832 0 10.1493 0.0973333 11.0813 0.219333C12.748 0.436667 13.8127 1.762 13.908 3.33733C13.96 4.184 14 5.36667 14 7C14 8.63333 13.96 9.81667 13.9087 10.6627C13.8127 12.238 12.7473 13.5633 11.0813 13.7807C10.1493 13.9027 8.832 14 7 14C5.168 14 3.85067 13.9027 2.91867 13.7807C1.252 13.5633 0.187333 12.238 0.092 10.6627C0.04 9.816 0 8.63333 0 7C0 5.36667 0.04 4.18333 0.0913333 3.33733C0.187333 1.762 1.25267 0.436667 2.91867 0.219333C3.85067 0.0973333 5.168 0 7 0Z" fill="#FCEBD5"/>
              <path id="1711464248313-9214079_Union_2" d="M7 16C5.168 16 3.85067 16.0973 2.91867 16.2193C1.252 16.4367 0.187333 17.762 0.092 19.3373C0.04 20.184 0 21.3667 0 23C0 24.6333 0.04 25.8167 0.0913333 26.6627C0.187333 28.238 1.25267 29.5633 2.91867 29.7807C3.85067 29.9027 5.168 30 7 30C8.832 30 10.1493 29.9027 11.0813 29.7807C12.748 29.5633 13.8127 28.238 13.908 26.6627C13.96 25.816 14 24.6333 14 23C14 21.3667 13.96 20.1833 13.9087 19.3373C13.8127 17.762 12.7473 16.4367 11.0813 16.2193C10.1493 16.0973 8.832 16 7 16Z" fill="#FCEBD5"/>
              <path id="1711464248313-9214079_Union_3" d="M23 30C24.832 30 26.1493 29.9027 27.0813 29.7807C28.748 29.5633 29.8127 28.238 29.908 26.6627C29.96 25.816 30 24.6333 30 23C30 21.3667 29.96 20.1833 29.9087 19.3373C29.8127 17.762 28.7473 16.4367 27.0813 16.2193C26.1493 16.0973 24.832 16 23 16C21.168 16 19.8507 16.0973 18.9187 16.2193C17.252 16.4367 16.1873 17.762 16.092 19.3373C16.04 20.184 16 21.3667 16 23C16 24.6333 16.04 25.8167 16.0913 26.6627C16.1873 28.238 17.2527 29.5633 18.9187 29.7807C19.8507 29.9027 21.168 30 23 30Z" fill="#FCEBD5"/>
              <path id="1711464248313-9214079_Union_4" d="M23 0C21.168 0 19.8507 0.0973333 18.9187 0.219333C17.252 0.436667 16.1873 1.762 16.092 3.33733C16.04 4.184 16 5.36667 16 7C16 8.63333 16.04 9.81667 16.0913 10.6627C16.1873 12.238 17.2527 13.5633 18.9187 13.7807C19.8507 13.9027 21.168 14 23 14C24.832 14 26.1493 13.9027 27.0813 13.7807C28.748 13.5633 29.8127 12.238 29.908 10.6627C29.96 9.816 30 8.63333 30 7C30 5.36667 29.96 4.18333 29.9087 3.33733C29.8127 1.762 28.7473 0.436667 27.0813 0.219333C26.1493 0.0973333 24.832 0 23 0Z" fill="#FCEBD5"/>
              <path id="1711464248313-9214079_Subtract" fillRule="evenodd" clipRule="evenodd" d="M10.3334 7.00002C10.3334 7.26523 10.228 7.51959 10.0405 7.70712C9.85292 7.89466 9.59857 8.00002 9.33335 8.00002H8.02869L8.06535 9.30335C8.06674 9.56458 7.96586 9.81598 7.78428 10.0038C7.60269 10.1916 7.35483 10.3009 7.09371 10.3083C6.83258 10.3157 6.57893 10.2206 6.387 10.0434C6.19507 9.86618 6.0801 9.6209 6.06669 9.36002L6.02802 8.00002H4.66669C4.40147 8.00002 4.14712 7.89466 3.95958 7.70712C3.77204 7.51959 3.66669 7.26523 3.66669 7.00002C3.66669 6.7348 3.77204 6.48045 3.95958 6.29291C4.14712 6.10537 4.40147 6.00002 4.66669 6.00002H5.97135L5.93469 4.69468C5.93101 4.56341 5.95323 4.43269 6.00007 4.31C6.04691 4.18731 6.11746 4.07504 6.20768 3.97961C6.29791 3.88418 6.40605 3.80746 6.52593 3.75383C6.64581 3.70019 6.77508 3.6707 6.90635 3.66702C7.03763 3.66334 7.16835 3.68556 7.29104 3.7324C7.41373 3.77924 7.526 3.84979 7.62143 3.94001C7.71685 4.03024 7.79357 4.13838 7.84721 4.25826C7.90084 4.37814 7.93034 4.50741 7.93402 4.63868L7.97202 5.99935H9.33335C9.46473 5.99935 9.59482 6.02524 9.71619 6.07554C9.83756 6.12583 9.94783 6.19955 10.0407 6.29248C10.1336 6.38541 10.2072 6.49573 10.2574 6.61713C10.3076 6.73853 10.3334 6.86864 10.3334 7.00002Z" fill="#F59C00"/>
              <path id="1711464248313-9214079_Subtract_2" fillRule="evenodd" clipRule="evenodd" d="M9.70736 20.2933C9.89483 20.4809 10.0001 20.7352 10.0001 21.0003C10.0001 21.2655 9.89483 21.5198 9.70736 21.7073L8.41402 23.0007L9.70736 24.2933C9.80444 24.3852 9.88212 24.4956 9.9358 24.618C9.98949 24.7404 10.0181 24.8723 10.0199 25.006C10.0217 25.1396 9.99676 25.2723 9.94644 25.3961C9.89612 25.52 9.82149 25.6324 9.72695 25.7269C9.63242 25.8214 9.5199 25.896 9.39604 25.9463C9.27219 25.9965 9.13952 26.0214 9.00587 26.0196C8.87222 26.0177 8.74031 25.989 8.61793 25.9353C8.49555 25.8815 8.38518 25.8038 8.29335 25.7067L7.00002 24.4153L5.70669 25.7087C5.6144 25.8041 5.50402 25.8803 5.38199 25.9326C5.25996 25.985 5.12873 26.0125 4.99595 26.0136C4.86317 26.0147 4.7315 25.9893 4.60863 25.939C4.48576 25.8886 4.37414 25.8143 4.28029 25.7204C4.18644 25.6264 4.11224 25.5148 4.06202 25.3918C4.0118 25.2689 3.98656 25.1372 3.98777 25.0044C3.98899 24.8717 4.01664 24.7405 4.0691 24.6185C4.12157 24.4965 4.1978 24.3862 4.29335 24.294L5.58602 23L4.29269 21.7067C4.11062 21.518 4.00994 21.2653 4.01234 21.0031C4.01474 20.7409 4.12003 20.4902 4.30553 20.3048C4.49102 20.1195 4.74189 20.0145 5.00408 20.0123C5.26628 20.0102 5.51884 20.1111 5.70735 20.2933L7.00002 21.5853L8.29269 20.292C8.48022 20.1045 8.73452 19.9992 8.99969 19.9992C9.26485 19.9992 9.51916 20.1045 9.70669 20.292L9.70736 20.2933Z" fill="#F59C00"/>
              <path id="1711464248313-9214079_Subtract_3" fillRule="evenodd" clipRule="evenodd" d="M25.3334 26C25.5986 26 25.8529 25.8946 26.0405 25.7071C26.228 25.5196 26.3334 25.2652 26.3334 25C26.3334 24.7348 26.228 24.4804 26.0405 24.2929C25.8529 24.1054 25.5986 24 25.3334 24H20.6667C20.4015 24 20.1471 24.1054 19.9596 24.2929C19.772 24.4804 19.6667 24.7348 19.6667 25C19.6667 25.2652 19.772 25.5196 19.9596 25.7071C20.1471 25.8946 20.4015 26 20.6667 26H25.3334Z" fill="#F59C00"/>
              <path id="1711464248313-9214079_Subtract_4" d="M26.3334 21C26.3334 21.2652 26.228 21.5196 26.0405 21.7071C25.8529 21.8946 25.5986 22 25.3334 22H20.6667C20.4015 22 20.1471 21.8946 19.9596 21.7071C19.772 21.5196 19.6667 21.2652 19.6667 21C19.6667 20.7348 19.772 20.4804 19.9596 20.2929C20.1471 20.1054 20.4015 20 20.6667 20H25.3334C25.5986 20 25.8529 20.1054 26.0405 20.2929C26.228 20.4804 26.3334 20.7348 26.3334 21Z" fill="#F59C00"/>
              <path id="1711464248313-9214079_Subtract_5" fillRule="evenodd" clipRule="evenodd" d="M25.3334 8C25.5986 8 25.8529 7.89464 26.0405 7.70711C26.228 7.51957 26.3334 7.26522 26.3334 7C26.3334 6.73478 26.228 6.48043 26.0405 6.29289C25.8529 6.10536 25.5986 6 25.3334 6H20.6667C20.4015 6 20.1471 6.10536 19.9596 6.29289C19.772 6.48043 19.6667 6.73478 19.6667 7C19.6667 7.26522 19.772 7.51957 19.9596 7.70711C20.1471 7.89464 20.4015 8 20.6667 8H25.3334Z" fill="#F59C00"/>
            </g>
          </g>
        </svg>;
}