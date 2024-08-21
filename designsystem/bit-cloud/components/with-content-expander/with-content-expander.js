/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography } from '@konsumentverket-sverige/designsystem.typography';
import { ArrowFat } from '@konsumentverket-sverige/designsystem.utils';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.editor-icon';

import {
  containerStyle,
  containerAlternativeStyle,
  containerLightBlueAlternativeStyle,
  noLeftBorderRadiusStyling,
  iconStyle,
  headerStyle,
  innerHeaderStyle,
  innerHeaderTextStyle,
  titleStyle,
  titleAlternativeStyle,
  titleLightBlueAlternativeStyle,
  preambleStyle,
  linkStyle,
  linkAlternativeStyle,
  linkLightBlueAlternativeStyle,
  linkStyleExpanded,
  linkStyleAlternativeExpanded,
  linkStyleLightBlueAlternativeExpanded,
  chevronStyle,
  chevronExpandedStyle,
  expandedAreaStyle,
  expandedAreaAlternativeStyle,
  expandedAreaLightBlueAlternativeStyle,
  expandedAreaExpandedStyle,
} from "./with-content-expander.css.js";

export const WithContentExpander = ({
  wrappedComponent,
  text,
  preamble,
  icon,
  wrapperId,
  show = true,
  scrollIntoView = false,
  open = false,
  linkHref = "",
  disabled = false,
  useAlternativeStyling = false,
  useLightBlueAlternativeStyling = false,
  useNoLeftBorderRadiusStyling = false,
}) => {
  const [expanded, setExpanded] = useState(open);
  const linkContainerRef = useRef();
  const linkRef = useRef();
  const topOfComponent = useRef();

  const handleExpansionOnClick = e => {
    e.stopPropagation();
    e.preventDefault();

    if (disabled)
      return false;

    setExpanded(!expanded);
    return false;
  };

  useEffect(() => {
    setExpanded(open);
  }, [open]);

  useEffect(() => {
    if (scrollIntoView && topOfComponent.current && expanded) {
      const DOMNode = ReactDOM.findDOMNode(topOfComponent.current);
      DOMNode.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded]);

  if (!show)
    return null;

  return (
    <div
      data-comp="with-content-expander"
      className={`withContentExpander ${expanded ? "expanded" : null}`}
      id={wrapperId}
      css={[
        containerStyle,
        useAlternativeStyling ? containerAlternativeStyle : null,
        useLightBlueAlternativeStyling ? containerLightBlueAlternativeStyle : null,
        useNoLeftBorderRadiusStyling ? noLeftBorderRadiusStyling : null,
      ]}
      ref={topOfComponent}
    >
      <div
        className="link-element noStyle"
        onClick={e => handleExpansionOnClick(e)}
      >
        <a
          href={linkHref}
          ref={linkRef}
          onClick={e => e.preventDefault()}
          aria-haspopup="true"
          aria-expanded={expanded ? "true" : "false"}
          aria-label={text}
          className="noStyle accordion"
          aria-controls={`${wrapperId}-content`}
          css={[
            linkStyle,
            expanded ? linkStyleExpanded : null,
            useAlternativeStyling && expanded && !noLeftBorderRadiusStyling ? linkStyleAlternativeExpanded : null,
            useAlternativeStyling ? linkAlternativeStyle : null,
            useLightBlueAlternativeStyling ? linkLightBlueAlternativeStyle : null,
            useLightBlueAlternativeStyling && expanded && !noLeftBorderRadiusStyling ? linkStyleLightBlueAlternativeExpanded : null,
            useLightBlueAlternativeStyling && expanded && noLeftBorderRadiusStyling ? linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius : null,
            useNoLeftBorderRadiusStyling ? noLeftBorderRadiusStyling : null,
          ]}
        >
          <div css={headerStyle} className="link-element-container" ref={linkContainerRef}>
            <div css={innerHeaderStyle}>
              {icon && (
                <EditorIcon icon={icon} css={iconStyle} />
              )}
              <div css={innerHeaderTextStyle}>
                <h3 className="noStyle" css={[
                  titleStyle,
                  useAlternativeStyling ? titleAlternativeStyle : null,
                  useLightBlueAlternativeStyling ? titleLightBlueAlternativeStyle : null
                ]}>
                  {text}
                </h3>
                {preamble && (<p css={preambleStyle}>{preamble}</p>)}
              </div>
            </div>
            {!disabled && (
              <ArrowFat
                aria-hidden="true"
                className="expand-icon"
                style={[chevronStyle, expanded ? chevronExpandedStyle : null]}
              />
            )}
          </div>
        </a>
      </div>
      <div
        id={`${wrapperId}-content`}
        css={[
          expandedAreaStyle,
          expanded ? expandedAreaExpandedStyle : null,
          expanded && useAlternativeStyling ? expandedAreaAlternativeStyle : null,
          expanded && useLightBlueAlternativeStyling ? expandedAreaLightBlueAlternativeStyle : null,
          useNoLeftBorderRadiusStyling ? noLeftBorderRadiusStyling : null,
        ]}
        className={`expand-section ${expanded ? "expanded" : null} ${disabled ? "expanded" : ''}`}
      >
        <Typography>
          {wrappedComponent}
        </Typography>
      </div>
    </div>
  );
};

WithContentExpander.propTypes = {
  text: PropTypes.string,
  preamble: PropTypes.string,
  icon: PropTypes.string,
  wrapperId: PropTypes.string,
  linkHref: PropTypes.string,
  show: PropTypes.bool,
  scrollIntoView: PropTypes.bool,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  wrappedComponent: PropTypes.any,
  useAlternativeStyling: PropTypes.any,
}

WithContentExpander.defaultProps = {
  show: true,
  scrollIntoView: false,
  open: false,
  linkHref: "",
  disabled: false,
  useAlternativeStyling: false,
}
