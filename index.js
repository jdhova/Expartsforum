
const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
// const expressValidator = require('express-validator');

 const post = require('./routes/api/post');
const profiles = require('./routes/api/profiles');
const users = require('./routes/api/users');
const employer = require('./routes/api/employer')
const image = require ('./routes/api/image')
const profilee = require('./routes/api/profilee')


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




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/expartsforum')

require("./models/Image");

    // .then(() => console.log('mongo working'))
    // .catch(err => console.log('ERROR is', err))

app.use(passport.initialize());




// app.get('/', (req, res) =>{
// res.send('hello world')
// });

app.use('/api/post', post);
app.use('/api/profiles', profiles);
app.use('/api/users', users); // employee route
app.use('/api/employer',employer) // employer route
app.use('/api/image', image)
app.use('/api/profilee', profilee)

// Serve static asset

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build','index.html'))
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Back end server running on port ${port}`))




