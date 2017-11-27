'use strict';
const create = require('./create-record-mock');
const newest = require('../../lib/find-newest')
const expect = require('expect');
const superagent = require('superagent');
const Record = require('../../model/record');

const mockLocation = {
    city: "Moscow",
    state: "RU"
}

afterAll(()=>{
    Record.remove({'city':'Moscow'})
    .then(()=>console.log('cleared of test data'))
    .catch()
})

describe('find-newest', ()=>{

    it('should return the latest record from the database', ()=>{
        
         create(mockLocation)
             .then((record) => {
              newest()
             .then(record=>{
                 expect(record.city).toBe("Moscow");
                 expect(record.state).toBe("RU")
             })
        .catch(err=>console.log(err))
    })
})

})