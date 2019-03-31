
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const  bodyParser = require('body-parser');



const Profilee = require ('../../models/Profilee')


// protected post route for employers

// router.post('/', passport.authenticate('jwt', {session:false}),

router.post('/', passport.authenticate ('jwt',{session:false}),
(req,res) => {
    const {errors, isValid} = validateprofileeinput(req.body)
        if(!isValid) {
            return res.status(400).json(errors)
        }
        const profileeFields = {}

        profileeFields.user = req.body.id  // this gets the logged in employer
        
        if(req.body.fullname) profileeFields.fullname = req.body.fullname
        if(req.body.companyname) profileeFields.companyname = req.body.companyname
        if(req.body.hiringlocation) profileeFields.hiringlocation = req.body.hiringlocation
        if(req.body.contactnumber) profileeFields.contactnumber = req.body.contactnumber
        if(req.body.companywebsite) profileeFields.companywebsite = req.body.companywebsite
        if(req.body.companyemail) profileeFields.companyemail = req.body.companyemail

        profileeFields.social = {}

        if(req.body.youtube) profileeFields.social.youtube = req.body.youtube
        if(req.body.twitter) profileeFields.social.twitter = req.body.twitter
        if(req.body.facebook) profileeFields.social.facebook = req.body.facebook
        if(req.body.linkedin) profileeFields.social.linkedin = req.body.linkedin
        if(req.body.instagram) profileeFields.social.instagram = req.body.instagram

        Profilee.findOne({fullname: profileeFields.fullname})
            .then( profilee => {
                if(profilee){
                    errors.fullname = "this user exsists"
                    res.status.json(400)(errors)
                } else {

                    Profilee.findOne({user : req.body.id})
                        .then(profilee => {
                            if (profilee) {
                                findOneAndUpdate(
                                    {user:req.user.id},
                                    {$set:profileFields},
                                    {new: true}
                                ).then(profilee => 
                                    res.status(400).json(profilee))
                            }
                        })
                }
                new Profilee(profileeFields).save()
                    .then(profilee =>
                        res.status(400).json(profilee))
            })

})