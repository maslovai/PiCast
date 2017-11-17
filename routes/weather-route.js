'use strict';

const apiKey = process.env.API_KEY;
const router = module.exports = require('express').Router();


router.get(`http://api.wunderground.com/api/${apiKey}/conditions/q/WA/Seattle.json`, (req, res, next)=>{
    res.send(req.body);
    next();
})