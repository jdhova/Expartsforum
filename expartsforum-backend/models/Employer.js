

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schemas

const UserrSchema = new Schema ({

name:{
    type: String,
    required: true
},

email: {
    type: String,
    required: true
},

password: {
    type: String,
    required: true
    
},

date: {
    type: String,
    default: Date.now
}

});

module.exports = Userr = mongoose.model('user',UserrSchema)
// need to rechek schema for 


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const photoSchema = new Schema({
//         path:  { type: String },
//         caption: { type: String }
//         });
// module.exports = mongoose.model('image', photoSchema);