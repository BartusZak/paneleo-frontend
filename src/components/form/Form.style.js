import styled from "styled-components";

const FormInformedDiv = styled.div`
  form {
    width: 300px;
    margin: 20px auto;
  }

  fieldset {
    position: relative;
    border: none;
  }

  label {
    font-family: "Roboto Condensed", sans-serif;
    display: block;
    position: absolute;
    top: 18px;
    color: rgba(0, 0, 0, 0.3);
    transform-origin: left;
    transition: all 0.3s ease;
    font-size: 12px;
  }

  .input-error {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 16px;
    margin-top: 5px;
    span {
      padding-left: 10px;
      font-family: "Roboto Condensed", sans-serif;
      color: #e50000;
      font-size: 12px;
      position: absolute;
    }
  }

  input:focus ~ label {
    color: black;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: 0;
    transform: scale(0.6, 0.6);
  }

  input {
    font-family: "Eczar", serif;
    font-size: 16px;
    width: 100%;
    border: none;
    margin-top: 10px;
  }

  input:focus {
    outline: none;
  }

  .after {
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, black 50%, transparent 50%);
    background-color: rgba(0, 0, 0, 0.3);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: all 0.6s ease;
  }

  input:focus ~ .after {
    background-position: 0 0;
  }
`;

export default FormInformedDiv;
