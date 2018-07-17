import React from "react";

import { Form as FormInformed, Text, BasicText, asField } from "informed";
import PropTypes from "prop-types"; // ES6

import FormInformedDiv from "./Form.style";

import Button from "@material-ui/core/Button";

const Form = ({ formData, getValuesFromForm, formState }) => {
  Form.propTypes = {
    formData: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      placeholder: PropTypes.string
    }).isRequired,
    buttonLabel: PropTypes.string.isRequired
  };

  let formFields = formData.formFields.map((field, index) => {
    return (
      <fieldset key={index}>
        <Text field={field.id} id={`${field.label}-form`} required />
        <label htmlFor={`${field.label}-form`}>{field.label}:</label>
        <div className="after" />
      </fieldset>
    );
  });

  const validate = value => {
    return !value || value.length < 5
      ? "Field must be longer than five characters"
      : null;
  };

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
export default Form;
