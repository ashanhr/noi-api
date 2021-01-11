const mongoose = require('mongoose');

//Event schema
const eventSchema = new mongoose.Schema({
    title:String,
    description:String,
    date:Date
});

module.exports = mongoose.model('Event',eventSchema);