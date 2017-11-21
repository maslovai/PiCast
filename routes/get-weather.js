'use strict';

require('dotenv').config();
const superagent = require('bluebird').promisifyAll(require('superagent'));
const getLocation = require('./locate.js');
const saveRecord = require('../model/create-record.js');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// weather request
let getWeather = module.exports = () => {
  getLocation()
    .then(location => {
      let city = location || 'San_Francisco';
      console.log('Getting Weather for: ', city);
      superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/${city}.json`)
        .then(data => {
          saveRecord(data);
        })
        .catch(err => console.log('ERROR', err.message, '- conditions request failed'));
    })
    .catch(err => console.log(err.message));
};

getWeather();
