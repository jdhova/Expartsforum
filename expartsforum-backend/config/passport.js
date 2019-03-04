
const jwtStrategy = require('passport').Strategy;

const ExtractJwt = require('passport'). ExtractJwt;
 const passportJWT = require("passport-jwt");

const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require ('../config/keys');
 const passport = require('passport')



// module.exports = function(passport){
// const opts ={}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'juuud';

// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     User.findOne({id: jwt_payload._id}, (err, user) => {
//         if (err) {
//             return done(console.log('error is',err, false));
//         }
//         if (user) {
//             return done(null, console.log('user is',user));
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }))
// }


// GOOD CODE

//  module.exports = passport => {
//     const opts = {};
//     opts.jwtFormRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
//     opts.secretOrKey = 'juuud';
//     passport.use(
//         new jwtStrategy(opts, (jwt_payload, done ) => {
//             console.log('hehehehe',jwt_payload)
        
//         })
//     );
// }


 module.exports = (passport) => {
    passport.use(new jwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey   : keys.secretOrPrivateKey
        },
         (jwtPayload, cb) => {

            //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
            return User.findOneById(jwtPayload._id)
                .then(user => {
                    return cb(null, user);
                })
                .catch(err => {
                    return cb(err);
                });
        }
    ))
 }


// module.exports = function(passport){
//   let opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//   opts.secretOrKey = config.keys.secretOrPrivateKey;
//   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     User.findById(jwt_payload.data._id, (err, User) => {
//       if(err){
//         return done(err, false);
//       }

//       if(User){
//         return done(null, User);
//       } else {
//         return done(null, false);
//       }
//     });
//   }));
// }


// module.exports = passport => {
//   const opts = {};
//   opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//   opts.secretOrKey = config.keys.secretOrPrivateKey;
//   console.log('loooooeheheh')

//   passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//       console.log('heheheh')
//     User.findById(jwt_payload._id, 
//     then(user => {
//       if(user){
//         return done(null, user);
//       }
//         return  done (null, false);
//       })
//       .catch(err => console.log(err))
//    })
//   );
//  };




// router.route('/current')



// getToken = function (headers) {
//   if (headers && headers.authorization) {
//     var parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

