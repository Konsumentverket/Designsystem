/** @jsx jsx */
import {jsx} from '@emotion/core';

export const MonoDownload = ({className, style, title, ...otherAttr}) => {
  return (
  <svg className={className} css={style} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M13.917 10.336a1.31 1.31 0 0 0-1.347 1.151l-.152 1.238a.188.188 0 0 1-.186.165H5.775a.187.187 0 0 1-.186-.165l-.152-1.238a1.31 1.31 0 0 0-1.348-1.151c-.935.034-1.728.07-2.263.097a1.293 1.293 0 0 0-1.23 1.352c.05 1.05.178 3.08.477 4.268.202.803.914 1.187 1.59 1.236.92.067 2.767.148 6.34.148s5.422-.08 6.34-.148c.677-.048 1.388-.433 1.59-1.236.3-1.188.428-3.217.478-4.268a1.292 1.292 0 0 0-1.23-1.352 180.51 180.51 0 0 0-2.264-.097ZM9.003.563a9.91 9.91 0 0 0-.784.031c-.621.05-1.055.573-1.079 1.173l-.146 3.696c-.403.011-.746.026-1.036.041-.43.024-.762.245-.903.571-.14.328-.072.72.213 1.045.37.42.753.831 1.147 1.23.85.867 1.486 1.356 1.908 1.628a1.235 1.235 0 0 0 1.36 0c.421-.272 1.058-.76 1.908-1.627.394-.4.777-.81 1.148-1.232.284-.325.353-.716.212-1.044-.14-.326-.473-.547-.903-.57a39.78 39.78 0 0 0-1.037-.042l-.146-3.696c-.023-.6-.457-1.122-1.079-1.173a9.776 9.776 0 0 0-.783-.031Z"/>
  </svg>
  );
};
