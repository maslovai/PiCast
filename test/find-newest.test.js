'use strict';
const create = require('../model/create-record');
const newest = require('../lib/find-newest')
const expect = require('expect');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  full : "Kiev"
                  },
                temp_f : "near zero",
                icon : "almost always snow"
            }
        }
    }
}

describe('find-newest', ()=>{


it('should return the latest record from the databaseand remove all but last record from the databse', ()=>{
    create(mockData.req)
    .then(() => {
        newest()
        .then(record=>{
            expect(record.city).toBe("Kiev");
            expect(record.forecast).toBe("almost always snow");
        })
        .catch(err=>console.log(err))
    })
    
})
})