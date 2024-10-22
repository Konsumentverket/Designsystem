/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography } from '@konsumentverket-sverige/designsystem.typography';
import { MonoArrowDown, MonoArrowDownSmall } from '@konsumentverket-sverige/designsystem.utils';
import { EditorIcon } from '@konsumentverket-sverige/designsystem.editor-icon';

import {
  containerStyle,
  containerAlternativeStyle,
  containerLightBlueAlternativeStyle,
  noLeftBorderRadiusStyling,
  iconStyle,
  headerStyle,
  headerProcessStepStyle,
  headerExpanderExplainerStyle,
  innerHeaderStyle,
  innerHeaderTextStyle,
  titleStyle,
  titleAlternativeStyle,
  titleLightBlueAlternativeStyle,
  titleProcessStepStyle,
  preambleStyle,
  linkStyle,
  linkAlternativeStyle,
  linkLightBlueAlternativeStyle,
  linkStyleExpanded,
  linkStyleAlternativeExpanded,
  linkStyleLightBlueAlternativeExpanded,
  linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
  linkStyleExpanderExplainerExpanded,
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
  useExpanderExplainerStyling = false,
  contentfulId = null,
  contentfulName = '',
  contentfulTextName = '',
  level = 3,
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

  const HeadingLevel = `h${level}`;

  const containerStyles = [
    containerStyle,
    useAlternativeStyling && containerAlternativeStyle,
    useLightBlueAlternativeStyling && containerLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
  ];

  const linkStyles = [
    linkStyle,
    expanded && linkStyleExpanded,
    (useAlternativeStyling && expanded && !useProcessStepStyling) &&
      linkStyleAlternativeExpanded,
    useAlternativeStyling && linkAlternativeStyle,
    useLightBlueAlternativeStyling && linkLightBlueAlternativeStyle,
    (useLightBlueAlternativeStyling && expanded && !noLeftBorderRadiusStyling) &&
      linkStyleLightBlueAlternativeExpanded,
    (useLightBlueAlternativeStyling && expanded && noLeftBorderRadiusStyling) &&
      linkStyleLightBlueAlternativeExpandedWithNoBorderLeftRadius,
    useProcessStepStyling && noLeftBorderRadiusStyling,
    useExpanderExplainerStyling && linkStyleExpanderExplainerExpanded,
  ];

  const headerStyles = [
    headerStyle,
    useProcessStepStyling && headerProcessStepStyle,
    useExpanderExplainerStyling && headerExpanderExplainerStyle,
  ];

  const titleStyles = [
    titleStyle,
    useAlternativeStyling && titleAlternativeStyle,
    useLightBlueAlternativeStyling && titleLightBlueAlternativeStyle,
    useProcessStepStyling && titleProcessStepStyle,
  ];

  const chevronStyles =[
    chevronStyle,
    expanded && chevronExpandedStyle
  ];

  const expandedAreaStyles = [
    expandedAreaStyle,
    expanded && expandedAreaExpandedStyle,
    (expanded && useAlternativeStyling) &&
      expandedAreaAlternativeStyle,
    (expanded && useLightBlueAlternativeStyling) &&
      expandedAreaLightBlueAlternativeStyle,
    useProcessStepStyling && noLeftBorderRadiusStyling,
  ];

  return (
    <div
      data-comp="with-content-expander"
      data-contentful-field-id={contentfulName}
      data-contentful-entry-id={contentfulId}
      className={`withContentExpander ${expanded ? "expanded" : ""}`}
      id={wrapperId}
      css={containerStyles}
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
          css={linkStyles}
        >
          <div
            css={headerStyles}
            className="link-element-container"
            ref={linkContainerRef}
          >
            <div css={innerHeaderStyle}>
              {icon && <EditorIcon icon={icon} css={iconStyle} />}
              <div css={innerHeaderTextStyle}>
                <HeadingLevel
                  className="noStyle"
                  css={titleStyles}
                >
                  {text}
                </HeadingLevel>
                {preamble && <p css={preambleStyle} data-contentful-field-id={contentfulTextName} data-contentful-entry-id={contentfulId}>{preamble}</p>}
              </div>
            </div>
            {(!disabled && !useExpanderExplainerStyling) && (
              <MonoArrowDown
                aria-hidden="true"
                className="expand-icon"
                style={chevronStyles}
              />
            )}
            {(!disabled && useExpanderExplainerStyling) && (
              <MonoArrowDownSmall
                aria-hidden="true"
                className="expand-icon"
                style={chevronStyles}
              />
            )}
          </div>
        </a>
      </div>
      <div
        id={`${wrapperId}-content`}
        css={expandedAreaStyles}
        className={`expand-section ${expanded ? "expanded" : ""} ${disabled ? "expanded" : ""}`}
      >
        <Typography
          useProcessStepStyling={useProcessStepStyling}
          small={useExpanderExplainerStyling}
        >
          {wrappedComponent}
        </Typography>
      </div>
    </div>
  );
};
