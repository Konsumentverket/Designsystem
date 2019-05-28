import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";

export default css`
  display: inline-block;
  background: ${colors.natural.isabelline};
  padding: 0.5rem;
  font-size: 18px;
  width: 30%;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;

  &:hover, &:active {
    background: ${colors.natural["gray-light"]};
  }
  &:focus, &:active {
    outline: 2px solid black;
  }

  .icon-container {
    text-align: center;
  }
`;
