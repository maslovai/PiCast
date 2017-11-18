'use strict';
require('dotenv').config();
const Record = require('../model/record');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const MONGODB_URI = process.env.MONGODB_URI||'mongodb://maslovai:Anna2009@ds119585.mlab.com:19585/forecast';
mongoose.connect(MONGODB_URI);
const superagent = require('superagent');

const router = module.exports = require('express').Router();

superagent.get(`http://api.wunderground.com/api/${process.env.API_KEY}/conditions/q/WA/Seattle.json`)
  .then(req=>{
    let record = new Record({'city':req.body.current_observation.display_location.full, 'temperature':req.body.current_observation.temp_f, 'percip':req.body.current_observation.icon});
    record.save()
      .then(console.log(req.body))
      .catch(err=>console.log(err));
  })
  .catch(err=>console.log(err));