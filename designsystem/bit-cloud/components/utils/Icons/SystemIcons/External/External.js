/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export const External = ({ className, style, title, ...otherAttr }) => {
    return <svg className={className} css={style} width="18" height="19" fill="none" viewBox="0 0 18 19" {...otherAttr}>
        <title>{title}</title>
        <g clipPath="url(#a)"><path d="M17.532 5.902c-.077.962-.998 1.316-1.71.664-.3-.273-.595-.55-.886-.832a1191.11 1191.11 0 0 1-5.136 5.04c-.372.362-.92.513-1.34.208a3.704 3.704 0 0 1-.803-.806c-.3-.416-.154-.958.202-1.329.922-.96 2.859-2.965 5.036-5.155-.319-.33-.588-.619-.816-.868-.652-.713-.298-1.634.664-1.711.46-.036.919-.063 1.379-.08 1.223-.046 2.022.034 2.513.124a1.04 1.04 0 0 1 .853.853c.09.49.17 1.29.124 2.513-.017.46-.044.92-.08 1.38Z"/><path d="M8.063 3.082c-2.306 0-3.963.082-5.053.165A2.454 2.454 0 0 0 .727 5.529C.644 6.62.563 8.277.563 10.582c0 2.305.081 3.963.165 5.053a2.454 2.454 0 0 0 2.282 2.282c1.09.083 2.747.165 5.053.165 2.305 0 3.963-.082 5.052-.165a2.454 2.454 0 0 0 2.283-2.282c.083-1.09.165-2.747.165-5.053 0-.655-.007-1.258-.018-1.81a.562.562 0 0 0-.956-.391c-.547.534-1.039 1.012-1.48 1.44a.564.564 0 0 0-.172.407v.354c0 1.554-.047 2.722-.101 3.543a1.294 1.294 0 0 1-1.23 1.23c-.822.054-1.989.102-3.543.102-1.555 0-2.722-.048-3.544-.102a1.294 1.294 0 0 1-1.23-1.23 54.458 54.458 0 0 1-.101-3.543c0-1.554.048-2.722.102-3.543a1.294 1.294 0 0 1 1.23-1.23 54.46 54.46 0 0 1 3.543-.102h.263a.563.563 0 0 0 .407-.172c.426-.442.904-.934 1.439-1.481a.563.563 0 0 0-.391-.956 88.825 88.825 0 0 0-1.718-.016Z"/></g><defs><clipPath><path fill="#fff" d="M0 .645h18v18H0z"/></clipPath></defs>
    </svg>;
}
