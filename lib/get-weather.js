'use strict';
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

