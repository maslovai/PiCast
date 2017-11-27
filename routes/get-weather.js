'use strict';

require('dotenv').config();
const getLocation = require('./locate.js');
const createRecord  = require('../model/create-record.js');
const saveRecord = require('../model/save-record.js');
const cleanDB = require('../model/cleardb.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB, {useMongoClient: true});

let getWeather = module.exports = () => {
  getLocation()
    .then(createRecord)
    .then(saveRecord)
    .then(cleanDB)
    .then(() => mongoose.disconnect())
    .catch(err => {
      console.log(err.message); 
    });
};

getWeather();
