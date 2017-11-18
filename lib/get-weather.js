'use strict';

// modules
require('dotenv').config();
const superagent = require('superagent');
const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('./locate.js')();

// connecting to mongoose
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MLAB, {useMongoClient: true});

// weather request
let getWeather = (location) => {
  let city = location || 'Seattle';
  console.log('city: ', city);
  superagent
    .get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/${city}.json`)
    .end((error, data) => {
      // handle error in API request
      if(error) {
        console.log(error.message);
        console.log('request to wunderground conditions failed');
        return mongoose.disconnect();
      }

      // if request succesful -> create new weather record and save to mongo
      let record = new Record({
        'city': data.body.current_observation.display_location.full, 
        'temperature': data.body.current_observation.temp_f, 
        'forecast': data.body.current_observation.icon,
      });
      record.save();
      console.log(record);
      mongoose.disconnect();
    });
};

getWeather(location);