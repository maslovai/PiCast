'use strict';
const saveRecord = require('../../model/save-record');
const Record =  require('../../model/record');
const mongoose = require('mongoose');
const create = require('./create-record-mock');

const mockLocation = {
    city: "Moscow",
    state: "RU"
}

let savedID;

afterAll(()=>{
    Record.remove({'city':'Moscow'})
    .then(()=>console.log('cleared of test data'))
    .catch()
})

describe('save-record', ()=>{
    it('should save a new record to the database', ()=>{
        create(mockLocation)
        .then(record=>{
            // console.log(record);
            saveRecord(record)
                .then(()=>{
                    mongoose.connect(process.env.MLAB, {useMongoClient: true});
                    Record.findOne({'city':'Moscow'})
                })
                    .then(()=>{
                        // console.log('found in DB:', record);   
                        expect(record.city).toBe('Moscow');
                        expect(record._id).not.toBe('undefined');
                        mongoose.disconnect();
                    })
                    .catch(err=> console.log(err))
                .catch(err=>console.log(err))
        })
    })
})    