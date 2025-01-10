/** @jsx jsx */
import {jsx} from '@emotion/core';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '@konsumentverket-sverige/designsystem.button';
import {Icon} from '@konsumentverket-sverige/designsystem.icon';
import {
  form,
  formTitle,
  formRow,
  childrenContainer,
  recaptchaContainer,
} from '../contact-forms.css.js';
import {
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import ErrorMessage from "../components/ErrorMessage";

export const Guidance = ({title, children, handleFormSubmit, texts, guidanceEmailLabel, guidanceMunicipalityLabel}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: 'onTouched'});

  const {executeRecaptcha} = useGoogleReCaptcha();
  const [recaptchaError, setRecaptchaError] = useState('');

  if (!texts) return null;

  const {
    // guidanceEmailLabel,
    guidanceEmailPlaceholder,
    guidanceEmailHelpText,
    // guidanceMunicipalityLabel,
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
      data-comp="contactForm-guidance"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>{guidanceMunicipalityLabel}</p>
      {title && (
        <h2 css={formTitle}>
          {title}
        </h2>
      )}

      <div css={[formRow]}>

        <FormInput
          id={"email"}
          label={guidanceEmailLabel}
          placeholder={guidanceEmailPlaceholder}
          tooltipText={guidanceEmailHelpText}
          error={errors && errors.email}
          maxLengthValidation={true}
          maxLengthCount={maxLengthInput}
          register={register}
          validation={{
            required: {
              value: true,
              message: "Det här fältet måste vara ifyllt.",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Ange en giltig e-postadress ',
            },
          }}
          watch={watch}
          autoComplete={"email"}
        />

        <FormInput
          id={"municipality"}
          label={guidanceMunicipalityLabel}
          placeholder={guidanceMunicipalityPlaceholder}
          tooltipPosition={"center"}
          tooltipText={guidanceMunicipalityHelpText}
          error={errors && errors.municipality}
          maxLengthValidation={true}
          maxLengthCount={maxLengthInput}
          register={register}
          validation={{
            required: {
              value: false,
            },
            maxLength: {
              value: maxLengthInput,
              message: `Texten får inte vara mer än ${maxLengthInput} tecken.`,
            }
          }}
          watch={watch}

        />

        <FormInput
          id={"company"}
          label={guidanceCompanyLabel}
          placeholder={guidanceCompanyPlaceholder}
          tooltipPosition={"right"}
          tooltipText={guidanceCompanyHelpText}
          error={errors && errors.company}
          register={register}
          validation={{
            required: {
              value: false,
            },
            maxLength: {
              value: 100,
              message: `Texten får inte vara mer än 100 tecken.`,
            }
          }}
          watch={watch}
        />

      </div>

      <FormInput
        id={"subject"}
        label={guidanceSubjectLabel}
        placeholder={guidanceSubjectPlaceholder}
        tooltipText={guidanceSubjectHelpText}
        error={errors && errors.subject}
        maxLengthValidation={true}
        maxLengthCount={maxLengthInput}
        register={register}
        validation={{
          required: {
            value: true,
            message: "Det här fältet måste vara ifyllt.",
          },
          maxLength: {
            value: maxLengthInput,
            message: `Ämnet får inte vara mer än ${maxLengthInput} tecken lång.`,
          }
        }}
        watch={watch}
      />

      <FormTextArea
        id={"question"}
        label={guidanceQuestionLabel}
        placeholder={guidanceQuestionPlaceholder}
        error={errors && errors.question}
        maxLengthValidation={true}
        maxLengthCount={maxLengthText}
        register={register}
        validation={{
          required: {
            value: true,
            message: "Det här fältet måste vara ifyllt.",
          },
          maxLength: {
            value: maxLengthText,
            message: `Texten får inte vara mer än ${maxLengthText} tecken lång.`,
          }
        }}
        watch={watch}
      />

      {recaptchaError !== '' && (
        <div css={[recaptchaContainer]}>
          <ErrorMessage id="recaptcha-error">
            {recaptchaError}
          </ErrorMessage>
        </div>
      )}

      <div css={[childrenContainer]}>{children}</div>
      <Button className="submitButton" text={guidanceSubmitButtonText} iconRight={<Icon icon="ChevronRight"/>}/>
    </form>
  );
};
