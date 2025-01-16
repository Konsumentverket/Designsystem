/** @jsx jsx */
import {jsx} from '@emotion/core';
import {
  exceededMaxCount,
  inputError,
  inputWrapper,
  labelWrapper,
  textAreaStyle,
  labelStyle,
  formInputWrapper,
  characterCountTextArea,
} from "../contact-forms.css";
import ToolTip from "./ToolTip";
import ErrorMessage from "./ErrorMessage";

const FormTextArea = ({
  id,
  label,
  placeholder,
  tooltipText,
  tooltipPosition='left',
  error,
  maxLengthValidation = false,
  showCounter = false,
  maxLengthCount = 2000,
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
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          aria-describedby={`error-${id}`}
          aria-invalid={Boolean(error)}
          css={[
            textAreaStyle,
            error ? inputError : null
          ]}
          {...register(id, validation)}
        />

        {maxLengthValidation && showCounter && (
          <span
            aria-hidden={true}
            css={[
              characterCountTextArea,
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

export default FormTextArea;
