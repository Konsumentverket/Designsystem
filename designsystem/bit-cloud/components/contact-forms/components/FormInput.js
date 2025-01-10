/** @jsx jsx */
import {jsx} from '@emotion/core';
import {
  characterCountInput,
  exceededMaxCount,
  inputError,
  inputWrapper,
  labelWrapper,
  inputStyle,
  labelStyle,
  formInputWrapper,
} from "../contact-forms.css";
import ToolTip from "./ToolTip";
import ErrorMessage from "./ErrorMessage";

const FormInput = ({
  id,
  label,
  placeholder,
  tooltipText,
  tooltipPosition='left',
  error,
  maxLengthValidation = false,
  maxLengthCount = 40,
  register,
  validation,
  watch
}) => {
  return (
    <div css={formInputWrapper}>

      <div css={labelWrapper}>

        <label htmlFor={id} css={labelStyle}>{label}</label>

        {!!tooltipText && (
          <ToolTip
            position={tooltipPosition}
            id={id}
            text={tooltipText}
          />
        )}

      </div>

      <span css={inputWrapper}>

        <input
          id={id}
          placeholder={placeholder}
          aria-describedby={`tooltip-${id} error-${id}`}
          aria-invalid={Boolean(error)}
          css={[
            inputStyle,
            error ? inputError : null
          ]}
          {...register(id, validation)}
        />

        {maxLengthValidation && (
          <span
            aria-hidden={true}
            css={[
                characterCountInput,
                watch(id, "").length > maxLengthCount ? exceededMaxCount : null
              ]}>{
              watch(id, "").length
            }/{maxLengthCount}
          </span>
        )}

      </span>

      {error && (
        <ErrorMessage id={`error-${id}`}>
          {error.message}
        </ErrorMessage>
      )}

    </div>
  )
}

export default FormInput;
