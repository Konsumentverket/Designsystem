/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import {
  form,
  formTitle,
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
  showTooltip,
  leftPosition,
  centerPosition,
  rightPosition,
  informationButtonOpen,
  tooltipText,
} from '../contact-forms.css.js';
import {
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import {useOnClickOutside} from '@konsumentverket-sverige/designsystem.utils';

export const Guidance = ({ title, children, handleFormSubmit, texts }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  if(!texts) return null;

  const {
    guidanceEmailLabel,
    guidanceEmailPlaceholder,
    guidanceEmailHelpText,
    guidanceMunicipalityLabel,
    guidanceMunicipalityPlaceholder,
    guidanceMunicipalityHelpText,
    guidanceCompanyLabel,
    guidanceCompanyPlaceholder,
    guidanceCompanyHelpText,
    guidanceSubjectLabel,
    guidanceSubjectPlaceholder,
    guidanceSubjectHelpText,
    guidanceQuestionLabel,
    guidanceQuestionPlaceholder,
    guidanceSubmitButtonText
  } = texts;

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

  const maxLengthInput = 40;
  const maxLengthText = 2000;

  return (
    <form
      css={[form]}
      data-comp="guidance"
      onSubmit={handleSubmit(onSubmit)}
    >
      {title && (
        <h2 css={formTitle}>
          {title}
        </h2>
      )}

      <div css={[formRow]}>
        <div>
          <label htmlFor="email">{guidanceEmailLabel}</label>
          <input
            id="email"
            type="email"
            placeholder={guidanceEmailPlaceholder}
            css={errors.email ? inputError : null}
            {...register('email', {
              required: {guidanceEmailPlaceholder},
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
          <div css={labelWrapper}>
          <label htmlFor="municipality">{guidanceMunicipalityLabel}</label>
            <ToolTip
              position="center"
              id="municipality"
              text={guidanceMunicipalityHelpText}
            />
          </div>
          <span css={inputWrapper}>
            <input
              id="municipality"
              placeholder={guidanceMunicipalityPlaceholder}
              aria-describedby="tooltip-municipality"
              css={errors.municipality ? inputError : null}
              {...register('municipality', {
                required: false,
                maxLength: {
                  value: maxLengthInput,
                  message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
                },
              })}
            />
            <span
              aria-hidden={true}
              css={[
              characterCountInput,
              watch("municipality", "").length > maxLengthInput ? exceededMaxCount : null
            ]}>{
              watch("municipality", "").length
            }/40
            </span>
          </span>

          {errors.municipality && (
            <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              Texten får inte vara mer än {maxLengthInput} tecken.
            </span>
          )}
        </div>
        <div>
          <div css={labelWrapper}>
            <label htmlFor="company">{guidanceCompanyLabel}</label>
            <ToolTip
              position={"right"}
              id={"company"}
              text={guidanceCompanyHelpText}
            />
          </div>
          <span css={inputWrapper}>
            <input
              id="company"
              placeholder={guidanceCompanyPlaceholder}
              aria-describedby="tooltip-company"
              css={errors.company ? inputError : null}
              {...register('company', {
                required: false,
                maxLength: {
                  value: maxLengthInput,
                  message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
                },
              })}
            />
            <span
              aria-hidden={true}
              css={[
              characterCountInput,
              watch("company", "").length > maxLengthInput ? exceededMaxCount : null
            ]}>{
              watch("company", "").length
            }/40
            </span>
          </span>
            {errors.company && (
              <span css={[errorMessage]}>
              <Icon icon="Warn"/>
              Texten får inte vara mer än {maxLengthInput} tecken.
            </span>
            )}
        </div>
      </div>

      <div css={[formRow]}>
        <div>
          <div css={labelWrapper}>
            <label htmlFor="subject">{guidanceSubjectLabel}</label>
            <ToolTip
              position={"left"}
              id="subject"
              text={guidanceSubjectHelpText}
            />
          </div>
          <span css={inputWrapper}>
            <input
              id="subject"
              placeholder={guidanceSubjectPlaceholder}
              aria-describedby="tooltip-subject"
              css={
                errors.subject ? inputError : null
              }
              {...register('subject', {
                required: {guidanceSubjectPlaceholder},
                maxLength: {
                  value: maxLengthInput,
                  message: `Ämnet får inte vara mer än ${maxLengthInput} tecken lång.`,
                },
              })}
            />

            <span
              aria-hidden={true}
              css={[
              characterCountInput,
              watch("subject", "").length > maxLengthInput ? exceededMaxCount : null
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
          <label htmlFor="text">{guidanceQuestionLabel}</label>
          <span css={inputWrapper}>
            <textarea
              id="text"
              rows={5}
              placeholder={guidanceQuestionPlaceholder}
              css={errors.text ? inputError : null}
              {...register('text', {
                required: {guidanceQuestionPlaceholder},
                maxLength: {
                  value: maxLengthText,
                  message: `Texten får inte vara mer än ${maxLengthText} tecken lång.`,
                },
              })}
            />
            <span
              aria-hidden={true}
              css={[
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
      <Button className="submitButton" text={guidanceSubmitButtonText} iconRight={<Icon icon="ChevronRight"/>}/>
    </form>
  );
};

const ToolTip = ({position = 'left', id = '', text=''}) => {
  const [isOpen , setIsOpen] = useState(false);

  const tooltipRef = useRef();

  useOnClickOutside(tooltipRef, () => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!text) return null;

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const positions = {
    left: leftPosition,
    center: centerPosition,
    right: rightPosition,
  }

  const handleBlur = (e) => {
    // Close tooltip when focusing outside of it
    if (!tooltipRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div css={informationButtonWrapper} className="tooltip">
        <button
          type="button"
          css={[informationButton, isOpen ? informationButtonOpen : null]}
          onClick={onClick}
          aria-controls={`tooltip-${id}`}
          aria-expanded={isOpen}
        >
          <Icon icon={'Information'}/>
        </button>
        <div
          css={[
            tooltip,
            positions[position],
            isOpen ? showTooltip : null
          ]}
          role="tooltip"
          className="tooltip"
          ref={tooltipRef}
          onBlur={handleBlur}
          id={`tooltip-${id}`}
        >
          <p css={tooltipText}>{text}</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-controls={`tooltip-${id}`}
            aria-label={`Stäng tooltip-${id}`}
          >
            <Icon icon={'MonoDeleteSmall'}/>
          </button>
        </div>
    </div>
  )
}
