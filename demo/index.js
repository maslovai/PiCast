'use strict';

const prompt = require('prompt');
const colors = require('colors');
const showWeather = require('./demo.js');

const schema = {
  properties: {
    city: {
      pattern: /^[a-zA-Z_]+$/,
      message: 'Please use an underscore "_" instead of a space',
    },
    state: {
      pattern: /\b[a-zA-Z]{2}\b/,
      message: 'State must be the two letter abbreviation. Try again',
    },
  },
};


prompt.start();
prompt.message = '';

console.log('\n Hello User. Welcome to the PiCast Demo :) \n'.blue);
console.log('Please enter a US City and State to see its PiCast!'.blue);
console.log('    * A two word city must have a "_" separating the words.');
console.log('    * And please use two letter abbreviation for the State. \n');

prompt.get(schema, (err,result) => {
  let location = {
    city: result.city,
    state: result.state,
  };
  
  console.log('\n');
  if(location.state === 'uw' || 'UW'){
    console.log('UW - 41');
    console.log('WSU - 14');
    console.log('Hi Kelati. Go Dawgs! \n');
    return;
  }
  showWeather(location);

});

