
const Validator = require ('validator');
const isEmpty = require  ('./is-empty');


module.exports = function validatePostInput(data) {
    
    let errors = {};
    data.text = !isEmpty(data.text) ? data.text : '';
   
    if (!Validator.isLength(data.text, {min: 5, max: 200})){
        errors.text ='comments text must be between 5 and 200 characters';
    }  
    
    if (Validator.isEmpty(data.text)) {
        errors.text = 'text section is mandatory';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}






