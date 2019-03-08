
const Validator = require ('validator');
const isEmpty = require  ('./is-empty');


module.exports = function validateEducationInput(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    // data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    
    if (Validator.isEmpty(data.school)) {
        errors.school = 'School/ University name  is reqired';
    }

    if (Validator.isEmpty(data.degree)) {
        errors.degree = 'Please enter Degree Obtained';
    }

    // if (Validator.isEmpty(data.fieldofstudy)) {
    //     errors.fieldofstudy = 'fieldofstudy   is reqired';
    // }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






