
'use strict';

module.exports = (forecast, alert) => {

  const on = 1,
    off = 0,
    count = 30;

  const blue = 18;
  const white = 23;
  const yellow = 24;
  const red = 21;

  const leds = [ blue, white, yellow, red ];

  const rain = [ 'chancerain', 'tstorms','chancesleet', 'chancestorms', 'sleet', 'rain', 'tstorms' ],
    sun =  [ 'sunny', 'partlysunny', 'mostlysunny', 'clear' ],
    cloudy = [ 'cloudy', 'fog', 'partlycloudy', 'mostlycloudy' ],
    severe = [ 'snow', 'sleet', 'tstorms' ],
    alerts = [ 'HWW', 'VOL', 'FIR', 'SPE', 'FOG', 'HEA', 'SVR', 'WND', 'WAT', 'FLO', 'WIN', 'SEW', 'WRN', 'TOW', 'TOR', 'HUR' ];


  let blink = (count, led) => {

    if (count <= 0){
      console.log(led + ': off');
    } else {
      console.log('blinking');
    }
  };

  let turnOff = (...bulbs) => {

    for(let each in bulbs) {
      console.log('blinking stopped');
      console.log(each + ' = ' + off);
    }

  };

  if(rain.indexOf(forecast) !== -1) {

    if(forecast === 'rain' || forecast === 'tstorms'){
      console.log('' + leds[0] + ': ' + on + '');
      turnOff(blue);
    }else {
      blink(count, blue);
    }
  }

  if(cloudy.indexOf(forecast) !== -1){

    console.log('' + leds[1] + ': ' + on + '');
    turnOff(white);

  }

  if(sun.indexOf(forecast) !== -1){

    console.log('' + leds[2] + ': ' + on + '');
    if(forecast === 'mostlysunny' || forecast === 'partlysunny'){
      blink(25, yellow);
    } else {
      turnOff(yellow);
    }
  }

  if(severe.indexOf(forecast) !== -1){

    console.log('' + leds[3] + ': ' + on + '');

    if(forecast === 'snow') {
      console.log('' + leds[1] + ': ' + on + '');
      turnOff(red, white);
    } else if(forecast === 'sleet'){
      console.log('' + leds[0] + ': ' + on + '');
    } else {
      turnOff(red);
    }
  }

  if (alerts.indexOf(alert) !== -1) {

    blink(0, red);
    if(alert === 'FLO' || alert === 'WRN' || alert === 'SEW') {
      console.log('' + leds[0] + ': ' + on + '');
      turnOff(blue);
    }

    if(alert === 'WIN'){
      blink(count, white);
    }

    if(alert === 'HEA') {
      console.log('' + leds[2] + ': ' + on + '');
      turnOff(yellow);
    }
  }
};
