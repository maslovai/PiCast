'use strict';
const CronJob = require('cron').CronJob;
const getWeather = require('./get-weather.js');

let job = new CronJob('* * * * * *', () => {console.log('hi')}, null, true, 'America/Los_Angeles');