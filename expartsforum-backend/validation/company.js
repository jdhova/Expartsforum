
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatecompanyinput(info) {
  let errors = {};

  info.companyhq = !isEmpty(info.companyhq) ? info.companyhq : '';
  info.companybio = !isEmpty(info.companybio) ? info.companybio : '';
 


  if (Validator.isEmpty(info.companyhq)) {
    errors.companyhq = 'full name  is required';
  }

  if (Validator.isEmpty(info.companybio)) {
    errors.companybio = 'companybio field is required';
  }
  // we need to check if the website and email fields
  // are empty before checking if its a valid URL

  return {
    errors,
    isValid: isEmpty(errors)
  };
};




