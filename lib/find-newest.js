'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('../routes/locate')();
mongoose.Promise = require('bluebird');

module.exports = () => {

    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MLAB,{useMongoClient: true});
        Record.findOne().sort({"date":-1}).limit(1)
        .then(res => {
            resolve(res);
            mongoose.disconnect()
            })
        .catch(err => reject(err)) 
    })
}
