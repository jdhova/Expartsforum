


const express  = require('express');
const router = express.Router()
const mongoose = require ('mongoose')
const passport = require ('passport');
const jwtStrategy = require('passport-jwt').Strategy
const  bodyParser = require('body-parser');
 



const User = require('../../models/User');
const Profile = require('../../models/Profile');

// require('./api/passport')
router.get('/test', (req,res) => res.json({msg: 'profiles works'}))


// Private Route needs to be worked on since passport aint working
const app = express();

// bodyParser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());

require('../../config/passport')
 
// Protected Route
router.get ('/', passport.authenticate('jwt', { session: false}), (req,res) => {
       
   res.json({msg: "profile route is working"})

})
module.exports = router;










    //     const errors = {};

    // Profile.findOne({ user: req.user.id})
    // .then(profile => {
    //     if(!profile) {
    //         errors.noprofile = " there is no profile for this user"
          
    //         return res.status(404).json
    //     }
    //     res.json(profile)
    // })
    // .catch(err => res.status(400).json(err));

