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

it('should return the latest record from the databaseand and remove all but last record from the databse', ()=>{
    create(mockData.req)
    .then(() => {
        newest()
        .then(record=>{
            expect(record.city).toBe("testCity");
            expect(record.forecast).toBe("snow");
            superagent.get(`https://api.mlab.com/api/1/databases/forecast/collections/records?q={"active": true}&c=true&apiKey=nyR452n-EvkXAry0rC2ntLtG1OA38N3z`)
            .then(count=>{
                console.log("test after request count to db: ", count);
                expect(count).toEqual(1);
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    })
    
})
})