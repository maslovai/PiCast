'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('./locate.js')();

mongoose.Promise = require('bluebird');


module.exports = () => {
    return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MLAB,{useMongoClient: true});
     Record.findOne().sort({"date":-1}).limit(1)
     .then(res => {
        Record.remove({})
            .then(()=>{
                console.log('db refreshed!')
                let record = new Record({'city':res.city, 'temperature':res.temperature, 'forecast':res.forecast});
                record.save()
                .then(()=>mongoose.disconnect())
            })
            .catch(err=>console.log(err));
        resolve(res)
     })
    .catch(err => reject(err))
    })
}