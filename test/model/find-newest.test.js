'use strict';
const create = require('../model/create-record');
const newest = require('../lib/find-newest')
const expect = require('expect');
const superagent = require('superagent');
const Record = require('../model/record');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  full : "testCity"
                  },
                temp_f : "10",
                icon : "cloudy"
            }
        }
    }
}

afterAll(()=>{
    Record.remove({'city':"testCity"})
    .then(()=>console.log('cleared of test data'))
    .catch()
})

describe('find-newest', ()=>{

    it('should return the latest record from the database', ()=>{
        
         create(mockData.req)
             .then((record) => {
              newest()
             .then(record=>{
                 expect(record.city).toBe("testCity");
                 expect(record.forecast).toBe("snow");
             })
        .catch(err=>console.log(err))
    })
})

})