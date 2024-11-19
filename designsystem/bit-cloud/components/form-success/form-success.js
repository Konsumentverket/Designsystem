/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { wrapper, dataListTitle, dataList } from './form-success.css.js';
import { NoticeBox } from '@konsumentverket-sverige/designsystem.notice-box';
import { Heading } from '@konsumentverket-sverige/designsystem.heading';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';

export const FormSuccess = ({
  formData,
  children,
  headline,
  contentfulId,
  contentfulName,
  buttonClick = () => {},
}) => {
  return (
    <div
      css={[wrapper]}
      data-comp="form-success"
      data-contentful-field-id={contentfulName ?? 'formSuccess'}
      data-contentful-entry-id={contentfulId}
      id="form-success"
    >
      <NoticeBox headline={headline}>{children}</NoticeBox>
      <div css={dataListTitle}>
        <Heading text="Inskickade uppgifter:" level={3} />
      </div>
      {formData && (
        <dl css={dataList}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <dt>{key}:&nbsp;</dt>
              <dd>{formData[key]}</dd>
            </div>
          ))}
        </dl>
      )}
      <Button
        onClick={buttonClick}
        text="Ladda ner bekräftelse"
        iconRight={
          <Icon icon="MonoDownload" />
        }
      />
    </div>
  );
};
