/** @jsx jsx */
import { jsx } from '@emotion/core';
import { medium, defaultHeadingColor } from "../../Shared/Variables";

export default css`
      font-size: 4.8rem;
      line-height:4.8rem;
      color: ${defaultHeadingColor};
      font-weight:700;
      margin: 0 0 1.6rem 0;
      ${medium}{
          margin-bottom:1.2rem;
          font-size:4.8rem;
          line-height:6rem;
      }
`;
