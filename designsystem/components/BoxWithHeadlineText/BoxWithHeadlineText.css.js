import { css } from "@emotion/core";
import { colors } from '../Colors/Colors';

export default css`
  background: ${colors.common.isabelline};
  padding: 1em 0.5em;
  margin-top: 1rem;

  &.blue {
    background-color: ${colors.theme1.mid};
    color: white;
  }
  &.white {
    background-color: ${colors.common.white};
  }
  &.column {
    width: 50%;
  }
  &.full {
    width: 100%;
  }

  span.heading {
    text-transform: uppercase;
    font-size: 1rem;
    color: ${colors.common.gray};

    .blue& {
      color: white;
    }
  }
`;
