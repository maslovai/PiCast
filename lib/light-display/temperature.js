'use strict';

module.exports = (temperature) => {

  const Gpio = require('onoff').Gpio;

  if(weather.temperature <= 90){

    let above90 = new Gpio(17, 'out'),
      iv;

    iv = setInterval(function(){
      above90.writeSync(above90.readSync() ^ 1);
    }, 15000);

    setTimeout(function() {
      clearInterval(iv);
      above90.writeSync(0);
      above90.unexport();
    }, 15000);

  }
};
