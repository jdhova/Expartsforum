

const express  = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const passport = require ('passport')

const Post = require('../../models/Post');


// Load Validation
 const validatePostinput = require('../../validation/post')

// Private route to get post comments
router.post('/', passport.authenticate('jwt',{session :false}), (req,res) => {

    const { errors, isValid } = validatePostinput(req.body)
        if(!isValid) {
            return res.status(400).json(errors)
        }
    const newPost = new Post ({
        text : req.body.text,
        name :req.body.name,
        avatar : req.body.avatar,
        user : req.user.id

    });
    newPost.save().then(post =>
        res.status(400).json(post))
})

// public route to get all coments

router.get('/' , (req,res) => {
    Post.find()
    .sort({date : -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({error:'NO posts found'}))
})
 
// public route to get  single coment post

router.get('/:id' , (req,res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({error:'NO post for this ID'}))
})




router.delete('/:id',passport.authenticate('jwt',{session: false}) ,(req,res) => {
    Profile.findOne({user: req.body.id})
        .then(profile => {
            Post.findById(req.params.id)
            .then(post => {
                // check if user is related to post
                if(post.user.toString() !== req.user.id){
                    return res.status(401).json({unauthorized : 'User is not authorized to delete this post'})
                }
                // delete 
                post.remove().then(() => res.json({removed:'post deleted'}))
            })
            .catch (err => res.status(404).json({error: 'ERROR post not found'}))
        })
    
}
)

module.exports = router;