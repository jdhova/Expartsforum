// require('dotenv').config()


// const mongoose = require('mongoose')

// module.exports= {
//     mongoURI : "mongodb+srv://jdhova:<Rotterdam123&>@cluster0-18ro9.mongodb.net/test?retryWrites=true",
//     // options:{key:value}
//   }





// module.exports = {
//      mongoURI: 
//      ("mongodb+srv://jdhova:<Rotterdam123&>@cluster0-18ro9.mongodb.net/test?retryWrites=true",
//      {user: 'jdhova', pass: 'Rotterdam123&'}, function (err, db) {
//         //  db.close();
//        })
// }

// mongodb://mongodb0.example.com:27017/admin

// module.exports = {
//     mongoURI:
//     'mongodb :jdhova@Rotterdam123$ @cluster0-18ro9.mongodb.net/test?retryWrites=true'
// };



// const MongoClient = require('mongodb').MongoClient;


// const uri = "mongodb+srv://jdhova:<Rotterdam123&>@cluster0-18ro9.mongodb.net/test?retryWrites=true"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
  
//    client.close();
// });


// const db = require('./config/keys').mongoURI;
// // require('dotenv').config()

// mongoose
// .connect(db)
// .then(() => console.log('Mongo conected'))
// .catch(err => console.log('nownn',err));



// console.log(mongoose.connection.readyState);

// require('dotenv').config()


//  const db = require('./config/keys').mongoURI;

//  mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("this is working"))
//   .catch(err => console.log(err));


module.exports = {
    secretOrPrivateKey: 'juuud'
}
