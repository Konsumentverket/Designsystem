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
  characterCountInput,
  characterCountTextArea,
  exceededMaxCount,
  inputWrapper,
  labelWrapper,
  informationButton,
  informationButtonWrapper,
  tooltip,
} from '../contact-forms.css.js';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

export const Guidance = ({ title, children, handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  const onSubmit = async (data) => {
    if (!executeRecaptcha) {
      setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
      return;
    }

    try {
      const token = await executeRecaptcha('personuppgifter');
      if (!token) {
        setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
        return;
      }

      const formData = {
        ...data,
        recaptchaToken: token,
      };

      handleFormSubmit(formData);
    } catch (error) {
      setRecaptchaError('Något gick fel med reCAPTCHA. Försök igen.');
    }
  };

  const maxLengthSubject = 40;
  const maxLengthText = 2000;


  return (
    <form
      css={[form]}
      data-comp="guidance"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading text={title} level={2} />
      <div css={[formRow]}>
        <div>
          <label htmlFor="email">E-post (obligatoriskt)*</label>
          <input
            id="email"
            type="email"
            placeholder="Skriv din e-postadress"
            css={errors.email ? inputError : null}
            {...register('email', {
              required: 'Skriv din e-postadress',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Ange en giltig e-postadress ',
              },
            })}
          />
          {errors.email && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="municipality">Kommun (frivilligt)</label>
          <input
            id="municipality"
            placeholder="Skriv din kommun"
            css={errors.municipality ? inputError : null}
            {...register('municipality', {required: false})}
          />
          {errors.municipality && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              Ange ditt förnamn
            </span>
          )}
        </div>
        <div>
          <label htmlFor="company">Företag (frivilligt)</label>
          <input
            id="company"
            placeholder="Skriv vilket företag det berör"
            css={errors.company ? inputError : null}
            {...register('company', {required: false})}
          />
          {errors.company && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              Skriv vilket företag det berör
            </span>
          )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <div css={labelWrapper}>
            <label htmlFor="subject">Ämne (obligatoriskt)*</label>
            {/*<div css={informationButtonWrapper}>*/}
            {/*  <button css={informationButton}>*/}
            {/*    <Icon icon={'Information'}/>*/}
            {/*  </button>*/}
            {/*  <div css={tooltip} role="tooltip" className="tooltip">*/}
            {/*    <p>Diarienummer hittar du i bekräftelsemejlet du fick när du gjorde anmälan</p>*/}
            {/*    <button>*/}
            {/*      <Icon icon={'MonoDeleteSmall'}/>*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <span css={inputWrapper}>
            <input
              id="subject"
              placeholder="Skriv ämnet för ditt ärende"
              css={errors.subject ? inputError : null}
              {...register('subject', {
                required: true,
                maxLength: {
                  value: maxLengthSubject,
                  message: `Ämnestiteln får inte vara mer än ${maxLengthSubject} tecken lång.`,
                },
              })}
            />

            <span css={[
              characterCountInput,
              watch("subject", "").length > maxLengthSubject ? exceededMaxCount : null
            ]}>{
              watch("subject", "").length
            }/40
            </span>
          </span>
          {errors.subject && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              {errors.subject.message}
            </span>
          )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <label htmlFor="text">Din fråga (obligatoriskt)*</label>
          <span css={inputWrapper}>
            <textarea
              id="text"
              rows={5}
              placeholder="Skriv din fråga"
              css={errors.text ? inputError : null}
              {...register('text', {
                required: true,
                maxLength: {
                  value: maxLengthText,
                  message: `Texten får inte vara mer än ${maxLengthText} tecken lång.`,
                },
              })}
            />
            <span css={[
              characterCountTextArea,
              watch("text", "").length > maxLengthText ? exceededMaxCount : null
            ]}>{
              watch("text", "").length
            }/2000
            </span>
          </span>
          {errors.text && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
                {errors.text.message}
            </span>
            )}
        </div>

      </div>

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <span css={[errorMessage]}>
            <Icon icon="Warn"/>
            {recaptchaError}
          </span>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>
      <Button text="Skicka begäran" iconRight={<Icon icon="ChevronRight"/>}/>
    </form>
  );
};
