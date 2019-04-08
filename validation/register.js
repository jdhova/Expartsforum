
const Validator = require ('validator');
const isEmpty = require  ('./is-empty');


module.exports = function validatateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if (!Validator.isLength(data.name, {min: 2, max: 20})){
        errors.name ='Name must be between 2 and 20 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Please Enter Name';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please Enter Password';
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Password 2 Please Verify Password';
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password must be the same';
    }

    if (!Validator.isLength(data.password, {min: 5, max : 10})) {
        errors.password = 'Password must be betwen 2 nd 20 characters';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






