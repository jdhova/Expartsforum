const express = require('express');
const Image = require('../../models/Image');
const ImageRouter = express.Router();
const multer = require ('multer');
const router = express.Router()

// storing image to db and creating a disck strage or relationship 
// and also file fiter for the image to be uploaded

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/')
    },
    filename: function(req,file,cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file,cd) => {
    if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    } else {
        cb(null,false)
    }
}

const upload = multer ({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },

    fileFilter: fileFilter
});


// storing file and creating refrence to stored image
//uploadmulter

ImageRouter.route('/uploadmulter')
    .post(upload.single('imageData'), (req,res,next) => {
        console.log(req.body);
        const newImage = newImage({
            imageName: req.body.imageName,
            imageData: req.file.path
        });

        newImage.save
            .then((results) =>{
                console.log(result)
                res.status(200).json({
                    success:true,
                    document:result
                })
            })
            .catch((err) => next(err))
    });
     

    // router.post('/',(req,res) => {
    //     res.status(400).json('success')
    // })


module.exports = router;

