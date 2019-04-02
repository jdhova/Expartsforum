
const Validator = require ('validator');
const isEmpty = require  ('./is-empty');



module.exports = function employerLoginValidation(info) {
    let errors = {};

    info.name = !isEmpty(info.name) ? info.name : '';
    info.email = !isEmpty(info.email) ? info.email : '';
    info.password = !isEmpty(info.password) ? info.password : '';
    

    if (Validator.isEmpty(info.name)) {
        errors.name = 'Please enter employer Name';
    }

    if (!Validator.isEmail(info.email)) {
        errors.email = 'Invalid employer  Email';
    }

    if (Validator.isEmpty(info.email)) {
        errors.email = 'Please enter employer email';
    }

  
    // if (Validator.isEmpty(info.password) && !Validator.isEmpty(info.email)) {
    //     errors.password = 'Email is Required';
    // }

    if (!Validator.isLength(info.password, {min: 5, max : 10})) {
        errors.password = 'Forgotten your password? password should be between 5 and 10 characters';
    }

    if (Validator.isEmpty(info.password)) {
        errors.password = 'Please Enter  empl Password';
    } 

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






