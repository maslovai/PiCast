
'use strict';

module.exports = (forecast) => {

  const on = 1,
    off = 0,
    count = 30,
    seconds = 300;

  const blue = 18;
  const white = 23;
  const yellow = 24;
  const red = 21;

  const leds = [ blue, white, yellow, red ];

  const rain = [ 'chancerain', 'chancesleet', 'chancestorms', 'rain', 'tstorms' ];
  const sun =  [ 'sunny', 'partlysunny', 'mostlysunny', 'clear' ];
  const cloudy = [ 'cloudy', 'fog', 'partlycloudy', 'mostlycloudy' ];
  const severe = [ 'snow', 'tstorms', 'sleet' ];

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

    }
    else blink(25, blue);

  }

  if(cloudy.indexOf(forecast) !== -1){

    console.log('' + leds[1] + ': ' + on + '');
    turnOff(white);

  }

  if(sun.indexOf(forecast) !== -1){

    console.log('' + leds[2] + ': ' + on + '');
    if(forecast === 'mostlysunny' || forecast === 'partlysunny') blink(25, yellow);
    else turnOff(yellow);

  }

  if(severe.indexOf(forecast) !== -1){

    console.log('' + leds[3] + ': ' + on + '');
    if(forecast === 'snow') {
      console.log('' + leds[1] + ': ' + on + '');
      turnOff(red, white);
    } else if (forecast === 'FLO' || forecast === 'sleet' || forecast === 'WRN' || forecast === 'SEW') {
      blink(0, blue);
    } else {
      turnOff(red);
    }
  }

};
