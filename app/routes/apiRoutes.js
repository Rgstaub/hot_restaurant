var express = require('express');
var tableFile = __dirname + '/../data/tables.json'
var waitlistFile = __dirname + '/../data/waitList.json'
var tables = require('../data/tables.js');

module.exports = (function() {
    // 'use strict';
    var api = express.Router();

    api.post("/new", function(req, res) {
       
        //Get the tables

        //If there is space add party to reservations (tables.json)

        //If not 

        var myObj = {
            name: req.body.name,
            phone: req.body.phone
        }

        tables.push( myObj );

        console.log(tables);
    
        res.send(req.body);
    });

    return api;
})();