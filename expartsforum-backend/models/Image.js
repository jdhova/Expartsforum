const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    imageName:{
        type: String,
        default: "none",
        // required: true
    },

    imageData: {
        type: String,
        
    }
});

const Image = mongoose.model('Image',ImageSchema)
module.exports = Image

// module.exports = Image = mongoose.model('Image',ImageSchema)