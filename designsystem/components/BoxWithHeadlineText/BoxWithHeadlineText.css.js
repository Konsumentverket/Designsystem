import { css } from "@emotion/core";
import { colors } from '../Colors/Colors';

export default css`
  background: ${colors.natural.isabelline};
  padding: 1em 0.5em;
  margin-top: 1rem;

  &.gray {
    background-color: ${colors.natural["gray-light"]};
  }
  &.blue {
    background-color: ${colors.profile["blue-mid"]};
    color: white;
  }
  &.white {
    background-color: ${colors.profile.white};
  }

  span.heading {
    text-transform: uppercase;
    font-size: 1rem;
    color: ${colors.natural.gray};

    .blue& {
      color: white;
    }
  }
`;
