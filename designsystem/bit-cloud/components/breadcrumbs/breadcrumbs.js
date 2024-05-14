/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';

import React, { useContext } from "react";
import {
  breadcrumbStyle,
  breadcrumbTextStyle,
  breadcrumbLinkStyle
} from './Breadcrumbs.css.js';

import {
  Icon
} from '@konsumentverket-sverige/designsystem.icon';


export const Breadcrumbs = ({
 items
}) => {
  return (
      <nav aria-label="breadcrumb" css={breadcrumbStyle}>
          <p>
            {items.map((crumb, idx) => {
              return (
                <React.Fragment key={`bread${idx}`}>
                  {idx !== 0 && (
                    <Icon
                      aria-hidden="true"
                      icon="ArrowFat"
                      title={crumb.url}
                    />
                  )}

                  {idx == items.length - 1 ? (
                    <span
                      aria-current="page"
                      dir={crumb.isRtl ? "rtl" : null}
                      css={breadcrumbTextStyle}
                    >
                      {crumb.title}
                    </span>
                  ) : (
                    <a
                      href={crumb.url}
                      css={breadcrumbLinkStyle}
                      dir={crumb.isRtl ? "rtl" : null}
                    >
                      {crumb.title}
                    </a>
                  )}
                </React.Fragment>
              );
            })}
          </p>
        </nav>
  );
};



Breadcrumbs.propTypes = {
  items: PropTypes.array,
}

Breadcrumbs.defaultProps = {
  items: []
};
