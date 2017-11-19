'use strict';

const cron = require('node-cron');
const getWeather = require('./get-weather.js');

cron.schedule('* 0-23 * * *', getWeather);