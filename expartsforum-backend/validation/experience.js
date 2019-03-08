



const Validator = require ('validator');
const isEmpty = require  ('./is-empty');



module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Occupation Title is reqired';
    }
    // if (!Validator.isBoolean(data.current)) {
    //     errors.current = 'This field is invalid';
    // }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






