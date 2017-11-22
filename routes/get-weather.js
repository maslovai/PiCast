'use strict';

require('dotenv').config();
const superagent = require('bluebird').promisifyAll(require('superagent'));
const getLocation = require('./locate.js');
const createRecord  = require('../model/create-record.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// weather request
let getWeather = module.exports = () => {
  getLocation()
    .then(location => createRecord(location))
    .catch(err => console.log(err.message));
};

getWeather();
