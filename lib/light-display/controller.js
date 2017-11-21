'use strict';

const getData = require('../get-data');
const forecast = require('./forecastDisplay');
const temperature = require('./temperature');

(function(){

    // const Gpio = require('onoff').Gpio,
    // button = new Gpio(2, 'in', 'both');

    // button.watch(function(err) {
    //   if(err){
    //     throw(err);
    //   }
      let weather = getData()
        .then(data => {
          forecast(data.forecast);
          // temperature(data.temperature);
        })
        .catch(err => { throw err });

})();
