'use strict';
const create = require('../model/create-record');
const newest = require('../lib/find-newest')
const expect = require('expect');
const superagent = require('superagent');

const mockData = {
    req : {
         body : {
             current_observation : {
                display_location : {
                  full : "testCity"
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
            expect(record.city).toBe("testCity");
            expect(record.forecast).toBe("almost always snow");
            superagent.get(`https://api.mlab.com/api/1/databases/forecast/collections/records?q={"active": true}&c=true&apiKey=${process.env.MLAB_KEY}`)
            .then(res=>{
                console.log("test after request count to db: ",res);
                expect (res).toEqual(1);
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    
})
})