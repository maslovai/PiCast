'use strict';

const cron = require('node-cron');
const getWeather = require('./lib/get-weather.js');

cron.schedule('0 0-23 * * *', getWeather);

