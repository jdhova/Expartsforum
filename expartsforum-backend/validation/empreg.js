

const Validator = require ('validator');
const isEmpty = require  ('./is-empty');


module.exports = function employerRegValidation(info) {
    let errors = {};
    info.name = !isEmpty(info.name) ? info.name : '';
    info.email = !isEmpty(info.email) ? info.email : '';
    info.password = !isEmpty(info.password) ? info.password : '';
    info.password2 = !isEmpty(info.password2) ? info.password2 : '';

    if (!Validator.isLength(info.name, {min: 2, max: 20})){
        errors.name ='Name must be between 2 and 20 characters';
    }

    if (Validator.isEmpty(info.name)) {
        errors.name = 'Please Enter empl Name';
    }
    if (!Validator.isEmail(info.email)) {
        errors.email = 'Invalid emp Email';
    }
    if (Validator.isEmpty(info.password)) {
        errors.password = 'Please Enter emp[ Password';
    }
    if (Validator.isEmpty(info.password2)) {
        errors.password2 = 'Password 2 Please Verify Password';
    }
    if (!Validator.equals(info.password, info.password2)) {
        errors.password2 = 'Password must be the same';
    }

    if (!Validator.isLength(info.password, {min: 5, max : 10})) {
        errors.password = 'Password must be betwen 2 nd 20 characters';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






