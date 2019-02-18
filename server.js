// server.js file
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Database
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });

// Routes
app.get('/', (req, res) => {
  res.send("Hello World");
});



// Run Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));