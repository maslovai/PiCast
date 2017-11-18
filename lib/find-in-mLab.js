'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('./locate.js')();

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MLAB,{useMongoClient: true});


Record.findOne().sort({"date":-1}).limit(1)
.then(rec=>{
    console.log(rec);
    mongoose.disconnect();
})
.catch(err=>console.log(err));