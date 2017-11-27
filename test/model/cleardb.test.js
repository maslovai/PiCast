'use strict';

const cleardb = require('../../model/cleardb')
const location = require('../../routes/locate')();
const Record = require('../../model/record');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let recordCount;

describe('cleardb ', ()=>{
    it('should remove the oldest record from db', ()=>{
        mongoose.connect(process.env.MLAB, {useMongoClient: true});
        Record.find().count()
        .then(count=>{
            console.log("RECORD COUNT: ",count);
            recordCount = count;
        })
        .then(cleardb)
        .then(Record.find().count()
            .then(countNew=>{
                console.log('after delete: ', countNew, recordCount)
                expect(countNew).toEqual(recordCount-1)
                mongoose.disconnect();
                })
            .catch(err)
        )
        .catch(err=> mongoose.disconnect())
    })
           
})
