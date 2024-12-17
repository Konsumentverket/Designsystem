/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';

import {Guidance} from "./types/guidance";

export const ContactForms = ({
  recaptchaSiteKey,
  title,
  children,
  handleFormSubmit = () => {},
  type = 'guidance',
}) => {
  const forms = {
    guidance: Guidance,
  }

  const SelectedForm = forms[type] || null;

  if(!SelectedForm) return null;

  const props = {
    title,
    children,
    handleFormSubmit
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      useEnterprise={true}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <SelectedForm {...props} />
    </GoogleReCaptchaProvider>
  )
};
