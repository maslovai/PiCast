'use strict';
const mongoose = require('mongoose');

const record = new mongoose.Schema({
    city:{type:String, required:true},
    temperature:{type: String, required:true},
    percip:{type:String, required: true}
})

module.exports = mongoose.model('Record', record);