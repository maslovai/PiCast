'use strict';

require('dotenv').config();
const superagent = require('superagent');
const colors = require('colors');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = (location) => {
  return new Promise((resolve,reject) => {
    if (typeof(location) != 'object') {
        location = {};
        location.city = "San_Francisco";
        location.state = "CA"
    }

    let city = location.city || 'San_Francisco';
    let state = location.state || 'CA';

    console.log('Getting forecast for: '.green, city,state);

    let testObject = {
        city : location.city,
        state : location.state,
        temperature : '50',
        forecast : 'rain',
        alert : 'FLO',
        alertDescription : 'flood'
    }  
    resolve (testObject)
  })
}