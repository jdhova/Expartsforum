
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateprofileeinput(data) {

    let errors = {}

    data.fullname = !isEmpty(data.fullname) ? data.fullname : '',
    data.companyname = !isEmpty(data.companyname) ? data.companyname : ''

    
}