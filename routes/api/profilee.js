
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const  bodyParser = require('body-parser');
// const app = express()


// Load Valudation

const validateprofileeinput = require('../../validation/profilee')
const validatecompanyinput = require('../../validation/company')
const validateskillinput = require('../../validation/skillinput')



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

router.get ('/', passport.authenticate('jwt', { session: false}), (req,res) => {
    
    Profilee.findOne({user: req.user.id}) 
        .populate('user', ['name','avatar'])
        .then(profilee => {
        if(!profilee){
          return res.status(404).json({noprofile: " there is no profile for this user"})
        }
        res.status(400).json({profilee: 'profile exsists'})
        // recheck this part 
    })
    .catch(err => res.status(404).json({err:"this is the error"}))
})



router.post('/companyinformation', passport.authenticate('jwt',{session: false}), 
        (req,res) => {

    const {errors,isValid} = validatecompanyinput(req.body)
     
    if(!isValid) {
        return res.status(400).json(errors)
    }
   
    Profilee.findOne({user : req.body.id})

        .then(profilee => {    
            const compInfo = {

                companyhq: req.body.companyhq,
                numofemployees: req.body.numofemployees,
                numofyears: req.body.numofyears,
                companybio: req.body.companybio
            }
            profilee.companyinformation.unshift(compInfo)
            profilee.save().then(profilee =>{ res.status(400).json({profilee})})
        })


})


router.post('/skillsrequied',passport.authenticate('jwt' ,{session: false}), 
    
    (req,res) => {

      
        const {errors, isValid} = validateskillinput(req.body) 
       
        // if(typeof req.body.empskillreq !== 'undefined') {
        //     userf.empskillreq = req.body.empskillreq.split(',')
        // }  

    if(!isValid) {
        return res.status(404).json(errors)
    }

        Profilee.findOne({user: req.body.id})
            .then(profilee => {
                const compSkills = {
                    empskillreq : req.body.empskillreq,
                    minedureq: req.body.minedureq
                }
                profilee.skillsrequied.unshift(compSkills)
                profilee.save().then(profilee => {
                    res.status(400).json({profilee})
                })
            })
            

})



router.delete('/skillsrequied/:skl_id', passport.authenticate('jwt',{session: false}),         
    (req, res) =>{
        
        Profile.findOne({user: req.user.id})
        .then(profilee => {
            const removeIndex = profilee.skillsrequied
            .map(item => item.id)
            .indexOf(req.params.skl_id)

            profile.skillsrequied.splice(removeIndex, 1);

            profilee.save().then(profilee => res.json(profilee))    
        })
        .catch (err => res.status(404).json(err))

});


// router.delete('/experience/:exp_id', passport.authenticate('jwt',{session: false}),         
//     (req, res) =>{
        
//         Profile.findOne({user: req.user.id})
//         .then(profile => {
//             const removeIndex = profile.experience
//             .map(item => item.id)
//             .indexOf(req.params.exp_id)

//             profile.experience.splice(removeIndex, 1);

//             profile.save().then(profile => res.json(profile))    
//         })
//         .catch (err => res.status(404).json(err))

// });


router.delete('/', passport.authenticate('jwt',{session: false}),         
    (req, res) =>{
        
       Profile.findOneAndRemove({user: req.user.id}).then(() => {
           User.findOneAndRemove({_id: req.user.id}).then(() => {
               res.json({done : 'Profile Deleted'})
           })
       })

});

module.exports = router;