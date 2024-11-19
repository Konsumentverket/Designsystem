/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Heading } from '@konsumentverket-sverige/designsystem.heading';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import {
  form,
  formRow,
  inputError,
  errorMessage,
  childrenContainer,
  recaptchaContainer,
} from './form-data-request.css.js';
import ReCAPTCHA from 'react-google-recaptcha';

export const FormDataRequest = ({
  title,
  children,
  recaptchaSiteKey,
  handleFormSubmit = () => {},
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');

  const onSubmit = (data) => {
    if (recaptchaSiteKey && !recaptchaToken) {
      setRecaptchaError('Var vänlig bekräfta att du inte är en robot');
      return;
    } else {
      handleFormSubmit(data);
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError('');
  };

  return (
    <form
      css={[form]}
      data-comp="form-data-request"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading text={title} level={2} />
      <div css={[formRow]}>
        <div>
          <label htmlFor="firstName">Förnamn*</label>
          <input
            id="firstName"
            placeholder="Ange ditt förnamn"
            css={errors.firstName ? inputError : null}
            {...register('firstName', { required: true })}
          />
          {errors.firstName && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              Ange ditt förnamn
            </span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Efternamn*</label>
          <input
            id="lastName"
            placeholder="Ange ditt efternamn"
            css={errors.lastName ? inputError : null}
            {...register('lastName', { required: true })}
          />
          {errors.lastName && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              Ange ditt efternamn
            </span>
          )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <label htmlFor="ssn">Personnummer 10-siffror*</label>
          <input
            id="ssn"
            placeholder="ÅÅMMDD-XXXX"
            css={errors.ssn ? inputError : null}
            {...register('ssn', {
              required: 'Ange ditt personnummer',
              pattern: {
                value: /^\d{2}\d{2}\d{2}-\d{4}$/,
                message: 'Ange ditt personnummer med 10 siffror (ÅÅMMDD-XXXX)',
              },
            })}
          />
          {errors.ssn && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              {errors.ssn.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email">E-postadress*</label>
          <input
            id="email"
            type="email"
            placeholder="Ange din e-postadress"
            css={errors.email ? inputError : null}
            {...register('email', {
              required: 'Ange din e-postadress',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Ange en giltig e-postadress ',
              },
            })}
          />
          {errors.email && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      {recaptchaSiteKey && (
        <div css={[recaptchaContainer]}>
          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            onChange={handleRecaptchaChange}
          />
          {recaptchaError !== '' && (
            <span css={[errorMessage]}>
              <Icon icon="Warn" />
              {recaptchaError}
            </span>
          )}
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>
      <Button text="Skicka begäran"
        iconRight={
          <Icon icon="ChevronRight" />
        }
      />
    </form>
  );
};
