const validator = require ('validator');


module.exports = function validatateRegisterInput(data) {
    let errors = {};

    if (!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name ='Name should between 2 and 30 characters';
    }
    return {
        erros,
        isValid : errors
    }
}