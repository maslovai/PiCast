'use strict';

module.exports = (forecast, alert) => {

  const Gpio = require('onoff').Gpio;

  const on = 1,
    off = 0,
    count = 40,
    seconds = 8000;

  const blue = new Gpio(18, 'out'),
    white = new Gpio(23, 'out'),
    yellow = new Gpio(24, 'out'),
    red = new Gpio(21, 'out');

  const rain = [ 'chancerain', 'tstorms','chancesleet', 'chancestorms', 'sleet', 'rain' ],
    sun =  [ 'sunny', 'partlysunny', 'mostlysunny', 'clear' ],
    cloudy = [ 'cloudy', 'fog', 'partlycloudy', 'mostlycloudy' ],
    alerts = [ 'HWW', 'VOL', 'FIR', 'SPE', 'FOG', 'HEA', 'SVR', 'WND', 'WAT', 'FLO', 'WIN', 'SEW', 'WRN', 'TOW', 'TOR', 'HUR' ];

  let blink = (count, led) => {

    if (count <= 0) return led.unexport();

    led.read((err, value) => {
      if (err) throw err;

      led.write(value ^ 1, (err) => {
        if (err) console.log(' ');
      });
    });

    setTimeout(() => {
      blink(count - 1, led);
    }, 200);
  };

  let turnOff = (...bulbs) => {
    for(let each in bulbs) {

      clearInterval();
      bulbs[each].write(off, (err) => { if(err) throw err; });
    }
  };

  if(rain.indexOf(forecast) !== -1) {

    if(forecast === 'rain' || forecast === 'tstorms' || forecast === 'sleet'){
      blue.writeSync(on);
      setTimeout(() => turnOff(blue), seconds);
    }
    else blink(count, blue);
  }

  if(cloudy.indexOf(forecast) !== -1){
    white.writeSync(on);
    if(forecast === 'mostlycloudy' || forecast === 'partlycloudy') blink(count, white);    
    else setTimeout(() => turnOff(white), seconds);
  }

  if(sun.indexOf(forecast) !== -1){
    yellow.writeSync(on);
    if(forecast === 'mostlysunny' || forecast === 'partlysunny') blink(count, yellow);
    else setTimeout(() => turnOff(yellow), seconds);
  }

  if(forecast === 'snow') {
    blink(count, white);
    red.writeSync(on); 
    setTimeout(() => turnOff(red), seconds); 
  }

  if (alerts.indexOf(alert) !== -1) {

    blink(count, red);

    if(alert === 'FLO' || alert === 'WRN' || alert === 'SEW') {
      blue.writeSync(on);
      setTimeout(() => turnOff(blue), seconds);    
    }

    if(alert === 'WIN') {
      white.writeSync(on);
      setTimeout(() => turnOff(white), seconds); 
    } 

    if(alert === 'HEA') {
      yellow.writeSync(on);
      setTimeout(() => turnOff(yellow), seconds); 
    } 
  } 
};
