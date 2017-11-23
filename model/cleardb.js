'use strict';

const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('../routes/locate')();

mongoose.Promise = require('bluebird');
module.exports = () => {
        console.log('clearing db...');
        return Record.remove({}) 
}