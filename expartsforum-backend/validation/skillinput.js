const Validator = require('validator')
const isEmpty = require('./is-empty')


module.exports = function validateskillinput(info){

    let errors = {}

info.empskillreq = !isEmpty(info.empskillreq)? info.empskillreq :"";
info.minedureq = !isEmpty(info.minedureq) ? info.minedureq : '';

if(Validator.isEmpty(info.empskillreq)){
    errors.empskillreq = " skills are required"
}


if(Validator.isEmpty(info.minedureq)){
    errors.minedureq = " minimum Education is required"

}

return {
errors,
isValid: isEmpty(errors)

}
}



// const Validator = require('validator');
// const isEmpty = require('./is-empty');

// module.exports = function validateskillinput(info) {
//   let errors = {};

//   info.empskillreq = !isEmpty(info.empskillreq) ? info.empskillreq : '';
//   info.minedureq = !isEmpty(info.minedureq) ? info.minedureq : '';
 


//   if (Validator.isEmpty(info.empskillreq)) {
//     errors.empskillreq = 'full name  is required';
//   }

//   if (Validator.isEmpty(info.minedureq)) {
//     errors.minedureq = 'companybio field is required';
//   }
//   // we need to check if the website and email fields
//   // are empty before checking if its a valid URL

//   return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };





