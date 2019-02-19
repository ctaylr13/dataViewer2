const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var dataSchema = new Schema({
    year: Number,
    month: Number,
    kwh: Number,
    bill: Number,
    savings: Number
}, { collection: 'dataviewer'});

module.exports = mongoose.model("Data", dataSchema);