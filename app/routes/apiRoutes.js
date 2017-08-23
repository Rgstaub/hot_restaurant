var express = require('express');

var tables = require('../data/tables.js');
var waitList = require('../data/waitList.js');


module.exports = (function() {
    // 'use strict';
    var api = express.Router();

    api.post("/new", function(req, res) {
       
        var myObj = {
            name: req.body.name,
            phone: req.body.phone
        }

        //If there is space add party to reservations (tables.json)
        if(tables.length < 5){
            console.log(`Added ${myObj.name} to tables`);
            tables.push(myObj);
        }else{
            console.log(`Added ${myObj.name} to wait list`);
            waitList.push(myObj);
        }

        

        tables.push( myObj );

        console.log(tables);
    
        res.send(tables, waitList);
    });

    return api;
})();