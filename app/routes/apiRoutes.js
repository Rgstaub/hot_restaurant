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
            console.log(`Added ${myObj.name} to tables at spot #${tables.length+1}`);
            tables.push(myObj);
        }else{
            console.log(`Added ${myObj.name} to wait list at spot #${waitList.length+1}`);
            waitList.push(myObj);
        }
    
        res.send([tables, waitList]);
    });

    return api;
})();