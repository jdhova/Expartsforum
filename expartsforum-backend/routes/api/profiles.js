


const express  = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const passport = require ('passport');
const jwtStrategy = require('passport-jwt').Strategy
const  bodyParser = require('body-parser');

// Load Validation
const validateProfileinput = require('../../validation/profile')
 

// user and profile models

const Profile = require('../../models/Profile');

const User = require('../../models/User');

// require('./api/passport')
router.get('/test', (req,res) => res.json({msg: 'profiles works'}))

 
// Protected Route
router.get ('/', passport.authenticate('jwt', { session: false}), (req,res) => {
    

    Profile.findOne({user: req.user.id}) 
        .then(profile => {
        if(!profile){
          return res.status(404).json({noprofile: " there is no profile for this user"})
        }
        res.json(profile)
    })
    .catch(err => res.status(404).json({err:"this is the error"}))
})


// Creating Profile Route which is a protected POST Route

router.post ('/', passport.authenticate('jwt', { session: false}), (req,res) => {
    
    const { errors, isValid } = validateProfileinput(req.body)
        if(!isValid) {
            return res.status(400).json(errors)
        }

    const profileFields = {}
    profileFields.user = req.user.id // gets the loged in user info
    if(req.body.handle) profileFields.handle = req.body.handle
    if(req.body.company) profileFields.company = req.body.company
    if(req.body.website) profileFields.website = req.body.website
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.status) profileFields.status = req.body.status
    if(req.body.skills) profileFields.skills = req.body.skills
    if(req.body.bio) profileFields.bio = req.body.bio
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername
    
    if(typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills(',')
    }
    
    profileFields.social = {}

    if(req.body.youtube) profileFields.social.youtube = req.body.youtube
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram
    
    Profile.findOne({user: req.user.id})
    .then (profile => {
        if(profile) {
            findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true},
            ).then (profile => res.json(profile))
        } else {
            // create pfofile

            Profile.findOne({handle: profileFields.handle})
            .then( profile => {
                if(profile) {
                    errors.handle = 'Profile handle taken'
                    res.status(400).json(errors)
                }

                new Profile(profileFields).save()
                    .then( profile => 
                        res.status(400).json(profile)
                        )
                
            })
        }
    })


})





module.exports = router;


