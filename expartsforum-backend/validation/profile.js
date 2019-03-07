




const Validator = require ('validator');
const isEmpty = require  ('./is-empty');



module.exports = function validateLoginInput(data) {
    
    let errors = {};

// checks if its an empty string or undefined before it passes it to be cheked
    data.handle = !isEmpty(data.handle) ? data.handle : '';

        if (!Validator.isLength(data.handle,{min: 2, max: 10})) {
            errors.handle = "User Handle needs to be between 2 and 10 characters"
        }
        if (Validator.isEmpty(data.handle,{min: 2, max: 10})) {
            errors.handle = "Profile Handle Required"
        }
        if(!isEmpty(data.website)) {
            if(!Validator.isURL(data.website)){
                 errors.website = "this is an invalid website"
            }
        }
        if(!isEmpty(data.youtube)) {
            if(!Validator.isURL(data.youtube)){
                 errors.youtube = "this is an invalid YouTube link"
            }
        }
        if(!isEmpty(data.twitter)) {
            if(!Validator.isURL(data.twitter)){
                 errors.twitter = "this is an invalid twitter Link"
            }
        }
        if(!isEmpty(data.facebook)) {
            if(!Validator.isURL(data.facebook)){
                 errors.facebook = "this is an invalid facebook Link"
            }
        }
        if(!isEmpty(data.linkedin)) {
            if(!Validator.isURL(data.linkedin)){
                 errors.linkedin = "this is an invalid linkedin link"
            }
        }
        if(!isEmpty(data.instagram)) {
            if(!Validator.isURL(data.instagram)){
                 errors.instagram = "this is an invalid instagram link"
            }
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }

}
    
