// server.js file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const Data = require('./model/dataModel');

// Database
const uri = require('./config/keys').mongoURI;
var db;
// const dbName = 'posts';

// var collectio

// const cursor = db.collection('posts.dataviewer').find({});



app.use(bodyParser.json());

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client
//     .connect(err => {
//         if (err) return console.log(err);
//         db = client.db('posts');
//         cursor = db.collection('dataviewer').find({});
//         console.log(cursor);
//         // console.log(db);
//         app.listen(3000, () => {
//             console.log('listening on 3000')
//         })
//         // const collection = client.db('posts').collection('dataviewer').find({});
//         // const cursor = client.db.collection('dataviewer').find({});
//         // console.log(collection);
//         client.close();
//     })

// app.get('/graphs', (req, res) => {
//   var cursor = db.collection('dataviewer').find({});
  
// })


// MongoClient.connect((uri, { useNewUrlParser: true }), (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('star-wars-quotes') // whatever your database name is
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// })


// connect to mongoDB
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(client => {
    console.log('MongoDB Connected');
    // console.log(client);
    // console.log(client.db('posts'));
    // var dbo = client.db('posts');
    
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });


Data.find({ }, function (err, data) {
  console.log("DOCS", data);
});
console.log("RESULTS", Data.find({}));
// Routes
app.get('/', (req, res) => {
  res.send("Hello World");
    // res.sendFile(__dirname + '/index.html');
});

app.get('/data', (req, res) => {
  mongoose.model("Data").find(function(err, data) {
      res.send(data);
  })
});



// Run Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));