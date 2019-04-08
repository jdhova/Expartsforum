

const Validator = require ('validator');
const isEmpty = require  ('./is-empty');



module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Please enter email';
    }
    // if (Validator.isEmpty(data.password) && !Validator.isEmpty(data.email)) {
    //     errors.password = 'Email is Required';
    // }

    if (!Validator.isLength(data.password, {min: 5, max : 10})) {
        errors.password = 'Forgotten your password? password should be between 5 and 10 characters';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please Enter Password';
    } 

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






