'use strict';

module.exports = (temperature) => {

  const Gpio = require('onoff').Gpio;

  let temp = weather.temperature

  let meter = [new Gpio(20, 'out'), new Gpio(16, 'out'), new Gpio(22, 'out'), new Gpio(27, 'out'), new Gpio(17, 'out'), new Gpio(4, 'out')];

  if(temp <= 90){
    for(let i = 0; i < meter.length; i++){
      let light = meter[i];
      setTimeout(function() {
        light.writeSync(0);
        light.unexport();
      }, 5000);
    }
  }

  if(temp <= 70 && temp >= 90){
    for(let i = 0; i < meter.length-1; i++){
      let light = meter[i];
      setTimeout(function() {
        light.writeSync(0);
        light.unexport();
      }, 5000);
    }
  }

  if(temp <= 50 && temp >= 70){
    for(let i = 0; i < meter.length-2; i++){
      let light = meter[i];
      setTimeout(function() {
        light.writeSync(0);
        light.unexport();
      }, 5000);
    }
  }

  if(temp <= 30 && temp >= 50){
    for(let i = 0; i < meter.length-3; i++){
      let light = meter[i];
      setTimeout(function() {
        light.writeSync(0);
        light.unexport();
      }, 5000);
    }
  }
};

//GPIO Ports:
//-10: 20
// 10: 16
// 30: 22
// 50: 27
// 70: 17
// 90: 4
