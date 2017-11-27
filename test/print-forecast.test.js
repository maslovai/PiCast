'use strict';

const print = require('../lib/print-forecast');

let testObject = {
    city : 'Moscow',
    state : 'RU',
    temperature : '50',
    forecast : 'rain',
    alert : 'FLO',
    alertDescription : 'flood'
}  
describe('print-record', ()=>{
    it('should log out record', ()=>{
        print(testObject);
        expect(testObject.city).toBe('Moscow');
        expect(testObject.alert).toBe('FLO')
    })
})