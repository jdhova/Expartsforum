    

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateprofileeinput(info) {
  let errors = {};

  info.fullname = !isEmpty(info.fullname) ? info.fullname : '';
  info.companyname = !isEmpty(info.companyname) ? info.companyname : '';
  info.contactnumber = !isEmpty(info.contactnumber) ? info.contactnumber : '';


  if (Validator.isEmpty(info.fullname)) {
    errors.fullname = 'full name  is required';
  }

  if (Validator.isEmpty(info.companyname)) {
    errors.companyname = 'companyname field is required';
  }

  if(Validator.isEmpty(info.contactnumber)) {
      errors.contactnumber = "number is mandatory"
  }


  // we need to check if the website and email fields
  // are empty before checking if its a valid URL


  if (!isEmpty(info.website)) {
    if (!Validator.isURL(info.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(info.youtube)) {
    if (!Validator.isURL(info.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(info.twitter)) {
    if (!Validator.isURL(info.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(info.facebook)) {
    if (!Validator.isURL(info.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(info.linkedin)) {
    if (!Validator.isURL(info.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(info.instagram)) {
    if (!Validator.isURL(info.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

