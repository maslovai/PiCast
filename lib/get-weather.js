'use strict';
<<<<<<< HEAD
require('dotenv').config();
const Record = require('../model/record');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const MONGODB_URI = process.env.MONGODB_URI||'mongodb://maslovai:Anna2009@ds119585.mlab.com:19585/forecast';

const superagent = require('superagent');

const router = module.exports = require('express').Router();

superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/Seattle.json`)
  .then(req=>{
    mongoose.connect(MONGODB_URI, {useMongoClient: true});
    let record = new Record({'city':req.body.current_observation.display_location.full, 'temperature':req.body.current_observation.temp_f, 'percip':req.body.current_observation.icon});
    return record.save()
    .then(record=>console.log(record))
    .catch(err=>console.log(err));
  })
  .then(() => mongoose.disconnect() )
  .catch(err=>console.log('err', err));

=======

// modules
require('dotenv').config();
const superagent = require('superagent');
const Record = require('../model/record');
const mongoose = require('mongoose');
const location = require('./locate.js')();

// connecting to mongoose
mongoose.Promise = require('bluebird');

// weather request
let getWeather = (location) => {
  mongoose.connect(process.env.MLAB, {useMongoClient: true});

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
      console.log(record);

      

      mongoose.disconnect();
    });
};

getWeather(location);
>>>>>>> b33aa2b1433387ce918845097e0d74f3f9f277c9
