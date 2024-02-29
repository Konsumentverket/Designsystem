/** @jsx jsx */
import { jsx } from '@emotion/core';
import { expandButtonStyle, secondaryStyle, smallStyle, iconStyle, expandedIconStyle } from './expand-button.css.js';
import { Arrow } from '@konsumentverket-sverige/designsystem.utils';

export const ExpandButton = ({
  text,
  secondaryButtonStyle = false,
  small = false,
  expanded = false,
  className,
  id,
  disabled,
  style,
  onClick
}) => {

  var styles = [expandButtonStyle];

  secondaryButtonStyle && styles.push(secondaryStyle);
  small && styles.push(smallStyle)
  style && styles.push(style)

  return <button
    id={id}
    css={styles}
    className={className}
    disabled={disabled}
    aria-expanded={expanded ? "true" : "false"}
    onClick={onClick}
  >
    <span>{text}</span>
    <Arrow aria-hidden="true" style={[iconStyle, expanded && expandedIconStyle]} />
  </button>;
}

