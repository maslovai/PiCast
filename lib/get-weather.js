'use strict';

// modules
require('dotenv').config();
const superagent = require('superagent');
const Record = require('../model/record');
const mongoose = require('mongoose');

// connecting to mongoose
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MLAB, {useMongoClient: true});

// weather request
superagent
  .get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/Seattle.json`)
  .end((error, result) => {
    // handle error in API request
    if(error) {
      console.log(error.message);
      console.log('request to wunderground failed');
      return mongoose.disconnect();
    }

    // create new weather record and save to mogno
    let record = new Record({
      'city': result.body.current_observation.display_location.full, 
      'temperature': result.body.current_observation.temp_f, 
      'forecast': result.body.current_observation.icon,
    });
    record.save();
    console.log(record);
    mongoose.disconnect();
  });
