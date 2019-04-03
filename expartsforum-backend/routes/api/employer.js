const express  = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const keys =  require('../../config/keys');
const passport = require('passport')

// const app = express()



// Load input Validation

const employerRegValidation = require('../../validation/empreg'); 
const employerLoginValidation = require('../../validation/emplogin'); 


// Load user model
const Employer = require('../../models/Employer');


router.get('/test', (req,res) => res.json({msg: 'user works'}))

router.post('/register', (req, res) => {
    const{ errors, isValid} = employerRegValidation(req.body)
    if(!isValid) {
        return res.status(400).json(errors);
    }
    Employer.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            return res.status(400).json({email: 'Email already Exsists'})
        } else {
            
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    // if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                     .catch(err => console.log(err,'ERROR'))
                })
            })
        }
    })
});


// Public Login post route 
router.post('/login', (req,res) => {
    const {errors,isValid} = employerLoginValidation(req.body)
    if(!isValid) {
        return res.status(400).json(errors)
    }
    // const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    Employer.findOne({email})
.then(user => {
    if(!user){
        return res.status(404).json({email: 'user not found'})
    }
    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if(isMatch) {  
              
           const payload = {id: user.id, name: user.name };
            jwt.sign
            (payload, keys.secretOrPrivateKey, 
            {expiresIn: 8500}, 
            (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
            });
        } else {
            return res.status(400).json({password: 'Incorrect Password'});
        }
    })
});

});




module.exports = router