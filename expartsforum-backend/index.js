
const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const passport = require('passport');
// const expressValidator = require('express-validator');

 const post = require('./routes/api/post.js');
const profiles = require('./routes/api/profiles');
const users = require('./routes/api/users');

// const passport = require('../config/passport.js')



const app = express();

// bodyParser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// app.use(passport.session());
app.use(passport.initialize());
require('./config/passport')(passport)

// app.use('/image', ImageRouter) // need to cleerify this





mongoose.connect('mongodb://localhost/expartsforum')
    .then(() => console.log('mongo working'))
    .catch(err => console.log('ERROR is', err))

app.use(passport.initialize());




app.get('/', (req, res) =>{
res.send('hello Dimond Fish')
});

app.use('/api/post', post);
app.use('/api/profiles', profiles);
app.use('/api/users', users);
// app.use('/api/image')

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Back end server running on port ${port}`))