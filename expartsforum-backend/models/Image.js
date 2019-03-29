// // const mongoose = require('mongoose')
// // const Schema = mongoose.Schema



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
        path:  { type: String },
        caption: { type: String }
        });
module.exports = mongoose.model('image', photoSchema);






// const ImageSchema = new Schema ({
//          path:  { type: String },
//         caption: { type: String }
// });
//   const Image = mongoose.model('image',ImageSchema);

//   module.exports = Image


//   const mongoose = require('mongoose');
//     const Schema = mongoose.Schema;

//     const ImageSchema = new Schema({
//         path:  { type: String },
//         caption: { type: String }
//   });
// module.exports = mongoose.model('image', ImageSchema);










// // const ImageSchema = new Schema({
    
// //     user: {
// //         type: Schema.Types.ObjectId,
// //         ref: 'users'
// //       },
// //     imageName:{
// //         type: String,
// //         default: "none",
// //         // required: true
// //     },

// //     imageData: {
// //         type: String,
        
// //     }
// // });

// // const Image = mongoose.model('image',ImageSchema)
// // module.exports = Image

// // module.exports = Image = mongoose.model('Image',ImageSchema)


