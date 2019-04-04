


if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod')
} else {
    module.exports = require('./keys_dev')
} 


// fix the login so the user know email is correct but password is wrong
// fix reciver password emeka@123.com 111111
// fix router.delete post not yet done
// fix retrieve password if password is lost
// fix show password is incorrect.




