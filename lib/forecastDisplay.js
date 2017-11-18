'use strict';

const Gpio = require('onoff').Gpio;


let on = 1;
let off = 0;

let rain = new Gpio(18, 'out');
let forecast = 'chance of rain';

if(forecast === 'chance of rain'){

    rain.writeSync(on);
    

} 