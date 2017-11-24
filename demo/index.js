'use strict';

const prompt = require('prompt');
const colors = require('colors');
const showWeather = require('./demo.js');

prompt.start();
prompt.message = '';

console.log('\n Hello User. Welcome to the PiCast Demo :) \n');
console.log('Please enter a US City and State to see its PiCast!');
console.log('    * A two word city must have a "_" separating the words.');
console.log('    * And please use two letter abbreviation for the State. \n');

prompt.get(['city', 'state'], (err,result) => {
  let location = {
    city: result.city,
    state: result.state,
  };
  
  console.log('\n');
  showWeather(location);

});

// if error: sorry, something went wrong. are you sure you typed in a valid City / State comb?

