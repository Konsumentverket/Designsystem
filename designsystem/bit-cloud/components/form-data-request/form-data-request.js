/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { WithContentExpander } from '@konsumentverket-sverige/designsystem.with-content-expander';
import { Button } from '@konsumentverket-sverige/designsystem.button';
import { Heading } from '@konsumentverket-sverige/designsystem.heading';
import { Icon } from '@konsumentverket-sverige/designsystem.icon';
import { form, formRow, inputError, accordionContainer } from './form-data-request.css.js';

export const FormDataRequest = ({
  title,
  accordionTitle,
  accordionContent,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
            <span>
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
            <span>
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
                message: 'Ange ett korrekt personnummer',
              },
            })}
          />
          {errors.ssn && (
            <span>
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
                message: 'Ange en korrekt e-postadress',
              },
            })}
          />
          {errors.email && (
            <span>
              <Icon icon="Warn" />
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div css={[accordionContainer]}>
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text={accordionTitle}
          wrappedComponent={
            <>
              <div dangerouslySetInnerHTML={{ __html: accordionContent }} />
            </>
          }
        />
      </div>
      <Button text="Skicka begäran" />
    </form>
  );
};
