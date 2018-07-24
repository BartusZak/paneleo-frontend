import React from "react";

import { Form as FormInformed, Text } from "informed";
import PropTypes from "prop-types"; // ES6

import FormInformedDiv from "./Form.style";

import Button from "@material-ui/core/Button";

import ValidateInput from "./ValidateInput";
const Form = ({ formData, getValuesFromForm, formState }) => {
  let formFields = formData.formFields.map((field, index) => {
    let validation = formData.validation[index];
    return (
      <fieldset key={index}>
        <Text
          type={validation.valide}
          field={field.id}
          id={`${field.label}-form`}
          required
          validateOnBlur
          validateOnChange
          validate={value => ValidateInput(value, validation)}
        />
        <label htmlFor={`${field.label}-form`}>{field.label}:</label>
        <div className="after" />
        <div className="input-error">
          <span>Error</span>
        </div>
      </fieldset>
    );
  });

  return (
    <FormInformedDiv>
      <FormInformed
        autoComplete="off"
        onChange={form => getValuesFromForm(form)}
      >
        {formFields}
        <Button disabled={formState.isSubmitted} type="submit">
          {formData.buttonLabel}
        </Button>
      </FormInformed>
    </FormInformedDiv>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    formFields: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired
      })
    ).isRequired,
    validation: PropTypes.arrayOf(
      PropTypes.shape({
        minLength: PropTypes.number,
        maxLength: PropTypes.number.isRequired,
        canBeNull: PropTypes.bool.isRequired,
        valide: PropTypes.string.isRequired
      })
    ).isRequired,
    buttonLabel: PropTypes.string.isRequired
  })
};
export default Form;
