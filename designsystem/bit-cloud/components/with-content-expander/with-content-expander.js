/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography } from '@konsumentverket-sverige/designsystem.typography';
import { MonoArrowDown } from '@konsumentverket-sverige/designsystem.utils';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.editor-icon';

import {
  containerStyle,
  containerAlternativeStyle,
  containerLightBlueAlternativeStyle,
  noLeftBorderRadiusStyling,
  iconStyle,
  headerStyle,
  headerProcessStepStyle,
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
  linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
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
  useProcessStepStyling = false,
}) => {
  const [expanded, setExpanded] = useState(open);
  const linkContainerRef = useRef();
  const linkRef = useRef();
  const topOfComponent = useRef();

  const handleExpansionOnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (disabled) return false;

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

  if (!show) return null;

  return (
    <div
      data-comp="with-content-expander"
      className={`withContentExpander ${expanded ? "expanded" : ""}`}
      id={wrapperId}
      css={[
        containerStyle,
        useAlternativeStyling ? containerAlternativeStyle : null,
        useLightBlueAlternativeStyling ? containerLightBlueAlternativeStyle : null,
        useProcessStepStyling ? noLeftBorderRadiusStyling : null,
      ]}
      ref={topOfComponent}
    >
      <div className="link-element noStyle" onClick={(e) => handleExpansionOnClick(e)}>
        <a
          href={linkHref}
          ref={linkRef}
          onClick={(e) => e.preventDefault()}
          aria-haspopup="true"
          aria-expanded={expanded ? "true" : "false"}
          aria-label={text}
          className="noStyle accordion"
          aria-controls={`${wrapperId}-content`}
          css={[
            linkStyle,
            expanded ? linkStyleExpanded : null,
            useAlternativeStyling && expanded && !useProcessStepStyling
              ? linkStyleAlternativeExpanded
              : null,
            useAlternativeStyling ? linkAlternativeStyle : null,
            useLightBlueAlternativeStyling ? linkLightBlueAlternativeStyle : null,
            useLightBlueAlternativeStyling && expanded && !noLeftBorderRadiusStyling
              ? linkStyleLightBlueAlternativeExpanded
              : null,
            useLightBlueAlternativeStyling && expanded && noLeftBorderRadiusStyling
              ? linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius
              : null,
            useProcessStepStyling ? noLeftBorderRadiusStyling : null,
          ]}
        >
          <div
            css={[headerStyle, useProcessStepStyling ? headerProcessStepStyle : null]}
            className="link-element-container"
            ref={linkContainerRef}
          >
            <div css={innerHeaderStyle}>
              {icon && <EditorIcon icon={icon} css={iconStyle} />}
              <div css={innerHeaderTextStyle}>
                <h3
                  className="noStyle"
                  css={[
                    titleStyle,
                    useAlternativeStyling ? titleAlternativeStyle : null,
                    useLightBlueAlternativeStyling ? titleLightBlueAlternativeStyle : null,
                  ]}
                >
                  {text}
                </h3>
                {preamble && <p css={preambleStyle}>{preamble}</p>}
              </div>
            </div>
            {!disabled && (
              <MonoArrowDown
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
          expanded && useLightBlueAlternativeStyling
            ? expandedAreaLightBlueAlternativeStyle
            : null,
          useProcessStepStyling ? noLeftBorderRadiusStyling : null,
        ]}
        className={`expand-section ${expanded ? "expanded" : ""} ${disabled ? "expanded" : ""}`}
      >
        <Typography>{wrappedComponent}</Typography>
      </div>
    </div>
  );
};
