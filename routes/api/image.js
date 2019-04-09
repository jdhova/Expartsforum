// const express = require('express');
// const Image = require('../../models/Image');
// const ImageRouter = express.Router();
// const multer = require ('multer');
// const router = express.Router()
// const path = require('path')
// const crypto = require('crypto')
// const mongoose = require('mongoose')
// const GridFsStorage = require('multer-gridfs-storage')
// const Grid = require('gridfs-stream')
// const methodOverride = require('method-override')
// const bodyParser = require('body-parser')
// // const fs = require('fs')





// router.use(bodyParser.json())
// router.use(methodOverride('_method'))



// const mongoURI = 'mongodb://localhost:27017/expartsforum'

// const conn = mongoose.createConnection(mongoURI)
    
//  let gfs
//         conn.once('open', () => {
//             //ini Stream
//             debugger
//             gfs = Grid(conn.db, mongoose.mongo);
//             gfs.collection('uploads');
//         })

// // set storage Engine

// const storage = new GridFsStorage({
//      url: mongoURI,
//     file:( req, file) => {
//         return new Promise(( resolve,reject) => {
//             crypto.randomBytes(16 ,(err,buf) =>{
//                 if(err) {
//                     // return reject(err)
//                     debugger
//                     console.log(err,'error')
                    
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname)
//                 debugger
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName :'uploads'
//                 };
//                 resolve(fileInfo);
//             })
//         })
//     }
// })

//  const image = multer({storage})

// //  const Image = require('../../models/Image');

//  router.route('/')
// .post(image.single('file'), function(req, res) {
   
//     const new_img = new Image({
//         path :req.body.path,
//         caption: req.body.caption
//     });

//     // new_img.img.data = fs.readFileSync(req.file.path)
//     // new_img.img.contentType = 'image/jpeg';
//     new_img.save();

//     res.json({ message: 'New image added to the db!' });

// })






























// // const storage = multer.diskStorage({
// //     destination: './public/uploads/',
// //     filename: function(req,file, cb) {
// //         cb(null,file.fieldname + '-'+ Date.now() + path.extname(file.originalname))
// //     }
// // });

// // const upload = multer({
// //     storage: stroage
// // }).single('multerImage')



















// // storing image to db and creating a disck strage or relationship 
// // and also file fiter for the image to be uploaded


// // const storage = multer.diskStorage({
// //     destination: function(req,file,cb){
// //         cb(null, './uploads/')
// //     },
// //     filename: function(req,file,cb) {
// //         cb(null, Date.now() + file.originalname)
// //     }
// // });

// // const fileFilter = (req, file,cd) => {
// //     if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png') {
// //         cb(null,true)
// //     } else {
// //         cb(null,false)
// //     }
// // }

// // const upload = multer ({
// //     storage: storage,
// //     limits: {
// //         fileSize: 1024 * 1024 * 5
// //     },

// //     fileFilter: fileFilter
// // });


// // // storing file and creating refrence to stored image
// // //uploadmulter

// // ImageRouter.route('/')
// //     .post(upload.single('imageData'), (req,res,next) => {
// //         console.log(req.body);
// //         const newImage = newImage({
// //             imageName: req.body.imageName,
// //             imageData: req.file.path
// //         });

// //         newImage.save
// //             .then((results) =>{
// //                 console.log(result)
// //                 res.status(200).json({
// //                     success:true,
// //                     document:result
// //                 })
// //             })
// //             .catch((err) => next(err))
// //     });
     






    
//     // const path = require("path");
//     // // const multer = require("multer");
    
//     // const storage = multer.diskStorage({
//     //    destination: "./public/uploads/",
//     //    filename: function(req, file, cb){
//     //       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//     //    }
//     // });
    
//     // const upload = multer({
//     //    storage: storage,
//     //    limits:{fileSize: 1000000},
//     // }).single("myImage");

//     // // const router = express.Router();

//     router.post('/', (req,res) => res.json({msg: 'profiles works'}))


  



// module.exports = router;

