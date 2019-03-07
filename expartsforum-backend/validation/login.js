

const Validator = require ('validator');
const isEmpty = require  ('./is-empty');



module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Email is Required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please Enter Password';
    }

    // if (!Validator.isLength(data.password, {min: 5, max : 10})) {
    //     errors.password = 'Forgotten your password?';
    // }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






