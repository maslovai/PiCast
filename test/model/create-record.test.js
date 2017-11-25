'use strict';

const expect = require('expect');
const create = require('./create-record-mock');
const Record = require('../../model/record');

const mockLocation = {
    city: "Moscow",
    state: "RU"
}

describe('create-record ', () => {
    it('should create a record', () =>{ 
        create(mockLocation)
        .then( record => {
            // console.log("RECORD:", record);
            expect(record.city).toBe('Moscow');
            expect(record.state).toBe('RU');
            expect(record.alert).toBe('FLO')
        })
        .catch(err=>console.log(err));
    })
    
    it('should default to San-Francisco, when no location is provided', ()=>{
        create()
        .then((record) => {
            // console.log("RECORD:", record);
            expect(record.city).toBe('San_Francisco');
            expect(record.state).toBe('CA');
        })
        .catch(err => console.log(err))
    })
})