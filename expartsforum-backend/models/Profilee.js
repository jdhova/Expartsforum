
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileeSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      fullname: {
        type: String,
        required: true
      },
      companyname: {
        type: String,
         required: true
      },
      hiringlocation: {
        type: String
      },
      contactnumber: {
        type: Number,
        required: true
      },
      companywebsite: {
        type: String
      },
      companyemail: {
        type: String
      },

    companyinformation : [
         
        { 
            companyhq : {
                type: String,
            },
            numofemployees : {
                type: Number
            },
            numofyears : {
                type: Number
            },
            
            companybio :{
             type: String
            }
        }      
      ],

    skillsrequied : [
        {
            empskillreq: [String],
            minedureq: [String]
        }
    ],

    social: {
        youtube: {
          type: String
        },
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        linkedin: {
          type: String
        },
        instagram: {
          type: String
        }
      },

})

// module.exports = ProfileSchema
// module.exports = Profile = mongoose.model('profile', ProfileSchema);
module.exports = Profilee = mongoose.model('profilee', ProfileeSchema)