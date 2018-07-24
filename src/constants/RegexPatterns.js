const RegexPatterns = {
  text: /^[0-9a-z\s-]+$/i,
  password: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
  number: /[0-9]/,
  client: /(.*?)/,
  firstName: /^[A-Z][a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i,
  lastName: /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^(?=.*\d)[\d ]+$/
};

export default RegexPatterns;
