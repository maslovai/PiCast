'use strict';
const create = require('../model/create-record');
const newest = require('../lib/find-newest')
const expect = require('expect');
const superagent = require('superagent');
const deleteTestData = require('../routes/get-weather');

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
    deleteTestData();
})

describe('find-newest', ()=>{

    it('should return the latest record from the database', ()=>{
         create(mockData.req)
             .then(() => {
              newest()
             .then(record=>{
                 expect(record.city).toBe("testCity");
                 expect(record.forecast).toBe("snow");
             })
        .catch(err=>console.log(err))
    })
})

})