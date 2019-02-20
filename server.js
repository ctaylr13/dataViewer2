// server.js file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
var DataModel = require('./model/dataModel');
var graphData;

// Database
const uri = require('./config/keys').mongoURI;
mongoose.connect("mongodb+srv://taylor:taylor123@cluster0-jktyg.mongodb.net/solarData?retryWrites=true", {
     useNewUrlParser: true 
}, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("MongoDB Connected!");
    } 
} );

DataModel.find({}, function(err, data){
    if (err) {
        console.log("couldnt find data");
    } else {
        console.log("heres the data");
        console.log(data);
        graphData = data;
    }
})

console.log("graph data variable", graphData);
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/list', (req, res) => {
    DataModel.find({}, function(err, data){
    if (err) {
        console.log("couldnt find data");
    } else {
        console.log("heres the data");
        // console.log(data);
        res.render("List", data);
        
    }
})
})




// Run Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));