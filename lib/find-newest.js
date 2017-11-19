'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('./locate.js')();

mongoose.Promise = require('bluebird');


module.exports = () => {

    mongoose.connect(process.env.MLAB,{useMongoClient: true});
    Record.findOne().sort({"date":-1}).limit(1)
    .then(record=>{
        console.log(record);
        mongoose.disconnect();
    })
    .catch(err=>console.log(err));

    // Record.findOne().sort({"date":-1}).limit(24)
    // .then(record=>{
    //     Record.remove({});
    //     console.log('removed records!')
    // })
    // .catch(err=> console.log(err))
    
}
