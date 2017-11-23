'use strict';

module.exports = (temp) => {

  let meter = [20, 16, 22, 27, 17, 4];
  var testArray = [];

  if(temp >= 90){
    for(let i = 0; i < meter.length; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }

  if(temp >= 70 && temp <= 90){
    for(let i = 0; i < meter.length-1; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }

  if(temp >= 50 && temp <= 70){
    for(let i = 0; i < meter.length-2; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }

  if(temp >= 30 && temp <= 50){
    for(let i = 0; i < meter.length-3; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }

  if(temp >= 10 && temp <= 30){
    for(let i = 0; i < meter.length-4; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }

  if(temp >= -10 && temp <= 10){
    for(let i = 0; i < meter.length-5; i++){
      testArray.push(meter[i]);
    }
    return testArray;
  }
};
