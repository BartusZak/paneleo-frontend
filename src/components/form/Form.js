import React, { Component } from "react";

import { Form as FormInformed, Text } from "informed";
import PropTypes from "prop-types"; // ES6
import Button from "@material-ui/core/Button";

import FormInformedDiv from "./Form.style";
import ValidateInput from "./ValidateInput";

export default class Form extends Component {
  state = { formDetails: {} };

  getValuesFromForm = formDetails => {
    this.setState({ formDetails });
  };

  render() {
    const { formData } = this.props;
    const { formDetails } = this.state;

    let formFields = formData.formFields.map((field, index) => {
      let validation = formData.validation[index];

      let inputError = null;

      if (formDetails) {
        if (formDetails.errors) {
          Object.keys(formDetails.errors).map((key, index) => {
            inputError = key === field.id ? formDetails.errors[key] : null;
          });
        }
      }
      return (
        <fieldset key={index}>
          <Text
            type={validation.valide}
            field={field.id}
            id={`${field.label}-form`}
            required
            validateOnBlur
            value="test"
            validate={formDetails => ValidateInput(formDetails, validation)}
          />
          <label htmlFor={`${field.label}-form`}>{field.label}:</label>
          <div className="after" />
          <div className="input-error">
            <span>{inputError}</span>
          </div>
        </fieldset>
      );
    });

    return (
      <FormInformedDiv>
        <FormInformed
          autoComplete="off"
          onChange={form => this.getValuesFromForm(form)}
        >
          {formFields}
          <Button disabled={true} type="submit">
            {formData.buttonLabel}
          </Button>
        </FormInformed>
      </FormInformedDiv>
    );
  }
}

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
