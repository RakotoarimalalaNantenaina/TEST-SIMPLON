const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champ email est obligatoire";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "l'email n'est pas validé";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Le mot de passe est obligatoire";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
