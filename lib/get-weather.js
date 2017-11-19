'use strict';

// modules
require('dotenv').config();
const superagent = require('bluebird').promisifyAll(require('superagent'));
const Record = require('../model/record');
const getLocation = require('./locate.js');

// connecting to mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// weather request
let getWeather = module.exports = () => {
  getLocation()
    .then(location => {
      let city = location || 'San_Francisco';
      console.log('Getting Weather for: ', city);
      superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/${city}.json`)
        .then(req => {
          mongoose.connect(process.env.MLAB, {useMongoClient: true});
          let record = new Record({
            'city':req.body.current_observation.display_location.full, 
            'temperature':req.body.current_observation.temp_f, 
            'forecast':req.body.current_observation.icon});
          return record.save()
            .then(record => {
              console.log(record);
              mongoose.disconnect();
            })
            .catch(err => {
              console.log(err.message);
              mongoose.disconnect();
            });
        });
    })
    .then(() => mongoose.disconnect() )
    .catch(err => console.log('err', err));

};

// getWeather();
