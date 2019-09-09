import { css } from "@emotion/core";
import { colors } from "../Colors/Colors";
import { spacing } from "../Spacing/Spacing";

export default css`
  display: inline-block;
  background: ${colors.natural.isabelline};
  padding: ${spacing["spacing-s"]};
  padding-top: 0;
  font-size: 18px;
  width: 30%;
  margin-right: ${spacing["spacing-s"]};
  margin-top: ${spacing["spacing-s"]};
  text-align: center;

  a {
    text-decoration: none;
    color: black;
    &:visited {
      color: black;
    }
  }

  &:hover, &:active {
    background: ${colors.natural["gray-light"]};
  }
  &:focus, &:active {
    outline: 2px solid black;
  }

.iconCard {
  padding-top: 0;
}
  .icon-container {
  text-align: center;
  padding: 0;
  svg {
    fill: ${ colors.natural.gray};
  }
}
`;
