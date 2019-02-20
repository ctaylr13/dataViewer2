const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var dataSchema = new Schema({
    year: Number,
    month: Number,
    kwh: Number,
    bill: Number,
    savings: Number
});

module.exports = mongoose.model("DataModel", dataSchema);