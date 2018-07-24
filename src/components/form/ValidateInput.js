import RegexPatterns from "constants/RegexPatterns";

export const ValidateInput = (value, validation) => {
  console.log(value, validation);
  if (!validation.canBeNull && value.length === 0) {
    return "To pole nie może być puste.";
  }

  if (
    validation.minLength &&
    value.replace(/ /g, "").length < validation.minLength
  ) {
    return "To pole ma za mało znaków.";
  }

  if (
    validation.maxLength &&
    value.replace(/ /g, "").length > validation.maxLength
  ) {
    return "To pole ma za dużo znaków.";
  }

  if (value && !validation.canBeNull) {
    if (!RegexPatterns[validation.valide].test(value)) {
      if (validation.valide !== "password") {
        return "Nieprawidłowy format pola.";
      }
    }
  }
};

export default ValidateInput;
