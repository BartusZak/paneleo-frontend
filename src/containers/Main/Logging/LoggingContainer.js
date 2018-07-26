import React, { Component } from "react";
import Form from "components/form/Form";

import Paper from "@material-ui/core/Paper";

const formData = {
  formFields: [
    { id: "login", label: "Login", placeholder: "Podaj Login..." },
    { id: "haslo", label: "Hasło", placeholder: "Podaj Hasło..." }
  ],
  validation: [
    { minLength: 5, maxLength: 20, canBeNull: false, valide: "text" },
    { minLength: 8, maxLength: 20, canBeNull: false, valide: "password" }
  ],
  buttonLabel: "Zaloguj"
};

export default class LoggingContainer extends Component {
  state = {};

  render() {
    return (
      <Paper>
        <Form formData={formData} />
      </Paper>
    );
  }
}
