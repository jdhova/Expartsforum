

// const Validator = require ('validator');
// const isEmpty = require  ('./is-empty');



// module.exports = function validateLoginInput(data) {
    
// let errors = {};

// // checks if its an empty string or undefined before it passes it to be cheked
// data.handle = !isEmpty(data.handle) ? data.handle : '';

//     if (!Validator.isLength(data.handle,{min: 2, max: 10})) {
//         errors.handle = "User Handle needs to be between 2 and 10 characters"
//     }
//     if (Validator.isEmpty(data.handle,{min: 2, max: 10})) {
//         errors.handle = "Profile Handle Required"
//     }
//     if(!isEmpty(data.website)) {
//         if(!Validator.isURL(data.website)){
//                 errors.website = "this is an invalid website"
//         }
//     }
//     if(!isEmpty(data.youtube)) {
//         if(!Validator.isURL(data.youtube)){
//                 errors.youtube = "this is an invalid YouTube link"
//         }
//     }
//     if(!isEmpty(data.twitter)) {
//         if(!Validator.isURL(data.twitter)){
//                 errors.twitter = "this is an invalid twitter Link"
//         }
//     }
//     if(!isEmpty(data.facebook)) {
//         if(!Validator.isURL(data.facebook)){
//                 errors.facebook = "this is an invalid facebook Link"
//         }
//     }
//     if(!isEmpty(data.linkedin)) {
//         if(!Validator.isURL(data.linkedin)){
//                 errors.linkedin = "this is an invalid linkedin link"
//         }
//     }
//     if(!isEmpty(data.instagram)) {
//         if(!Validator.isURL(data.instagram)){
//                 errors.instagram = "this is an invalid instagram link"
//         }
//     }

//     return {
//         errors,
//         isValid: isEmpty(errors)
//     }

// }
    

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
